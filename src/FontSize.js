import React, { useState } from "react";
import "./FontSize.css";
import { useSelector, useDispatch } from 'react-redux';

export default function FontSize() {

  // const [size, setSize] = useState(16);
  const fontSize = useSelector( (state) => state.size );
  const dispatch = useDispatch();  

  return (
    <div>
      FontSize
      <div className="niceButtons">
        <span>{fontSize}</span>
        <button className="button" onClick={() => dispatch( {type: 'fontSize/inc1'} ) }>
          +
        </button>
        <button className="button" onClick={() => dispatch( {type: 'fontSize/dec1'} ) }>
          -
        </button>
      </div>
    </div>
  );
}
