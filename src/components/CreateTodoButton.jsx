import React from 'react'
import "./CreateTodoButton.css"

function CreateTodoButton() {
  return (
    <div className='boton'>
      <button 
      onClick={
        (event) => {
          console.log("Diste click");
          console.log(event);
          console.log(event.target);
        }
      }
    ><span>+</span> Add a task</button>
    </div>
  )
}

export {CreateTodoButton};
