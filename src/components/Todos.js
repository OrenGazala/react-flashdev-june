import { useState } from 'react';
import Todo from './Todo';

const Todos = () => {
  // const todos = useSelector(state => state.todosReducer);
  const [todos, setTodos] = useState([
    {
      id: '1',
      name: 'todo1',
    },
    {
      id: '2',
      name: 'todo2',
    },
  ]);

  const deleteTodo = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);

    setTodos(filteredTodos);
  };

  const todoList = todos.map((todo) => {
    return <Todo key={todo.id} id={todo.id} name={todo.name} deleteTodo={deleteTodo} />;
  });

  return <>{todoList}</>;
};

export default Todos;
