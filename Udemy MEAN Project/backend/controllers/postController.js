const express = require('express');
const router = express.Router();
const ObjectID = require('mongoose').Types.ObjectId;

// Import module for creating various route api's........ 
const Post = require('../models/post');


// get all post list
router.get('/', (req, res) => {
    Post.find((err, docs) => {
        if(!err) { 
            res.status(200).json({
                message: 'fetching all data from Database',
                post: docs
            });
        }
        else{ console.log('Error in retrieving Employees :' + JSON.stringify(err, undefined, 2)); }
    });
});


// get a single post
router.get('/:id', (req, res) => {
    // Check ID is valid or not
    if(!ObjectID.isValid(req.params.id))
        return res.status(400).send(`No record with this given id : ${req.params.id}`);

    // find a post by id
    Post.findById(req.params.id).then(post => {
        if (post) {
            res.status(200).json(post)
        } else {
            res.status(404).json({message: 'Post not found'});
        }
    });
});


// save a single post  
router.post('/', (req, res) => {
    const post = new Post({
        title: req.body.title,
        content: req.body.content
    });
    post.save().then(createPost => {
        res.status(201).json({
            message: 'Post Added Successful!',
            postId: createPost._id
        });
    });
});


// Update post
router.put('/:id', (req, res) => {
    // Check ID is valid or not
    if(!ObjectID.isValid(req.params.id))
        return res.status(400).send(`No record with this given id : ${req.params.id}`);
        
    // Store post details coming from frontend
    const postDetails = {
        title: req.body.title,
        content: req.body.content
    }

    // Update post details
    Post.findByIdAndUpdate(req.params.id, {$set: postDetails}, {new: true}, (err, docs) => {
        if (!err) {
            res.status(200).json({ message: 'Post Updated Successful!' });
        }
    })
})


// delete post 
router.delete('/:id', (req, res) => {
    // Check first id is valid or not
    if(!ObjectID.isValid(req.params.id))
        return res.status(400).send(`No record with this given id : ${req.params.id}`);
        
    Post.findByIdAndRemove(req.params.id, (err, docs) => {
        if(!err) { 
            res.status(200).json({
                message: 'Post Deleted!'
            });
        } else { 
            console.log('Error in Employee delete : '+ JSON.stringify(err, undefined, 2)); 
        }
    });        
})

// Don't forget to export router and import it again server.js file
module.exports = router;