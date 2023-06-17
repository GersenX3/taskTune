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


function AppUI() {

  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);

  return (
    <div className='app'>
    <TodoCounter/>
    <TodoSearch/>

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
    
    {openModal && (
      <Modal>
        <FormularioTodo/>
      </Modal>
    )}

  </div>
  )
}
export {AppUI};