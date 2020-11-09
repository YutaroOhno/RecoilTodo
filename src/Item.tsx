import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import todoState from "./Recoil/atom";
import { Todo } from "./Types";

type Props = {
  todo: Todo;
}

const Item = (props: Props) => {

  const todos: Todo[] = useRecoilValue<Todo[]>(todoState);
  const setTodo = useSetRecoilState<Todo[]>(todoState);

  const toggleStatus = (targetTodo: Todo) => {
    const index = todos.findIndex((todo: Todo) => todo === targetTodo);
    const newTodo: Todo = { ...todos[index], finished: !targetTodo.finished };

    setTodo([...todos.slice(0, index), newTodo, ...todos.slice(index + 1)]);
  };

  return (
    <li>
    <input type="checkbox" onChange={() => toggleStatus(props.todo)}></input>
      <span
          style={
          props.todo.finished
              ? { textDecoration: "line-through" }
              : { textDecoration: "none" }
          }
      >
          {props.todo.name}
      </span>
    </li>
  );
};

export default Item;