import React from 'react';
import './TodoList.scss';
import TodoListItem from './TodoListItem';

const TodoList = ({ todos, onRemove, onToggle }) => {
  return (
    <div className="TodoList">
      {todos.map((todo) => (
        <TodoListItem
          todo={todo}
          key={todo.key}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};

// 부모 요소인 App 컴포넌트에서 다른 state가 추가되어 해당 값들이 업데이트 될 때에는 TodoList 컴포넌트가 불필요한 리렌더링이 발생되는데 React.memo를 활용하여 이를 방지
export default React.memo(TodoList);
