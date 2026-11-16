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

const updateTodo = async (req, res) => {
    await Todo.findByIdAndUpdate(req.params.id, {
        title: req.body.title,
        dueDate: req.body.dueDate || null,
        completed: req.body.completed === 'on'
    });
    res.redirect('/');
};


module.exports = { getTodos, createTodo, deleteTodo, getEditTodo, updateTodo};
