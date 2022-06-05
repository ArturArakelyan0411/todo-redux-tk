import {FC} from "react";

import TodoList from "./TodoList";
import Form from "./TodoList/Form";

import "./index.css";

const Home: FC = () => {
  return (
    <div className="home">
      <div className="container">
        <div className="home-content">
          <div className="todos">
            <Form />
            <TodoList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
