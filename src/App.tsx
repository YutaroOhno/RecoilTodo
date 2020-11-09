import React from 'react';
import InputForm from "./InputForm";
import TodoList from "./TodoList";
import './App.css';

const App = () => {
  return (
    <div className="App">
      <InputForm />
      <TodoList />
    </div>
  );
}

export default App;