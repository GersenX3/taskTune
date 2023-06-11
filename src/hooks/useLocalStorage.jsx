import React from "react";

function useLocalStorage(itemName, initialValue){

    const localStorageItem = localStorage.getItem(itemName);
  
    let parsedItems;
  
    if(!localStorageItem){
      localStorage.setItem(itemName, JSON.stringify(initialValue));
      parsedItems=initialValue;
    }
    else{
      parsedItems = JSON.parse(localStorageItem);
    }
  
    const [item, setItem] = React.useState(parsedItems);
  
    const saveItem = (newItem) =>{
      localStorage.setItem(itemName,JSON.stringify(newItem));
      setItem(newItem);
    }
    return [item, saveItem];
  }
  
export {useLocalStorage}