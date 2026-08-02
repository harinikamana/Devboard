import './Board.css'
import Column from './Column'

function Board({ tasks, statusOrder, labels, onMoveTask, onMoveToStatus, onDeleteTask }) {
  return (
    <div className="board">
      {statusOrder.map((status) => (
        <Column
          key={status}
          title={labels[status]}
          status={status}
          tasks={tasks.filter((task) => task.status === status)}
          statusOrder={statusOrder}
          onMoveTask={onMoveTask}
          onMoveToStatus={onMoveToStatus}
          onDeleteTask={onDeleteTask}
        />
      ))}
    </div>
  )
}

export default Board