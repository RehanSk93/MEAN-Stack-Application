const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const User = require('../models/user');

// create a function for verify token
function verifyToken(req, res, next){
    if(!req.headers.authorization) {
        return res.status(401).send('Unauthorized Request');
    }
    
    const token = req.headers.authorization.split(' ')[1];
    if(token === null){
        return res.status(401).send('Unauthorized Request');
    }
    
    const payload = jwt.verify(token, 'secretKey');
    
    console.log('payload', payload);

    if(!payload){
        return res.status(401).send('Unauthorized Request');
    }
    next();
}




router.post('/register', (req, res) => {
    const userData = req.body;
    let user = new User(userData);
    user.save((err, docs) => {
        if(!err) {
            // generate web token using jwt
            let payload = { subject: docs._id };
            let token = jwt.sign(payload, 'secretKey');

            res.status(200).json({
                message: 'Data Registered',
                data: docs,
                token: token
            });
        } else {
            console.log('Error in registering User data');
        }
    });
});

router.post('/login', (req, res) => {
    let userData = req.body;

    User.findOne({email: userData.email}, (err, docs) => {
        if(err){
            console.log('Error occurs in login ', err);
        } else {
            if(!docs) {
                res.status(401).send('Invalid Email')
            } else 
            if(docs.password !== userData.password) {
                res.status(401).send('Invalid Password')
            } else {    
                // generate web token using jwt
                let payload = { subject: docs._id };
                let token = jwt.sign(payload, 'secretKey');

                res.status(200).json({
                    message: 'User Login',
                    data: docs,
                    token: token
                });
            }
        }
    });
});


router.get('/special', verifyToken, (req, res) => {
    let special = [
        { "id": "1", "name": "Rehan Sk", "post": "UI Developer" },
        { "id": "2", "name": "Evita Jain", "post": "Geography" },
        { "id": "3", "name": "Debasish Jana", "post": "History" },
        { "id": "4", "name": "Manisankar", "post": "UI Developer" },
        { "id": "5", "name": "Uttam pandab", "post": "History" },
        { "id": "6", "name": "Subhahish", "post": "Geography" },
        { "id": "7", "name": "Susmita", "post": "UI Developer" },
        { "id": "8", "name": "Ruksana Parvin", "post": "Geography" }
    ]

    res.status(200).json({
        "message": "Special data",
        "data": special
    });
});


router.get('/events', (req, res) => {
    let events = [
        { "id": "1", "name": "Rehan Sk", "post": "UI Developer" },
        { "id": "2", "name": "Evita Jain", "post": "Geography" },
        { "id": "3", "name": "Debasish Jana", "post": "History" },
        { "id": "4", "name": "Manisankar", "post": "UI Developer" },
        { "id": "5", "name": "Uttam pandab", "post": "History" },
        { "id": "6", "name": "Subhahish", "post": "Geography" },
        { "id": "7", "name": "Susmita", "post": "UI Developer" },
        { "id": "8", "name": "Ruksana Parvin", "post": "Geography" }
    ]

    res.status(200).json({
        "message": "Events data",
        "data": events
    });
});




// Pagination 
router.get('/pagination', (req, res) => {
    // example array of 150 items to be paged
    const items = [...Array(5).keys()].map(i => ({ id: (i + 1), name: 'Item ' + (i + 1) }));

    // get page from query params or default to first page
    const page = parseInt(req.query.page) || 1;

    // get pager object for specified page
    const pageSize = 10;
    const pager = paginate(items.length, page, pageSize);

    // get page of items from items array
    const pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1);
    
    // return pager object and current page of items
    return res.json({ pager, pageOfItems });
})




// Pager object 
function paginate(
    totalItems,
    currentPage = 1,
    pageSize = 10,
    maxPages = 10
) {
    // calculate total pages
    let totalPages = Math.ceil(totalItems / pageSize);

    // ensure current page isn't out of range
    if (currentPage < 1) {
        currentPage = 1;
    } else if (currentPage > totalPages) {
        currentPage = totalPages;
    }

    let startPage, endPage;
    if (totalPages <= maxPages) {
        // total pages less than max so show all pages
        startPage = 1;
        endPage = totalPages;
    } else {
        // total pages more than max so calculate start and end pages
        let maxPagesBeforeCurrentPage = Math.floor(maxPages / 2);
        let maxPagesAfterCurrentPage = Math.ceil(maxPages / 2) - 1;
        if (currentPage <= maxPagesBeforeCurrentPage) {
            // current page near the start
            startPage = 1;
            endPage = maxPages;
        } else if (currentPage + maxPagesAfterCurrentPage >= totalPages) {
            // current page near the end
            startPage = totalPages - maxPages + 1;
            endPage = totalPages;
        } else {
            // current page somewhere in the middle
            startPage = currentPage - maxPagesBeforeCurrentPage;
            endPage = currentPage + maxPagesAfterCurrentPage;
        }
    }

    // calculate start and end item indexes
    let startIndex = (currentPage - 1) * pageSize;
    let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

    // create an array of pages to ng-repeat in the pager control
    let pages = Array.from(Array((endPage + 1) - startPage).keys()).map(i => startPage + i);

    // return object with all pager properties required by the view
    return {
        totalItems: totalItems,
        currentPage: currentPage,
        pageSize: pageSize,
        totalPages: totalPages,
        startPage: startPage,
        endPage: endPage,
        startIndex: startIndex,
        endIndex: endIndex,
        pages: pages
    };
}

module.exports = router;