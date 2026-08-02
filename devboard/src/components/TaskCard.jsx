import './TaskCard.css'

function TaskCard({ task, currentStatus, statusOrder, onMoveTask, onDeleteTask }) {
  const currentIndex = statusOrder.indexOf(currentStatus)
  const canMoveBack = currentIndex > 0
  const canMoveForward = currentIndex < statusOrder.length - 1

  const handleDragStart = (event) => {
    event.dataTransfer.setData('text/plain', String(task.id))
  }

  return (
    <article className="task-card" draggable onDragStart={handleDragStart}>
      <div className="task-card__top">
        <span className={`priority-pill priority-pill--${task.priority.toLowerCase()}`}>{task.priority}</span>
        <button type="button" className="task-card__delete" onClick={() => onDeleteTask(task.id)} aria-label={`Delete ${task.title}`}>
          ×
        </button>
      </div>

      <h3>{task.title}</h3>
      <p>{task.description}</p>

      <div className="task-card__meta">
        <span>{task.assignee}</span>
        <span className="task-card__id">#{task.id}</span>
      </div>

      <div className="task-card__actions">
        <button type="button" onClick={() => onMoveTask(task.id, -1)} disabled={!canMoveBack}>
          ← Back
        </button>
        <button type="button" onClick={() => onMoveTask(task.id, 1)} disabled={!canMoveForward}>
          Next →
        </button>
      </div>
    </article>
  )
}

export default TaskCard