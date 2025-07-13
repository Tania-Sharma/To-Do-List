export default function TodoItem({ task, onToggle, onDelete }) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={task.done}
          onChange={() => onToggle(task.id)}
        />
        {task.text}
      </label>
      <button
        className="btn btn-danger"
        onClick={() => onDelete(task.id)}
      >
        Delete
      </button>
    </li>
  )
}
