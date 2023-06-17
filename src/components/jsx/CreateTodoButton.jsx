import React from 'react'
import "../css/CreateTodoButton.css"
import { TodoContext } from '../../Context/TodoContext';

function CreateTodoButton() {
  const {
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);
  return (
    <div className='boton'>
      <button 
      onClick={
        () => {
          if(openModal){
            setOpenModal(false);
          }
          else{
            setOpenModal(true);
          }
        }
      }
    ><span>+</span> Add a task</button>
    </div>
  )
}

export {CreateTodoButton};