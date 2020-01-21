const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const dbCon = require('./dbCon');
const api = require('./routes/api');

const PORT = 3030;

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/api', api);

app.use('/', (req, res) => {
    res.send('Response from server');
});


app.listen(PORT, ()=> {
    console.log('server is connected with port - ',PORT);
})