import React, { useState } from "react";
import "./TextInput.css";

export default function TextInput() {
  const [text, setText] = useState("?");

  const handleChange = event => {
    setText(event.target.value);
  };

  return (
    <div>
      <input className="NiceInput" type="text" onChange={handleChange} value={text} />
    </div>
  );
}
