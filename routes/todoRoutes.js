const express = require('express');
const router = express.Router();
const { getTodos, createTodo, deleteTodo, getEditTodo } = require('../controllers/todoController');

router.get('/', getTodos);
router.post('/todos', createTodo);
router.delete('/todos/:id', deleteTodo);
router.get('/todos/:id/edit', getEditTodo);

module.exports = router;
