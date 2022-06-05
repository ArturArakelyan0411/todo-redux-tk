import {FC} from "react";
import {useDispatch, useSelector} from "react-redux";

import ITodo from "../../../../types/Todo";

import {changeEditingTodo, changeTodoDone, deleteTodo} from "../../../../store/todo/todo.actions";

import {AppDispatch, RootState} from "../../../../store/store";

import EditingTodo from "./EditingTodo";

import "./index.css";

interface Props {
  todo: ITodo;
}

const Todo: FC<Props> = ({ todo }) => {
  const dispatch: AppDispatch = useDispatch();

  const editing = useSelector((state: RootState) => state.todo.editing);
  const isEditing = !!(editing && editing.id === todo.id);

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  const handleEdit = () => {
    dispatch(changeEditingTodo(todo));
  };

  const handleChangeDone = () => {
    dispatch(changeTodoDone(todo.id));
  };

  if (isEditing) {
    return <EditingTodo todo={editing} />;
  }

  return (
    <div className={`todo ${todo.done ? "todo-done" : ""}`}>
      <p className="todo-title" onClick={handleChangeDone}>{todo.name}</p>
      <div className="todo-actions">
        <button className="todo-action" onClick={handleDelete}>Delete</button>
        <button className="todo-action" onClick={handleEdit}>Edit</button>
      </div>
    </div>
  );
};

export default Todo;
