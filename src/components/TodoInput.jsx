import { useState } from "react"

export default function TodoInput({ onAdd }) {
  const [input, setInput] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    onAdd(input)
    setInput("")
  }

  return (
    <form className="new-item-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label htmlFor="new-task">New Task</label>
        <input
          id="new-task"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <button className="btn">Add Task</button>
    </form>
  )
}
