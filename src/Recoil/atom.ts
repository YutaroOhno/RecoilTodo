import { atom } from 'recoil';
import { Todo } from '../Types';

const todoState = atom<Todo[]>({
    key: "todoAtom",
    default: [],
  });

export default todoState;
