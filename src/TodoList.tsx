import React from "react";
import { useRecoilValue } from "recoil";
import todoState from "./Recoil/atom";
import { Todo } from "./Types";
import Item from "./Item";

const TodoList = () => {
  const todos: Todo[] = useRecoilValue<Todo[]>(todoState);

  return (
    <ul style={{ listStyle: "none" }}>
      {todos.map((todo) => {
        return (
          <Item todo={todo} />
        );
      })}
    </ul>
  );
};

export default TodoList;