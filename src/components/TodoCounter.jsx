import React from 'react'
import "../components/TodoCounter.css"


function TodoCounter({total,completed}) {
  return (
    <>
      <div className='title'>
        <h1 id='titulo'>To do app</h1>
      <h1>You have completed <span>{completed}</span> of <span>{total}</span> To do's</h1>
      </div>
    </>
  )
}

export {TodoCounter};
