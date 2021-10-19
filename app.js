const express = require('express');
const app = express();
let data = require('./data');
const users = require('./routes/users');


app.use(express.static('public'));
app.use(express.json());


// For treating cross-origin
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

app.use('/api/v1/users' ,users);

const port = 3000

app.listen(port, () => console.log(`Listening to the port ${port}`));
