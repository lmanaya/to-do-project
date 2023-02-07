import './TodoCounter.css';
import React from "react";
import { TodoContext } from "../context/TodoContext"

function TodoCounter() {
    const {completedTodos, totalTodos} = React.useContext(TodoContext);
    let completedPercentage = 0;
    if (totalTodos > 0) {
        completedPercentage = Math.round(100 * completedTodos / totalTodos);
    }

    return (
        <div className={`TodoCounter ${totalTodos > 0 &&'TodoCounter--shown'}`}>
            <div className="TodoCounter__container">
                <div className="TodoCounter__progress" style={{background: `conic-gradient(#abedd8 ${completedPercentage * 3.6}deg, transparent 0deg)`}}>
                    <span className="TodoCounter__value">{completedPercentage}%</span>
                </div>
                <span className="TodoCounter__text">Tareas <br />completadas</span>
            </div>
        </div>
    );
}

export { TodoCounter };
