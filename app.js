const express = require('express');
const app = express();
let data = require('./data');
const users = require('./routes/users');

//for future use
app.use(express.static('public'));
app.use(express.json());

app.use('/api/v1/users', users);

app.get('/', (req, res) => {
    res.status(200).send('Halow worldi');
})

const port = 3000

app.listen(port, () => console.log(`Listening to the port ${port}`));
