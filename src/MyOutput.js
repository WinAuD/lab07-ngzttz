import React, { useState }from "react";
import './MyOutput.css';

export default function MyOutput() {
    const size = 24;  
    return (
      <div className='show' style={{fontSize:size}}>
          Hier soll der Text in der ausgewählten Größe stehen ... 
      </div>
    );
} 
