import React from "react";
import { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider ({children}){
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error
      }= useLocalStorage("TODOS_V1", []);
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


    return(
        <TodoContext.Provider value={
            {
                loading,
                error,
                completedTodos,
                totalTodos,
                searchValue,
                setSearchValue,
                searchedTodos,
                completeTodo,
                deleteTodo
            }
        }>
            {children}
        </TodoContext.Provider>
    );
}


<TodoContext.Consumer></TodoContext.Consumer>

export {TodoContext, TodoProvider};