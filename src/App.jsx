import { useState } from 'react'
import {TodoCounter} from "./components/TodoCounter";
import {TodoSearch} from "./components/TodoSearch";
import {TodoList} from "./components/TodoList";
import {CreateTodoButton} from "./components/CreateTodoButton";
import { TodoItem } from './components/TodoItem';
import './App.css'



function App() {
  const [count, setCount] = useState(0)
  const defaultTodos=[
    {text: "Cortar cebolla", finished: true},
    {text: "Bailar mambo", finished: true},
    {text: "Gobernar el mundo", finished: false},
    {text: "Robar un banco", finished: false}
  ];

  return (
    <>
    <div className='app'>
      <TodoCounter completed={16} total={20}/>
      <TodoSearch/>
      
      <TodoList>
        {defaultTodos.map(todo =>(
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

