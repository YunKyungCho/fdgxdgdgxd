const express = require('express');
const { getTodos, createTodo, updateTodo, deleteTodo } = require('../controllers/todoController');

const router = express.Router();

// GET /todos - 전체 할 일 조회
router.get('/', getTodos);

// POST /todos - 할 일 추가
router.post('/', createTodo);

// PATCH /todos/:id - 완료 상태 토글
router.patch('/:id', updateTodo);

// DELETE /todos/:id - 할 일 삭제
router.delete('/:id', deleteTodo);

module.exports = router;