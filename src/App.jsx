import React, { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("white");

  return (
    <div className="container">
      <h1>Color Changer App</h1>

      <div
        className="color-box"
        style={{ backgroundColor: color }}
      >
        Selected Color: {color}
      </div>

      <button onClick={() => setColor("red")}>
        Red
      </button>

      <button onClick={() => setColor("green")}>
        Green
      </button>

      <button onClick={() => setColor("blue")}>
        Blue
      </button>
    </div>
  );
}

export default App;