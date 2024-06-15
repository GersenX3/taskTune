import React from 'react'
import "../css/TodoSearch.css"
import { TodoContext } from '../../Context/TodoContext';

function TodoSearch() {
  const {
    searchValue,
    setSearchValue
  } = React.useContext(TodoContext);

  return (
    <div className='buscador'>
      <input type="text"
      placeholder="Search"
      value={searchValue}
      onChange={(event)=>{
        setSearchValue(event.target.value);
      }}
      />
    </div>
  )
}

export {TodoSearch}
