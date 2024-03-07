import { useState } from 'react'
import './App.css'
import TodoForm from './components/Todos/TodoForm'
import TodoList from './components/Todos/TodoList'

function App() {
  const [todos, setTodos] = useState(['todo'])
  const addTodoHandler = (text) => {
    setTodos([...todos, text])
  }
  const deleteTodoHandler = (index) => {
    setTodos(todos.filter((_, indx) => indx !== index))
  }
  return (
    <div className="App">
      <h1>Todo app</h1>
      <TodoForm addTodo={addTodoHandler} />
      <TodoList todos={todos} deleteTodo={deleteTodoHandler} />
    </div>
  )
}

export default App
