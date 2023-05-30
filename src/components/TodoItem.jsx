import React from 'react'
import "./TodoItem.css"

function TodoItem(props){
    return(
      <div className={`item ${props.completed && "item--completed"}`}>
        <li>
          <span id='palomita'>V</span>
          <p>{props.texto}</p>
          <span id='tache'>X</span>
        </li>
      </div>
    );
  }

export {TodoItem}
