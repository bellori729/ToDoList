import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';
import { useCallback, useState } from 'react';

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState('');

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  // onClick으로 하고 button에다가 추가해도 처리는 할 수 있으나,
  // 인풋에서 Enter키를 눌러버리면 onSubmit 이벤트가 발생되기 때문에 onSubmit으로 처리하는 것이다.
  // 만약 onClick으로 한다면 onKeyPress 이벤트를 통해 Enter를 감지하는 로직을 또 추가해주어야 한다.
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault(); // 버튼의 기본 기능(새로고침) 차단
      onInsert(value); // text로 들어갈 내용을 현재 input 값에 입력된 value로 전달
      setValue(''); // value 값 초기화
    },
    [onInsert, value],
  );

  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        placeholder="할 일을 적어주세요."
        value={value}
        onChange={onChange}
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
