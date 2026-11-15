const Todo = require('../models/Todo');

const getTodos = async (req, res) => {
    const todos = await Todo.find();
    res.render('index', { todos });
};

module.exports = { getTodos };
