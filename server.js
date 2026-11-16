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

app.use((req, res) => {
    res.status(404).render('error', {
        status: 404,
        message: 'Page not found'
    });
});

app.use((err, req, res, next) => {
    console.error(err);

    if (err.name === 'CastError') {
        return res.status(404).render('error', {
            status: 404,
            message: 'Todo not found'
        });
    }

    res.status(500).render('error', {
        status: 500,
        message: 'Something went wrong'
    });
});


app.listen(PORT, () => {
    console.log(`server on port ${PORT}`);
});

