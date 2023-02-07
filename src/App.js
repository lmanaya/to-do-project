// import logo from './logo.svg';
import './App.css';
import React from "react";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { CreateTodoButton } from "./components/CreateTodoButton";

function useLocalStorage(itemName, initialValue) {
  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem;

  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = [];
  } else {
    parsedItem = JSON.parse(localStorageItem);
  }

  const [item, setItem] = React.useState(parsedItem);
  const saveItem = (newItem) =>{
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  }

  return [item, saveItem];
}

function App() {
  const [todos, setTodos] = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => todo.complete).length;
  const totalTodos = todos.length;

  let renderedTodos = [];
  if (searchValue.length === 0) {
    renderedTodos = todos;
  } else {
    const searchText = searchValue.toLowerCase();
    renderedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const completeTodo = (text) =>{
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].complete = !newTodos[todoIndex].complete;
    setTodos(newTodos);
  }

  const deleteTodo = (text) =>{
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1)
    setTodos(newTodos);
  }

  return (
    <div className='TodoApp'>
      <div className='Todo'>
        <div className='Todo__header Todo--mb'>
          <div className='Todo__column'>
            <h1 className='Todo__title Todo--mb'>Mis tareas</h1>
            <TodoSearch
              searchValue={searchValue}
              setSearchValue={setSearchValue}
            />
          </div>
          <div className='Todo__column'>
            <TodoCounter
              completedTodos={completedTodos}
              totalTodos={totalTodos}
            />
          </div>
        </div>
        <TodoList>
          {renderedTodos.map(todo => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              complete={todo.complete}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          ))}
        </TodoList>
        <CreateTodoButton />
      </div>
    </div>
  );
}

export default App;
