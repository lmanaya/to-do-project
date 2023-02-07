import React from "react";
import './TodoCounter.css';

function TodoCounter(props) {
    const completedPercentage = Math.round(100 * props.completedTodos / props.totalTodos);

    return (
        <div className="TodoCounter">
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
