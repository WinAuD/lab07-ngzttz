import React, { useState } from "react";
import "./MyReset.css";
import { useDispatch } from 'react-redux';

export default function MyInput() {

  const dispatch = useDispatch();  

  const handleClick = () => {
    // alert("Alles zurücksetzen!");
    dispatch( {type: 'fontSize/reset'})
  };

  return (
    <div>
      {/* <button className="button" onClick={handleClick}>
        R
      </button> */}
      <button className="button" onClick={() => fetchWiki() }>
        Fetch Wiki
      </button>
    </div>
  );
}

