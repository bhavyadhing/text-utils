import React, { useState } from 'react'

export default function TextForm(props) {

  const [text, setText] = useState('');
  const handleUpClick = ()=>{
    setText(text.toUpperCase());
  }  
  const handleLoClick = ()=>{
    setText(text.toLowerCase());
  }
  const handleOnChange = (event)=>{
    setText(event.target.value);
  }
  return (
    <>
    <div>
        <div className="mb-3">
        <h1>{props.heading}</h1>
        <textarea className="form-control" id="mybox" rows="8" value={text} onChange={handleOnChange} ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick} >Convert to UpperCase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick} >Convert to LowerCase</button>
    </div>
    <div className="container my-3">
      <h3>Your Text Summary</h3>
      <p>{text.split(" ").length} words and {text.length} characters.</p>
    </div>
    </>
  )
}
