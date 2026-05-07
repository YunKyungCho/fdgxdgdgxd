import { useState, useEffect } from 'react';
import TodoInput from './components/TodoInput/TodoInput';
import TodoList from './components/TodoList/TodoList';
import { getTodos, createTodo, updateTodo, deleteTodo } from './services/api';

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    setLoading(true);
    try {
      const data = await getTodos();
      setTodos(data);
      setError(null);
    } catch (err) {
      setError('할 일을 불러오는데 실패했습니다.');
    } finally {
      setLoading(false);
    }
  };

  const handleAddTodo = async (text: string) => {
    try {
      const newTodo = await createTodo(text);
      setTodos([newTodo, ...todos]);
    } catch (err) {
      setError('할 일을 추가하는데 실패했습니다.');
    }
  };

  const handleToggleTodo = async (id: string) => {
    try {
      const updatedTodo = await updateTodo(id);
      setTodos(todos.map(todo => todo.id === id ? updatedTodo : todo));
    } catch (err) {
      setError('할 일 상태를 변경하는데 실패했습니다.');
    }
  };

  const handleDeleteTodo = async (id: string) => {
    try {
      await deleteTodo(id);
      setTodos(todos.filter(todo => todo.id !== id));
    } catch (err) {
      setError('할 일을 삭제하는데 실패했습니다.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold text-center mb-8 text-gray-800">
          오늘의 할 일
        </h1>
        
        <TodoInput onAdd={handleAddTodo} />
        
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-4">
            {error}
          </div>
        )}
        
        {loading ? (
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto"></div>
          </div>
        ) : (
          <TodoList 
            todos={todos} 
            onToggle={handleToggleTodo} 
            onDelete={handleDeleteTodo} 
          />
        )}
      </div>
    </div>
  );
}

export default App;