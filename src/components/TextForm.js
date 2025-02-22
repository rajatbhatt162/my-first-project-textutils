import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Upper Case was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to uppercase", "success")
  };
  const handlelowClick = () => {
    console.log("lower Case was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted to lowercase", "success")
  };
  const handleOnChange = (event) => {
    console.log("on change");
    setText(event.target.value);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text copied to clipboard", "success");
  };

  const handleDelete = () => {
    setText("");
    props.showAlert("Text cleared", "success");
  };

  const handleSpeak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.showAlert("Text is being read aloud", "success");
  };

  // const handlecopy = () => {
  //   var text = document.getElementById("myBox");
  //   text.select("");
  //   navigator.clipboard.writeText(text.value);
  // }

  function handleExtraSpaces() {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  }

  const [text, setText] = useState("");

  return (
    <>
      <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.Heading}</h1>
        <div className="mb-3">
          <label for="MyBox" class="form-label">
            Write in the Below Box:
          </label>
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style= {{backgroundColor: props.mode==='dark'?'grey':'white' , color:props.mode==='dark'?'white':'black' }}
            id="MyBox"
            rows="10"
          ></textarea>
        </div>
        <button className="btn btn-info mx-2 my-2" onClick={handleUpClick}>
          Convert to UPPER CASE
        </button>
        <button className="btn btn-info mx-2 my-2" onClick={handlelowClick}>
          CONVERT TO lower case
        </button>

        <button className="btn btn-info mx-1 my-1" onClick={handleCopy}>
          Copy Text
        </button>

        <button className="btn btn-info mx-1 my-1" onClick={handleDelete}>
          Clear Text
        </button>

        <button className="btn btn-info mx-1 my-1" onClick={handleSpeak}>Speak Text</button>


        {/* <button className="btn btn-info mx-2 my-2" onClick={handlecopy}>
          copy text
        </button> */}
        <button className="btn btn-info my-2" onClick={handleExtraSpaces}>
          Remove Extra Space
        </button>


      </div>
      <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>
          Your Text Summary is Here
        </h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"enter text to preview it"}</p>
      </div>
    </>
  );
}
