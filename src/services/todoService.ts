import {nanoid} from "@reduxjs/toolkit";

import ITodo, {ITodoFromAPI} from "../types/Todo";

class TodoService {
  async getTodos() {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data: ITodoFromAPI[] = await res.json();

    const todos: ITodo[] = data.map(({title, completed}) => {
      return {
        id: nanoid(),
        name: title,
        done: completed,
      };
    }).slice(0, 4);

    return todos;
  }
}

export default new TodoService();
