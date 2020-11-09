import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import todoState from "./Recoil/atom";
import { Todo } from "./Types";

const InputForm = () => {
  const [state, setState] = useState<string>("");
  const setTodo = useSetRecoilState<Todo[]>(todoState);
  return (
    <>
      <input onChange={(val) => setState(val.target.value)}></input>
      <button
        onClick={() =>
          setTodo((oldState: Todo[]) => [
            ...oldState,
            { name: state, finished: false },
          ])
        }
      >
        Add
      </button>
    </>
  );
};

export default InputForm;