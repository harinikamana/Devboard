import './Header.css'

function Header({ stats }) {
  return (
    <header className="header">
      <div>
        <p className="header__eyebrow">Agile workspace</p>
        <h1>Jira-style task board</h1>
        <p className="header__subtitle">Keep delivery moving with clear priorities and fast status changes.</p>
      </div>

      <div className="header__stats">
        <div className="stat-card">
          <strong>{stats.total}</strong>
          <span>Total issues</span>
        </div>
        <div className="stat-card">
          <strong>{stats.todo}</strong>
          <span>To do</span>
        </div>
        <div className="stat-card">
          <strong>{stats.progress}</strong>
          <span>In progress</span>
        </div>
        <div className="stat-card">
          <strong>{stats.done}</strong>
          <span>Done</span>
        </div>
      </div>
    </header>
  )
}

export default Header