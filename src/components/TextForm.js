import React, { useState } from 'react'

export default function TextForm(props) {

    // Convert to Uppercase
    const handelUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase!", "success");

    }

    // Convert to Lowercase
    const handelLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase!", "success");

    }

    // Remove Extra Spaces
    const handelExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Removed Extra Spaces!", "success");
    }

    // Copy Text
    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Copied to Clipboard!", "success");

    }

    // To Clear Text Area
    const handeClearClick = () => {
        let newText = "";
        setText(newText)
        props.showAlert("Cleared Text!", "success");

    }

    // Reverse 
    // const handleReverse = (event) => {
    //     /* Convert string to array*/
    //     let strArr = text.split("");
    //     /* Reverse array*/
    //     strArr = strArr.reverse();
    //     /* Convert array to string*/
    //     let newText = strArr.join("");
    //     setText(newText);
    //   };

    const [text, setText] = useState('');
    // text= "new text";     // Wrong way to change the text
    // setText("new text"); // Correct way to change the text

    const handelOnChange = (event) => {
        // console.log("On Change");
        setText(event.target.value);
    }


    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <div className="mb-3">
                    <h1>{props.heading}</h1>
                    <textarea className="form-control" onChange={handelOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }} value={text} id="myBox" rows="8"></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handelUpClick}>Convert to Uppercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handelLoClick}>Convert to Lowercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handelExtraSpaces}>Remove Extra Spaces</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handeClearClick}>Clear Text</button>
                {/* <button className="btn btn-primary mx-1" onClick={handleReverse}>Reverse Text</button> */}
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h2>Your text Summary</h2>
                {/* <p>{text.split(" ")[text.split(" ").length - 1] === "" ? text.split(" ").length - 1 : text.split(" ").length} words and {text.length} character</p> */}
                {/* <p>{text.split(" ").length} words and {text.length} characters</p> */}
                <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} Minutes to read</p>

                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
            </div>
        </>
    )
}
