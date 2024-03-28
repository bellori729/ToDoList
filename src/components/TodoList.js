import React, { useCallback } from 'react';
import { List } from 'react-virtualized';
import './TodoList.scss';
import TodoListItem from './TodoListItem';

const TodoList = ({ todos, onRemove, onToggle }) => {
  const rowRenderer = useCallback(
    ({ index, key, style }) => {
      const todo = todos[index];
      return (
        <TodoListItem
          todo={todo}
          key={key}
          onRemove={onRemove}
          onToggle={onToggle}
          style={style}
        />
      );
    },
    [todos, onRemove, onToggle],
  );
  return (
    <List
      className="TodoList"
      width={512} // TodoListItem 각 요소 너비 512px
      height={513} // TodoListItem 각 요소 1개 당 높이 57px * 9
      rowCount={todos.length} // 요소 개수
      rowHeight={57} // 요소 높이
      rowRenderer={rowRenderer} // 요소를 렌더링할 때 쓰는 함수
      list={todos}
      style={{ outline: 'none' }} // List에 기본 적용되는 outline 제거
    />
  );
};

// 부모 요소인 App 컴포넌트에서 다른 state가 추가되어 해당 값들이 업데이트 될 때에는 TodoList 컴포넌트가 불필요한 리렌더링이 발생되는데 React.memo를 활용하여 이를 방지
export default React.memo(TodoList);
