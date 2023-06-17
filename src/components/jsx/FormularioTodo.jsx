import React from 'react'
import { TodoContext } from '../../Context/TodoContext';
import "../css/FormularioTodo.css"

 function FormularioTodo() {
    const {
        addTodo,
        setOpenModal,
      } = React.useContext(TodoContext);

      const onSubmit = (event)=>{
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };
    const [newTodoValue, setNewTodoValue] = React.useState("");

  return (
    <>
        <div id='blackout'
        onClick={() => {setOpenModal(false);}}
        ></div>
        <div className='formTodo'>
            <form onSubmit={onSubmit}>
                <div id='divLabel'>
                <label htmlFor="">Write your new task</label>
                </div>
                <textarea
                    placeholder='Play Catsoul'
                    value={newTodoValue}
                    onChange={(event)=>{
                        setNewTodoValue(event.target.value);
                      }}
                />
                <button
                onClick={() => {setOpenModal(false);}}
                type='button'
                className='cancel'>Cancel</button>
                <button
                type='submit'
                className='create'>Create</button>

            </form>
        </div>
    </>
  )
}

export {FormularioTodo}