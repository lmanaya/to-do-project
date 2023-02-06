// import logo from './logo.svg';
import './App.css';
import React from "react";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { CreateTodoButton } from "./components/CreateTodoButton";

const todos = [
  { text: 'Lavar la loza', complete: false },
  { text: 'Tomar agua', complete: false },
  { text: 'Pasear al perro', complete: true }
]

function App() {
  return (
    <div className='TodoApp'>
      <div className='Todo'>
        <div className='Todo__header Todo--mb'>
          <div className='Todo__column'>
            <h1 className='Todo__title Todo--mb'>Mis tareas</h1>
            <TodoSearch />
          </div>
          <div className='Todo__column'>
            <TodoCounter />
          </div>
        </div>
        <TodoList>
          {todos.map(todo => (
            <TodoItem key={todo.text} text={todo.text} complete={todo.complete}/>
          ))}
        </TodoList>
        <CreateTodoButton />
      </div>
    </div>
  );
}

export default App;
