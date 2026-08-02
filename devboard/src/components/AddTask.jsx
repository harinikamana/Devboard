import './AddTask.css'

function AddTask({ isOpen, draft, setDraft, onSubmit, onOpen, onClose }) {
  return (
    <div className="add-task">
      {!isOpen ? (
        <button type="button" className="add-task__trigger" onClick={onOpen}>
          + Create issue
        </button>
      ) : (
        <form className="task-form" onSubmit={onSubmit}>
          <div className="task-form__header">
            <h2>Create issue</h2>
            <button type="button" className="task-form__icon" onClick={onClose}>
              ×
            </button>
          </div>

          <div className="task-form__grid">
            <label>
              Title
              <input
                type="text"
                value={draft.title}
                onChange={(event) => setDraft((current) => ({ ...current, title: event.target.value }))}
                placeholder="What needs to be done?"
                required
              />
            </label>

            <label>
              Assignee
              <input
                type="text"
                value={draft.assignee}
                onChange={(event) => setDraft((current) => ({ ...current, assignee: event.target.value }))}
                placeholder="Team member"
              />
            </label>

            <label>
              Priority
              <select
                value={draft.priority}
                onChange={(event) => setDraft((current) => ({ ...current, priority: event.target.value }))}
              >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </label>

            <label className="task-form__full">
              Description
              <textarea
                rows="3"
                value={draft.description}
                onChange={(event) => setDraft((current) => ({ ...current, description: event.target.value }))}
                placeholder="Add context or acceptance criteria"
              />
            </label>
          </div>

          <div className="task-form__actions">
            <button type="button" className="task-form__secondary" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="task-form__primary">
              Add to board
            </button>
          </div>
        </form>
      )}
    </div>
  )
}

export default AddTask
