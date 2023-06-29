import React from 'react'
import "../css/TodoList.css"

 function TodoList({children}) {
  return (
    <>
        <ul className='TodoList'>
            {children}
        </ul>
    </>
  )
}

export {TodoList}
