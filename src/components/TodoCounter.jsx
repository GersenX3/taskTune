import React from 'react'

function TodoCounter({total,completed}) {
  return (
    <div>
      <h1>Has completado {completed} de {total} To do's</h1>
    </div>
  )
}

export {TodoCounter};
