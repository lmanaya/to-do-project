import React from "react";
import './CreateTodoButton.css';
import { TodoContext } from "../context/TodoContext"

function CreateTodoButton() {
    const {setOpenModal} = React.useContext(TodoContext);

    function openModalButton() {
        setOpenModal(true);
    }

    return (
        <button className="CreateTodoButton" onClick={openModalButton}>+</button>
    );
}

export { CreateTodoButton };
