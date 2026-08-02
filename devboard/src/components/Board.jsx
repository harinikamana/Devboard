import "./Board.css";
import Column from "./Column";

function Board() {
  return (
    <div className="board">
      <Column title="Todo" className="todo"/>
      <Column title="In Progress" className="pogress"/>
      <Column title="Done" className="done"/>
    </div>
  );
}

export default Board;