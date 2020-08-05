const express = require('express')
const { db } = require('./db/index')
const app = express();
const port = 3000;

db();
app.get('/', (req, res) => {
    res.send("hello STU")
});

app.listen(port, () => {
    console.log("server runs at port " + port);
});