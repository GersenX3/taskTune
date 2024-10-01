import React from 'react';
import '../css/TodoCounter.css';
import { TodoContext } from '../../Context/TodoContext';

function TodoCounter() {
    const {
        completedTodos,
        totalTodos,
        openModal,
        setOpenModal,
        setButtonInfo,
    } = React.useContext(TodoContext);

    return (
        <>
            <button
                id="infoButton"
                onClick={() => {
                    setOpenModal(!openModal);
                    setButtonInfo(true);
                }}
            >
                ?
            </button>
            <div className="title">
                <h1 id="titulo">Task tune</h1>

                {completedTodos == totalTodos && (
                    <h1>Finished all your tasks</h1>
                )}
                {completedTodos != totalTodos && (
                    <h1>
                        You have completed <span>{completedTodos}</span> of{' '}
                        <span>{totalTodos}</span> To do&apos;s
                    </h1>
                )}
            </div>
        </>
    );
}

export { TodoCounter };

//       {(!loading && searchedTodos.length == 0) && <TodosEmpty/>}
