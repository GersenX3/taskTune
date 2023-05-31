import React, { useState } from 'react'
import "./TodoSearch.css"

function TodoSearch({searchValue,setSearchValue}) {

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
