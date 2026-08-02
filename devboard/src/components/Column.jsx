import "./Column.css";

function Column({ title }) {
  return (
    <div className="column">
      <h2>{title}</h2>

      <div className="empty-card">
        No tasks yet
      </div>
    </div>
  );
}

export default Column;