import React from 'react'
import "../components/TodoCounter.css"


function TodoCounter({total,completed}) {
  return (
    <>
      <h1>You have completed {completed} of {total} To do's</h1>
    </>
  )
}

export {TodoCounter};
