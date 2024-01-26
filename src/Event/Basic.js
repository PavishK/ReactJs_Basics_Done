import React, { useState } from 'react'
//import Change from './Change'

export default function Basic() {
    const [inputValue,setInputValue]=useState(" ");
    const [displayMessage,setDisplaymessage]=useState('');

    const handleChange =(event)=>
    {
        setInputValue(event.target.value);
    }

    const handleSumit=(event)=>
    {
        event.preventDefault();
        setDisplaymessage(`${inputValue}`);
    };

  return (

    <div>
        <center><p>{displayMessage}</p></center>
        <form onSubmit={handleSumit}>

            <label>
                Type:
            </label>
            <input type='text'  value={inputValue} onChange={handleChange}/>
            <button >&nbsp;&nbsp;Click</button>
        </form>

    </div>
  );
}
