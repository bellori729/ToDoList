import { useCallback, useRef, useState } from 'react';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';

const createBulkTodos = () => {
  const arr = [];
  let i;
  for (i = 1; i <= 2500; i++) {
    arr.push({
      id: i,
      text: `할 일${i}`,
      checked: false,
    });
  }
  return arr;
};

const App = () => {
  const [todos, setTodos] = useState(createBulkTodos);
  // createBulkTodos() 이렇게 넣으면 리렌더링 될 때마다 함수가 실행된다.
  // createBulkTodo 이렇게 넣어야 최초 렌더링 될 때에만 함수가 1회 실행된다.

  const nextId = useRef(4);

  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo)); // 기존 배열에 todo 데이터를 이어붙여 새로운 배열로 반환
      nextId.current += 1;
    },
    [todos],
  );

  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos],
  );

  const onToggle = useCallback(
    (id) => {
      setTodos(
        todos.map(
          (todo) =>
            todo.id === id ? { ...todo, checked: !todo.checked } : todo, // 기존의 todos 요소들의 id 중 인자로 받아온 id와 일치한 애만 checked 토글 진행
        ),
      );
    },
    [todos],
  );

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
};

export default App;
