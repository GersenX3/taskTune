import React from 'react'
import { TodoContext } from '../../Context/TodoContext';
import "../css/Info.css"

 function Info() {
    const {
        setOpenModal,
        buttonInfo,
        setButtonInfo
      } = React.useContext(TodoContext);
  return (
    <>
        <div className='info-container'>
            <h1>About Task tune</h1>
            {/* breve intro */}
            <p>Welcome to Task tune, a task manager that will recommend a song for the task you are performing.<br/><br/></p>
            {/* el item */}
            <p>Underneath the text of your task you will see the song we recommend you to perform, the artist, the photo of their album and a direct link to that song on Spotify.<br/><br/></p>
            {/* barra de busqueda */}
            <p>When you have a sea of tasks you can search for the one you need with a keyword, so you can mark it as completed or do whatever you need to do with it.<br/><br/></p>
            {/* Crea tu primer tarea */}
            <p>That's pretty much it, now you just need to create your first task, close this window and get started!!!</p>
            <button
            onClick={() => {
              setOpenModal(false);
              setButtonInfo(false);
            }}
            >Close</button>

        </div>
        <div className='blackdiv'
        onClick={() => {
          setOpenModal(false);
          setButtonInfo(false);
        }}
        ></div>
    </>
  )
}

export {Info}
