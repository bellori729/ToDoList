import './TodoList.scss';
import TodoListItem from './TodoListItem';

const TodoList = ({ todos }) => {
  return (
    <div className="TodoList">
      {todos.map((todo) => (
        <TodoListItem todo={todo} key={todo.key} />
      ))}
    </div>
  );
};

export default TodoList;
