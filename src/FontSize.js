import React, { useState } from "react";
import "./FontSize.css";

export default function FontSize() {
  const [num, setNum] = useState(16);
  return (
    <div>
      FontSize
      <div className="niceButtons">
        <span>{num}</span>
        <button className="button" onClick={() => setNum(num + 1)}>
          +
        </button>
        <button className="button" onClick={() => setNum(num - 1)}>
          -
        </button>
      </div>
    </div>
  );
}
