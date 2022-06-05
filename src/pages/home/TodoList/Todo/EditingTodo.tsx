import {BaseSyntheticEvent, FC, useState} from "react";
import {useDispatch} from "react-redux";

import {changeEditingTodo, editTodo} from "../../../../store/todo/todo.actions";

import {AppDispatch} from "../../../../store/store";

import ITodo from "../../../../types/Todo";

interface Props {
  todo: ITodo;
}

const EditingTodo: FC<Props> = ({ todo }) => {
  const dispatch: AppDispatch = useDispatch();

  const [value, setValue] = useState<string>(todo.name);

  const handleSubmit = (e: BaseSyntheticEvent) => {
    e.preventDefault();

    if (!value.trim()) {
      return;
    }

    dispatch(editTodo(value));

    handleCancel();
  };

  const handleCancel = () => {
    dispatch(changeEditingTodo(null));
  };

  const handleChange = (e: BaseSyntheticEvent) => {
    setValue(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="todo todo-editing">
      <input
        type="text"
        className="todo-input"
        value={value}
        onChange={handleChange}
        placeholder={todo.name}
        autoFocus
      />
      <div className="todo-actions">
        <button className="todo-action" type="submit">
          Save
        </button>
        <button className="todo-action" type="button" onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EditingTodo;
