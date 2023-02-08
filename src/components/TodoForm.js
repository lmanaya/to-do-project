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
                <textarea
                    className="TodoForm__textarea Text Text--Large Mb-05"
                    value={newText}
                    onChange={onChange}
                    placeholder="Write a new task"
                ></textarea>
            </div>
            <div className="TodoForm__buttonSection">
                <button
                    className="TodoForm__button TodoForm__cancelButton"
                    onClick={onCancel}
                    type="button"
                >Cancel</button>
                <button
                    className="TodoForm__button TodoForm__submitButton"
                    onClick={onSubmit}
                    type="button"
                >Create</button>
            </div>
        </form>
    );
}

export { TodoForm };
