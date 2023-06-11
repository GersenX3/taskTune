import React from 'react'
import "../css/TodoList.css"

 function TodoList({children}) {
  return (
    <>
        <ul>
            {children}
        </ul>
    </>
  )
}

export {TodoList}
