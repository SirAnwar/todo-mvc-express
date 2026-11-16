const Todo = require('../models/Todo');

const getTodos = async (req, res) => {
    const todos = await Todo.find();
    res.render('index', { todos });
};

const createTodo = async (req, res) => {
    await Todo.create(req.body);
    res.redirect('/');
};

const deleteTodo = async (req, res) => {
    await Todo.findByIdAndDelete(req.params.id);
    res.redirect('/');
};

const getEditTodo = async (req, res) => {
    const todo = await Todo.findById(req.params.id);
    res.render('edit', { todo });
};

module.exports = { getTodos, createTodo, deleteTodo, getEditTodo};
