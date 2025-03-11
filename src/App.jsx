import { useState, useEffect } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"
function App() {
  
  const [todos, setTodos] = useState([])
  const [todoValue,setTodoValue] = useState('')

  function persistData(newList) {
    localStorage.setItem('todos', JSON.stringify({ todos:
      newList 
    }))
  }

  function handleAddTodos(newTodo){
    const newTodoList = [...todos, newTodo]
    persistData(newTodoList)
    setTodos(newTodoList)
  }

  function handleDelete(index){
    const newTodoList = todos.filter((todo, tindex) =>{
      return tindex !== index
    })
    persistData(newTodoList)
    setTodos(newTodoList)
  }

  function handleEdit(index){
    const valToEdit = todos[index]
    setTodoValue(valToEdit)
    handleDelete(index)
  }

  useEffect(()=>{
    if(!localStorage) return;

    let localTodos = localStorage.getItem('todos')
    if(!localTodos) return;

    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)
  },[])
  

  return (
    <>
      <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodos = {handleAddTodos}/>
      <TodoList handleEdit={handleEdit} handleDelete= {handleDelete} todos={todos}/>
    </>
  )
}

export default App
