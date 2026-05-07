import axios from 'axios';
import { Todo } from '../App';

const API_BASE_URL = 'http://localhost:3000';

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const getTodos = async (): Promise<Todo[]> => {
  const response = await api.get('/todos');
  return response.data;
};

export const createTodo = async (text: string): Promise<Todo> => {
  const response = await api.post('/todos', { text });
  return response.data;
};

export const updateTodo = async (id: string): Promise<Todo> => {
  const response = await api.patch(`/todos/${id}`);
  return response.data;
};

export const deleteTodo = async (id: string): Promise<void> => {
  await api.delete(`/todos/${id}`);
};