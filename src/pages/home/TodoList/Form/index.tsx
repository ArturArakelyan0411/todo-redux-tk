import {BaseSyntheticEvent, FC, useState} from "react";
import {useDispatch} from "react-redux";

import {addTodo} from "../../../../store/todo/todo.actions";

import {AppDispatch} from "../../../../store/store";

import "./index.css";

const Form: FC = () => {
  const dispatch: AppDispatch = useDispatch();

  const [value, setValue] = useState<string>('');

  const handleSubmit = (e: BaseSyntheticEvent) => {
    e.preventDefault();

    if (!value.trim()) {
      return;
    }

    dispatch(addTodo(value));
    setValue('');
  };

  const handleChange = (e: BaseSyntheticEvent) => {
    setValue(e.target.value);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-input"
        value={value}
        onChange={handleChange}
        placeholder="Todo..."
        autoFocus
      />
      <button className="form-submit" type="submit">
        Add
      </button>
    </form>
  );
};

export default Form;
