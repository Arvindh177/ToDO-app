import { Container } from 'postcss'
import React, { useState } from 'react'
import './App.css'
import TodoInput from './components/TodoInput'
import Todolist from './components/TodoList'
function App() {
  const [listTodo,setListTodo] = useState([]);
  let addList = (inputText)=>{
    setListTodo([...listTodo,inputText]);
  }
  return (
    <div className='main-container'>
      <div className='center-container'>
           < TodoInput addList={addList}/>
           <h1 className='app-heading'>TODO</h1>
           <hr/>
           {listTodo.map((listItem,i)=>{
            return(
              <Todolist item={listItem}/>
            )
           })}
      </div>
    </div>
  )
}

export default App
