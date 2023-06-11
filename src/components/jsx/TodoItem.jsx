import React from 'react'
import "../css/TodoItem.css"
import { Palomita } from '../svg/Palomita';
import { Tache } from '../svg/Tache';


function TodoItem(props){
    return(
      <div className={`item ${props.completed && "item--completed"}`}>
        <li>
          <span 
          id='palomita'
          onClick={props.onComplete}
          ><Palomita/></span>
          <p>{props.texto}</p>
          <span
          id='tache'
          onClick={props.onDelete}
          ><Tache color={"#ffffffff"}/></span>
        </li>
      </div>
    );
  }

export {TodoItem}
