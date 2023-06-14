import React from 'react'
import {TodoCounter} from "./components/jsx/TodoCounter";
import {TodoSearch} from "./components/jsx/TodoSearch";
import {TodoList} from "./components/jsx/TodoList";
import {CreateTodoButton} from "./components/jsx/CreateTodoButton";
import { TodoItem } from './components/jsx/TodoItem';

function AppUI({
    loading,
    error,
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo}
) {
  return (
    <div className='app'>
    <TodoCounter completed={completedTodos} total={totalTodos}/>
    <TodoSearch
    searchValue={searchValue}
    setSearchValue={setSearchValue}
    />
    
    <TodoList>
      {loading && <p>Loading</p>}
      {error && <p>Error</p>}
      {(!loading && searchedTodos.length == 0) && <p>Create your first task!! 📈</p>}

      {searchedTodos.map(todo =>(
        <TodoItem
        key={todo.text} 
        texto={todo.text} 
        completed={todo.finished}
        onComplete={() => completeTodo(todo.text)}
        onDelete={() => deleteTodo(todo.text)}
        />
      ))}

    </TodoList>

    <CreateTodoButton/>
  </div>
  )
}
export {AppUI};