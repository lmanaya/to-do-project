import React from "react";
import './TodoList.css';

function TodoList(props) {
    return (
        <section className="TodoList">
            <h3 className="TodoList__title">Todas las tareas</h3>
            <ul>
                {props.children}
            </ul>
        </section>
    );
}

export { TodoList };
