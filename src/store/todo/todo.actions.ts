import {createAction, createAsyncThunk} from "@reduxjs/toolkit";

import ITodo from "../../types/Todo";

import todoService from "../../services/todoService";

import {GET_TODOS, ADD_TODO, DELETE_TODO, EDIT_TODO, CHANGE_EDITING_TODO, CHANGE_TODO_DONE} from "./todo.actionTypes";

export const addTodo = createAction<string>(ADD_TODO);
export const deleteTodo = createAction<string>(DELETE_TODO);
export const editTodo = createAction<string>(EDIT_TODO);
export const changeEditingTodo = createAction<ITodo | null>(CHANGE_EDITING_TODO);
export const changeTodoDone = createAction<string>(CHANGE_TODO_DONE);

export const getTodos = createAsyncThunk(GET_TODOS, async () => {
  return await todoService.getTodos();
});
