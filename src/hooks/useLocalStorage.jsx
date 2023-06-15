import React from "react";

function useLocalStorage(itemName, initialValue){

    const [item, setItem] = React.useState(initialValue);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);


    let parsedItems;
  
    React.useEffect(() =>{
      try{
        const localStorageItem = localStorage.getItem(itemName);
        if(!localStorageItem){
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItems=initialValue;
        }
        else{
          parsedItems = JSON.parse(localStorageItem);
          setItem(parsedItems);
        }
  
        setLoading(true);
      }
      catch(error){
        setError(error);
        setLoading(false);
      }
    }
    , []);
  
    const saveItem = (newItem) =>{
      localStorage.setItem(itemName,JSON.stringify(newItem));
      setItem(newItem);
    }
    return {item, saveItem, loading, error};
  }
  
export {useLocalStorage}