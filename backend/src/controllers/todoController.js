const { getAllTodos, addTodo, toggleTodo, removeTodo } = require('../models/todoModel');

// GET /todos
const getTodos = async (req, res) => {
  try {
    const todos = getAllTodos();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// POST /todos
const createTodo = async (req, res) => {
  try {
    const { text } = req.body;
    if (!text || text.trim() === '') {
      return res.status(400).json({ error: 'Text is required' });
    }
    const newTodo = addTodo(text.trim());
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// PATCH /todos/:id
const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedTodo = toggleTodo(id);
    if (!updatedTodo) {
      return res.status(404).json({ error: 'Todo not found' });
    }
    res.json(updatedTodo);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// DELETE /todos/:id
const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = removeTodo(id);
    if (!deleted) {
      return res.status(404).json({ error: 'Todo not found' });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
};