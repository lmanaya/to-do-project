import React from "react";
import './TodoForm.css';
import { TodoContext } from "../context/TodoContext"

function TodoForm() {
    const [newText, setNewText] = React.useState('');
    const {createTodo, setOpenModal} = React.useContext(TodoContext);

    const onChange = (e) => {
        setNewText(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        createTodo(newText);
        setOpenModal(false);
    }

    function onCancel() {
        setOpenModal(false);
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="Todo--mb">
                <p
                    className="TodoForm__title Todo--mb"
                >Nueva tarea</p>
                <textarea
                    className="TodoForm__textarea"
                    value={newText}
                    onChange={onChange}
                    placeholder="Escribe tu nueva tarea"
                ></textarea>
            </div>
            <div className="Todo__header">
                <button
                    className="TodoForm__button TodoForm__cancelButton"
                    onClick={onCancel}
                    type="button"
                >Cancelar</button>
                <button
                    className="TodoForm__button TodoForm__submitButton"
                    onClick={onSubmit}
                    type="button"
                >Crear</button>
            </div>
        </form>
    );
}

export { TodoForm };
