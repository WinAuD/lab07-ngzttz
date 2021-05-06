import React, { useState } from "react";
import "./MyReset.css";

export default function MyInput() {
  const handleClick = () => {
    alert("Alles zurücksetzen!");
  };

  return (
    <div>
      <button className="button" onClick={handleClick}>
        R
      </button>
    </div>
  );
}
