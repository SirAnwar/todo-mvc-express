require('dotenv').config();

const express = require('express');
const connectDB = require('./config/db');
const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

app.get('/', (req, res) => {
    res.send('server is running');
});

app.listen(PORT, () => {
    console.log(`server on port ${PORT}`);
});

