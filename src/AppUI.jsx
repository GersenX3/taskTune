import React from 'react'
import {TodoCounter} from "./components/jsx/TodoCounter";
import {TodoSearch} from "./components/jsx/TodoSearch";
import {TodoList} from "./components/jsx/TodoList";
import {TodosLoading} from "./components/jsx/TodosLoading";
import {TodosError} from "./components/jsx/TodosError";
import { TodosEmpty } from './components/jsx/TodosEmpty';
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
      {loading && <TodosLoading/>}
      {error && <TodosError/>}
      {(!loading && searchedTodos.length == 0) && <TodosEmpty/>}

      {(!loading && !error) && searchedTodos.map(todo =>(
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