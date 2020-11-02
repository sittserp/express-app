require('dotenv').config();

const express = require('express')
const app = express()
const cors = require('cors');

app.use(cors());

const port = process.env.PORT;

app.get('/', (req, res) => {
    console.log(new Date());
    res.json([
        {
            name: 'spot'
        },
        {
            name: 'rover'
        }
    ]);
});

app.get('/trees', (req, res) => {
    const trees = [
        {
            name: 'fir'
        },
        {
            name: 'maple'
        },
        {
            name: 'oak'
        }
    ];

    res.json(trees);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});