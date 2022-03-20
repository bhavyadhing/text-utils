import React, { useState } from 'react'

export default function TextForm(props) {

  const [text, setText] = useState('Enter Text Here');
  const handleUpClick = ()=>{
    console.log("clicked button")
  }
  const handleOnChange = (event)=>{
    setText(event.target.value);
  }
  return (
    <div>
        <div className="mb-3">
        <label htmlFor="mybox" className="form-label">{props.heading}</label>
        <textarea className="form-control" id="mybox" rows="8" value={text} onChange={handleOnChange} ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick} >Convert to UpperCase</button>
    </div>
  )
}
