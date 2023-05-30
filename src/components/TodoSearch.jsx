import React from 'react'
import "./TodoSearch.css"

function TodoSearch() {
  return (
    <div className='buscador'>
      <input type="text"  placeholder="Search"
      onChange={(event)=>{
        console.log(event.target.value);
      }}
      />
    </div>
  )
}

export {TodoSearch}
