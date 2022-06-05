import {FC, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import Todo from "./Todo";
import Form from "./Form";

import {getTodos} from "../../../store/todo/todo.actions";

import {AppDispatch, RootState} from "../../../store/store";

import "./index.css";

const TodoList: FC = () => {
  const dispatch: AppDispatch = useDispatch();

  const { todos, loading, error } = useSelector((state: RootState) => state.todo);

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  if (error) {
    return (
      <p>Error</p>
    );
  }

  if (loading) {
    return (
      <p>Loading...</p>
    );
  }

  return (
    <ul className="todo-list">
      {todos.map((todo) => {
        return (
          <Todo key={todo.id} todo={todo} />
        );
      })}
    </ul>
  );
};

export default TodoList;
