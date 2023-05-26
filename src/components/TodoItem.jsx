import React from 'react'

function TodoItem({texto},{completed}){
    return(
      <li>
        <span>V</span>
        <p>{texto}</p>
        <span>x</span>
      </li>
    );
  }

export {TodoItem}
