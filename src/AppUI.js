import './App.css';
import React from "react";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { CreateTodoButton } from "./components/CreateTodoButton";
import { TodoContext } from './context/TodoContext';
import { Modal } from './components/Modal';
import { TodoForm } from './components/TodoForm';

function AppUI() {
    const {
        renderedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
    } = React.useContext(TodoContext);

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
                {openModal && (
                    <Modal setOpenModal={setOpenModal}>
                        <TodoForm />
                    </Modal>
                )}

            </div>
        </div>
    );
}

export { AppUI };
