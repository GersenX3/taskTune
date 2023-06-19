import React from 'react'
import { Engines } from '../svg/Engines'
import '../css/TodosEmpty.css'

function TodosEmpty() {
  return (
    <div className='container'>
      <p>Create your first Task!!</p>
      <div className='engines'>
      <Engines/>
      </div>
    </div>
  )
}
export {TodosEmpty}