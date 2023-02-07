import React from "react";
import { useLocalStorage } from "./../hooks/useLocaleStorage";

const TodoContext = React.createContext();

function TodoProvider(props) {
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

    const createTodo = (text) =>{
        const newTodos = [...todos];
        newTodos.push({
            text: text,
            complete: false,
        })
        setTodos(newTodos);
    }

    const deleteTodo = (text) =>{
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos.splice(todoIndex, 1)
        setTodos(newTodos);
    }

    const [openModal, setOpenModal] = React.useState(false);

    return (
        <TodoContext.Provider value={{
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            renderedTodos,
            completeTodo,
            createTodo,
            deleteTodo,
            openModal,
            setOpenModal,
        }}>
            {props.children}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider };