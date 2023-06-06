import React from 'react'
import "./TodoItem.css"

function TodoItem(props){
    return(
      <div className={`item ${props.completed && "item--completed"}`}>
        <li>
          <span 
          id='palomita'
          onClick={props.onComplete}
          >V</span>
          <p>{props.texto}</p>
          <span
          id='tache'
          onClick={props.onDelete}
          >X</span>
        </li>
      </div>
    );
  }

export {TodoItem}
