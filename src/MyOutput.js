import React, { useState } from "react";
import "./MyOutput.css";
import { useSelector, useDispatch } from 'react-redux';

export default function MyOutput() {
  const sizeOutput = useSelector( (state) => state.size );
  const textOutput = useSelector( (state) => state.text );

  return (
    <div className="show" style={{ fontSize: sizeOutput }}>
      {textOutput}
    </div>
  );
}
