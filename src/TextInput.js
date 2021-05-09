import React, { useState } from "react";
import "./TextInput.css";
import { useSelector, useDispatch } from 'react-redux';

export default function TextInput() {
  // const [text, setText] = useState("?");
  const textInput = useSelector( (state) => state.text );
  const dispatch = useDispatch(); 

  const handleChange = event => {
    setText(event.target.value);
  };

  return (
    <div>
      <input className="NiceInput" type="text" onChange={() => dispatch( {type: 'fontSize/setTo'} )} value={textInput} />
    </div>
  );
}
