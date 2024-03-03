import { MdOutlinePlaylistAdd } from 'react-icons/md';
import './TodoTemplate.scss';

const TodoInsert = () => {
  return (
    <form className="TodoInsert">
      <input placeholder="할 일을 적어주세요." />
      <button type="submit">
        <MdOutlinePlaylistAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
