export default interface ITodo {
  id: string;
  name: string;
  done: boolean;
}

export interface ITodoFromAPI {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
