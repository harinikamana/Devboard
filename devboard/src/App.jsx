import { useMemo, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Board from './components/Board'
import AddTask from './components/AddTask'

const initialTasks = [
  {
    id: 1,
    title: 'Design onboarding flow',
    description: 'Map the first-run experience for new users and refine the journey.',
    assignee: 'Ava',
    priority: 'High',
    status: 'todo'
  },
  {
    id: 2,
    title: 'Build analytics dashboard',
    description: 'Create the reporting widgets and empty states for weekly insights.',
    assignee: 'Noah',
    priority: 'Medium',
    status: 'progress'
  },
  {
    id: 3,
    title: 'Ship bug fixes',
    description: 'Close the latest production issues and validate the rollout.',
    assignee: 'Mia',
    priority: 'Low',
    status: 'done'
  }
]

const statusOrder = ['todo', 'progress', 'done']
const labels = {
  todo: 'To Do',
  progress: 'In Progress',
  done: 'Done'
}

function App() {
  const [tasks, setTasks] = useState(initialTasks)
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [draft, setDraft] = useState({
    title: '',
    description: '',
    assignee: '',
    priority: 'Medium'
  })

  const stats = useMemo(() => {
    const todo = tasks.filter((task) => task.status === 'todo').length
    const progress = tasks.filter((task) => task.status === 'progress').length
    const done = tasks.filter((task) => task.status === 'done').length

    return { total: tasks.length, todo, progress, done }
  }, [tasks])

  const addTask = (event) => {
    event.preventDefault()

    if (!draft.title.trim()) {
      return
    }

    const newTask = {
      id: Date.now(),
      title: draft.title.trim(),
      description: draft.description.trim(),
      assignee: draft.assignee.trim() || 'Unassigned',
      priority: draft.priority,
      status: 'todo'
    }

    setTasks((currentTasks) => [newTask, ...currentTasks])
    setDraft({ title: '', description: '', assignee: '', priority: 'Medium' })
    setIsFormOpen(false)
  }

  const moveTask = (taskId, direction) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) => {
        if (task.id !== taskId) {
          return task
        }

        const currentIndex = statusOrder.indexOf(task.status)
        const nextIndex = Math.max(0, Math.min(statusOrder.length - 1, currentIndex + direction))

        return {
          ...task,
          status: statusOrder[nextIndex]
        }
      })
    )
  }

  const moveTaskToStatus = (taskId, status) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) => (task.id === taskId ? { ...task, status } : task))
    )
  }

  const deleteTask = (taskId) => {
    setTasks((currentTasks) => currentTasks.filter((task) => task.id !== taskId))
  }

  return (
    <div className="app-shell">
      <Header tasks={tasks} stats={stats} />
      <AddTask
        isOpen={isFormOpen}
        draft={draft}
        setDraft={setDraft}
        onSubmit={addTask}
        onOpen={() => setIsFormOpen(true)}
        onClose={() => setIsFormOpen(false)}
      />
      <Board
        tasks={tasks}
        statusOrder={statusOrder}
        labels={labels}
        onMoveTask={moveTask}
        onMoveToStatus={moveTaskToStatus}
        onDeleteTask={deleteTask}
      />
    </div>
  )
}

export default App
