const Todo = require('../models/Todo');

const getTodos = async (req, res) => {
    const todos = await Todo.find();
    res.render('index', { todos });
};

const createTodo = async (req, res) => {
    await Todo.create(req.body);
    res.redirect('/');
};

module.exports = { getTodos, createTodo};
