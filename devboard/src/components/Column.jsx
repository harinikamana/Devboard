import './Column.css'
import TaskCard from './TaskCard'

function Column({ title, status, tasks, statusOrder, onMoveTask, onMoveToStatus, onDeleteTask }) {
  const handleDrop = (event) => {
    event.preventDefault()
    const taskId = Number(event.dataTransfer.getData('text/plain'))

    if (!Number.isNaN(taskId)) {
      onMoveToStatus(taskId, status)
    }
  }

  return (
    <section className={`column column--${status}`} onDragOver={(event) => event.preventDefault()} onDrop={handleDrop}>
      <div className="column__header">
        <div>
          <h2>{title}</h2>
          <p>{tasks.length} {tasks.length === 1 ? 'item' : 'items'}</p>
        </div>
        <span className={`column__badge column__badge--${status}`}>{tasks.length}</span>
      </div>

      <div className="column__content">
        {tasks.length === 0 ? (
          <div className="empty-card">No tasks in this lane yet.</div>
        ) : (
          tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              currentStatus={status}
              statusOrder={statusOrder}
              onMoveTask={onMoveTask}
              onDeleteTask={onDeleteTask}
            />
          ))
        )}
      </div>
    </section>
  )
}

export default Column