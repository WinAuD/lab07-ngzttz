import React, { useState } from "react";
import "./TextInput.css";
import store from './store'
import { useSelector, useDispatch } from 'react-redux';


export default function TextInput() {
  const [text, setText] = useState("?");
  const dispatch = useDispatch(); 

  const handleChange = event => {
    setText(event.target.value);
    dispatch( {type: 'fontSize/setTo', payload: event.target.value} );
  };

  return (
    <div>
      <input className="NiceInput" type="text" onChange={handleChange} value={text} />
    </div>
  );
}

/* import React, { useState } from "react";
import "./TextInput.css";
import { useSelector, useDispatch } from 'react-redux';

export default function TextInput() {
  const [text, setText] = useState("?");
  const textInput = useSelector( (state) => state.text );
  const dispatch = useDispatch(); 

  

 
} */
