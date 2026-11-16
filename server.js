require('dotenv').config();

const express = require('express');
const connectDB = require('./config/db');
const todoRoutes = require('./routes/todoRoutes');
const methodOverride = require('method-override');
const app = express();
const PORT = process.env.PORT || 3000;


connectDB();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.use('/', todoRoutes);

app.listen(PORT, () => {
    console.log(`server on port ${PORT}`);
});

