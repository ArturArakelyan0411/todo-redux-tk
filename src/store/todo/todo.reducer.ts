import {createReducer, nanoid} from "@reduxjs/toolkit";

import {getTodos, addTodo, changeEditingTodo, deleteTodo, editTodo, changeTodoDone} from "./todo.actions";

import ITodo from "../../types/Todo";

export interface TodoInitialState {
  todos: ITodo[];
  editing: ITodo | null;
  loading: boolean;
  error: boolean;
}

export const initialState: TodoInitialState = {
  todos: [],
  editing: null,
  loading: false,
  error: false,
};

const todoReducer = createReducer(initialState, (builder) => {
  builder.addCase(getTodos.pending, (state) => {
    state.loading = true;
    state.error = false;
  });
  builder.addCase(getTodos.rejected, (state) => {
    state.loading = false;
    state.error = true;
  });
  builder.addCase(getTodos.fulfilled, (state, action) => {
    state.todos = action.payload;
    state.loading = false;
    state.error = false;
  });
  builder.addCase(addTodo, (state, action) => {
    state.todos.unshift({
      id: nanoid(),
      name: action.payload,
      done: false,
    });
  });
  builder.addCase(deleteTodo, (state, action) => {
    state.todos = state.todos.filter((todo) => todo.id !== action.payload);
  });
  builder.addCase(changeEditingTodo, (state, action) => {
    state.editing = action.payload;
  });
  builder.addCase(editTodo, (state, action) => {
    for (let todo of state.todos) {
      if (todo.id === state.editing?.id) {
        todo.name = action.payload;
        break;
      }
    }
  });
  builder.addCase(changeTodoDone, (state, action) => {
    for (let todo of state.todos) {
      if (todo.id === action.payload) {
        todo.done = !todo.done;
        break;
      }
    }
  });
  builder.addDefaultCase((state) => state);
});

export default todoReducer;
