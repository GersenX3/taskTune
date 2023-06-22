import React from 'react'
import "../css/TodoCounter.css"
import { TodoContext } from '../../Context/TodoContext';


function TodoCounter() {
  const {
    completedTodos,
    totalTodos
  } = React.useContext(TodoContext);

  return (
    <>
      <div className='title'>
        <h1 id='titulo'>To do app</h1>
        {(completedTodos==totalTodos) && 
                <h1>No tasks, go get tequila 🎉🥂</h1>
        }
        {(completedTodos!=totalTodos) && 
                <h1>You have completed <span>{completedTodos}</span> of <span>{totalTodos}</span> To do's</h1>
        }
      </div>
    </>
  )
}

export {TodoCounter};

//       {(!loading && searchedTodos.length == 0) && <TodosEmpty/>}