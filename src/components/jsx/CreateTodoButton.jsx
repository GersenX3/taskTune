import React from 'react';
import '../css/CreateTodoButton.css';
import { TodoContext } from '../../Context/TodoContext';

function CreateTodoButton() {
    const { openModal, setOpenModal, buttonTask, setButtonTask } =
        React.useContext(TodoContext);
    return (
        <div className="boton">
            <button
                onClick={() => {
                    setOpenModal(!openModal);
                    setButtonTask(!buttonTask);
                }}
            >
                <span>+</span> Add a task
            </button>
        </div>
    );
}

export { CreateTodoButton };
