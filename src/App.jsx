import React from 'react'
import { AppUI } from './AppUI';
import './App.css'
import { TodoProvider } from './Context/TodoContext';


function App() {

  return (
    <>
      <TodoProvider>
        <AppUI/>
      </TodoProvider>
    </>
  )
}



export default App
//Codigo para definir todos en la consola

//  const defaultTodos=[
//     {text: "Cortar cebolla", finished: true},
//     {text: "Bailar mambo", finished: true},
//     {text: "Gobernar el mundo", finished: false},
//     {text: "1", finished: false},
//     {text: "2", finished: false},
//     {text: "3", finished: false},
//     {text: "4", finished: false},
//     {text: "Robar un banco", finished: false}
//   ];

//  localStorage.setItem("TODOS_V1", JSON.stringify(defaultTodos));

// localStorage.removeItem("TODOS_V1")
