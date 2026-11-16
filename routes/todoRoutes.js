const express = require('express');
const router = express.Router();
const { getTodos, createTodo, deleteTodo, getEditTodo, updateTodo, toggleTodo } = require('../controllers/todoController');

router.get('/', getTodos);
router.post('/todos', createTodo);
router.delete('/todos/:id', deleteTodo);
router.get('/todos/:id/edit', getEditTodo);
router.put('/todos/:id', updateTodo);
router.patch('/todos/:id/toggle', toggleTodo);

module.exports = router;