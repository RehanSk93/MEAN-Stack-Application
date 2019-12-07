const express = require('express');
const bodyParser = require('body-parser');

// Set your post no
const port = process.env.port | '3000';

// External file's
const dbCon = require('./dbCon');
const postController = require('./controllers/postController');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// CORS Implementation
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    next();
});

// List of POST Api is connected here
app.use('/post', postController);


// Default or root api
app.use('/', (req, res) => {
    res.json({
        message: 'Our default api is working properly'
    })
})

app.listen(port, () => console.log('Server started at port no', port));