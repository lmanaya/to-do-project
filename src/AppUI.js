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
import { useHandleResize } from './hooks/useHandleResize';

function AppUI() {
    const { isDesktop } = useHandleResize();

    const {
        renderedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
    } = React.useContext(TodoContext);

    return (
        <div className='TodoApp'>
            <div className='TodoApp__columns'>
                <div className='TodoApp__column'>
                    <div className='TodoApp--w100'>
                        <div className='Mb-2'>
                            <p className='Title Title--Large'>Hi Liyeira!</p>
                            <p className='Text Text--Large'>Welcome back to the workspace</p>
                        </div>
                        {isDesktop && (
                            <TodoForm />
                        )}
                    </div>
                    <TodoCounter />
                </div>
                <div className='TodoApp__column'>
                    <div className='Mb-1'>
                        <p className='Subtitle'>TO DO LIST</p>
                    </div>
                    <TodoSearch />
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
                </div>
            </div>
            {!isDesktop && (
                <CreateTodoButton />
            )}
            {openModal && (
                <Modal setOpenModal={setOpenModal}>
                    <TodoForm />
                </Modal>
            )}
        </div>
    );
}

export default AppUI;
