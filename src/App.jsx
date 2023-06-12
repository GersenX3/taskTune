import React from 'react'
import { useState } from 'react'
import { useLocalStorage } from './hooks/useLocalStorage';
import { AppUI } from './AppUI';
import './App.css'


function App() {
  const [todos, saveTodos] = useLocalStorage("TODOS_V1", []);
  const completedTodos=(todos.filter(todo => !!todo.finished)).length;
  const totalTodos=(todos).length;

  const [searchValue, setSearchValue] = React.useState('');
  const [count, setCount] = useState(0)

  const searchedTodos = todos.filter(
    (todo) =>{
      return todo.text.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase());
    }
  );

  const completeTodo = (text) =>{
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text
    );
    if(newTodos[todoIndex].finished==true){
      newTodos[todoIndex].finished = false;
    }
    else{
      newTodos[todoIndex].finished = true;
    }
    saveTodos(newTodos);
  }

  const deleteTodo = (text) =>{
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text
    );
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  }


  console.log("Log 1");

  React.useEffect(
    () => {
      console.log("Looooog 2");
    },
    [totalTodos]
  );

  console.log("Log 3");


  return (
    <>
    <AppUI
          completedTodos={completedTodos}
          totalTodos={totalTodos}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          searchedTodos={searchedTodos}
          completeTodo={completeTodo}
          deleteTodo={deleteTodo}
    />
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
