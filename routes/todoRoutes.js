const express = require('express');
const router = express.Router();
const { getTodos, createTodo, deleteTodo } = require('../controllers/todoController');

router.get('/', getTodos);
router.post('/todos', createTodo);
router.delete('/todos/:id', deleteTodo);

module.exports = router;
