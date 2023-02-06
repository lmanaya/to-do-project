import React from "react";
import './TodoCounter.css';

function TodoCounter() {
    return (
        <div className="TodoCounter">
            <div className="TodoCounter__container">
                <div className="TodoCounter__progress">
                    <span className="TodoCounter__value">0%</span>
                </div>
                <span className="TodoCounter__text">Tareas <br />completadas</span>
            </div>
        </div>
    );
}

export { TodoCounter };
