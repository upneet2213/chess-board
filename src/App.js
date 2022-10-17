import { useState } from "react";
import "./App.css";

function App() {
  const [isSelecting, setIsSelecting] = useState(true);
  const [selected, setSelected] = useState(null);
  const [positions, setPositions] = useState({ 0: [0, 0] });
  const rowArray = [];
  for (let i = 0; i < 8; i++) {
    rowArray[i] = [];
    for (let j = 0; j < 8; j++) {
      if (j === 0) {
      }
      rowArray[i].push(j);
    }
  }
  const handleClick = (row, cell) => {
    if (isSelecting) {
      for (const position in positions) {
        if (
          JSON.stringify(positions[position]) === JSON.stringify([row, cell])
        ) {
          setSelected(position);
          setIsSelecting(false);
          return;
        }
      }
    }
    const newPositions = positions;
    newPositions[selected] = [row, cell];
    setPositions(newPositions);
    setIsSelecting(true);
  };
  return (
    <div className="App">
      {rowArray.map((row, index) => {
        return (
          <div className="row">
            {row.map((cell) => {
              return (
                <div
                  className={`cell ${
                    JSON.stringify(positions[selected]) ===
                    JSON.stringify([index, cell])
                      ? "selected"
                      : ""
                  }`}
                  onClick={() => handleClick(index, cell)}
                ></div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default App;
