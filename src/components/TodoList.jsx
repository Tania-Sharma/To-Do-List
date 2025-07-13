import TodoItem from "./TodoItem"

export default function TodoList({ tasks, onToggle, onDelete }) {
  return (
    <ul className="list">
      {tasks.length === 0 && <p>No tasks added yet.</p>}

      {tasks.map(task => (
        <TodoItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  )
}
