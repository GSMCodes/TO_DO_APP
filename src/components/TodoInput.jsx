import React, { useState } from 'react'

export default function TodoInput(props) {
  const {handleAddTodos, setTodoValue, todoValue,} = props;
  
  return (
    <header>
      
      <input 
    value={todoValue} 
    onChange={(e) => setTodoValue(e.target.value)} 
    placeholder='Enter task...'
    onKeyDown={(e) => {
      if (e.key === 'Enter') {
        handleAddTodos(todoValue);
        setTodoValue(''); // Clear the input field after adding the todo
      }
    }} 
  />
      <button onClick={() =>{
        handleAddTodos(todoValue)
        setTodoValue('')
      }}>Add</button>
    </header>
  )
}
