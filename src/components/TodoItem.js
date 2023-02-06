import React from "react";

function TodoItem(props) {
    return (
        <li>
            <span>{props.text}</span>
            <span>{props.complete}</span>
        </li>
    );
}

export { TodoItem };
