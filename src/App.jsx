import { useState } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

export default function App() {
  const [tasks, setTasks] = useState([])

  function addTask(taskText) {
    if (taskText.trim() === "") return

    const newTask = {
      id: Date.now(),
      text: taskText,
      done: false
    }

    setTasks([...tasks, newTask])
  }

  function toggleTask(taskId) {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, done: !task.done } : task
    )
    setTasks(updatedTasks)
  }

  function deleteTask(taskId) {
    const remainingTasks = tasks.filter(task => task.id !== taskId)
    setTasks(remainingTasks)
  }

  return (
    <div>
      <h1 className="header">My To-Do List</h1>
      <TodoInput onAdd={addTask} />
      <TodoList
        tasks={tasks}
        onToggle={toggleTask}
        onDelete={deleteTask}
      />
    </div>
  )
}
