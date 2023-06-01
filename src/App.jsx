import React from 'react'
import { useState } from 'react'
import {TodoCounter} from "./components/TodoCounter";
import {TodoSearch} from "./components/TodoSearch";
import {TodoList} from "./components/TodoList";
import {CreateTodoButton} from "./components/CreateTodoButton";
import { TodoItem } from './components/TodoItem';
import './App.css'

const defaultTodos=[
  {text: "Cortar cebolla", finished: true},
  {text: "Bailar mambo", finished: true},
  {text: "Gobernar el mundo", finished: false},
  {text: "1", finished: false},
  {text: "2", finished: false},
  {text: "3", finished: false},
  {text: "4", finished: false},
  {text: "Robar un banco", finished: false}
];

function App() {
  const [todos,setTodos] = React.useState(
    defaultTodos
  );
  const completedTodos=(todos.filter(todo => !!todo.finished)).length;
  const totalTodos=(todos).length;

  const [searchValue, setSearchValue] = React.useState('');
  console.log("Buscando: "+searchValue);
  const [count, setCount] = useState(0)

  const searchedTodos = todos.filter(
    (todo) =>{
      return todo.text.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase());
    }
  );

  return (
    <>
    <div className='app'>
      <TodoCounter completed={completedTodos} total={totalTodos}/>
      <TodoSearch
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      />
      
      <TodoList>
        {searchedTodos.map(todo =>(
          <TodoItem
          key={todo.text} 
          texto={todo.text} 
          completed={todo.finished}
          />
        ))}

      </TodoList>

      <CreateTodoButton/>
    </div>
    </>
  )
}



export default App

