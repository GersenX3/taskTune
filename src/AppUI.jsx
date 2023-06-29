import React from 'react'
import {TodoCounter} from "./components/jsx/TodoCounter";
import {TodoSearch} from "./components/jsx/TodoSearch";
import {TodoList} from "./components/jsx/TodoList";
import {TodosLoading} from "./components/jsx/TodosLoading";
import {TodosError} from "./components/jsx/TodosError";
import { TodosEmpty } from './components/jsx/TodosEmpty';
import {CreateTodoButton} from "./components/jsx/CreateTodoButton";
import { TodoItem } from './components/jsx/TodoItem';
import { TodoContext } from './Context/TodoContext';
import { Modal } from "./components/jsx/Modal";
import {FormularioTodo} from "./components/jsx/FormularioTodo";
import { Info } from './components/jsx/Info';


function AppUI({ accessToken }) {

  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    buttonTask,
    buttonInfo
  } = React.useContext(TodoContext);

  return (
    <div className='app'>
    <TodoCounter/>
    <TodoSearch/>

    <TodoList accessToken={accessToken}>
      {loading && <TodosLoading/>}
      {error && <TodosError/>}
      {(!loading && searchedTodos.length == 0) && <TodosEmpty/>}
      {(!loading && !error) && searchedTodos.map(todo =>(
        <TodoItem
          accessToken = {accessToken}
          key={todo.text} 
          texto={todo.text} 
          completed={todo.finished}
          onComplete={() => completeTodo(todo.text)}
          onDelete={() => deleteTodo(todo.text)}
          />
        ))}
    </TodoList>  

    <CreateTodoButton/>
    
    {(openModal && buttonTask) && (
      <Modal>
        <FormularioTodo/>
      </Modal>
    )}

    {(openModal && buttonInfo) && (
      <Modal>
        <Info/>
      </Modal>
    )}


  </div>
  )
}
export {AppUI};