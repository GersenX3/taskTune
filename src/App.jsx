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
    {text: "Cortar cebolla", completed: true},
    {text: "Bailar mambo", completed: false},
    {text: "Gobernar el mundo", completed: false},
    {text: "Robar un banco", completed: false}
  ];

  return (
    <>
      <TodoCounter completed={16} total={20}/>
      <TodoSearch/>
      
      <TodoList>
        {defaultTodos.map(todo =>(
          <TodoItem
          key={todo.text} 
          texto={todo.text} 
          completed={todo.completed}
          />
        ))}

      </TodoList>

      <CreateTodoButton/>
    </>
  )
}



export default App

