const express = require('express');


const PORT = '3000';

const app = express();

app.use('/', (req, res) => {
    res.send('Server working');
});

app.listen(PORT, () => {
    console.log('server listen at port ', PORT)
});
