const { v4: uuidv4 } = require('uuid');

// In-memory storage
let todos = [];

// Get all todos
const getAllTodos = () => {
  return [...todos].reverse(); // Return in reverse order (newest first)
};

// Add a new todo
const addTodo = (text) => {
  const newTodo = {
    id: uuidv4(),
    text,
    completed: false,
  };
  todos.push(newTodo);
  return newTodo;
};

// Toggle todo completion
const toggleTodo = (id) => {
  const todo = todos.find(t => t.id === id);
  if (todo) {
    todo.completed = !todo.completed;
    return { ...todo };
  }
  return null;
};

// Remove a todo
const removeTodo = (id) => {
  const index = todos.findIndex(t => t.id === id);
  if (index !== -1) {
    todos.splice(index, 1);
    return true;
  }
  return false;
};

module.exports = {
  getAllTodos,
  addTodo,
  toggleTodo,
  removeTodo,
};