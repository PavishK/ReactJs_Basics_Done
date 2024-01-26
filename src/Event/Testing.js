import React,{useState} from 'react'

export default function Testing() {
    const [userinput,storeinput]=useState("");
    const [display,setdisplay]=useState("");
  return (

   
    <div>
         <p>{userinput}</p>
        <input type='text' value={userinput} onChange={(event)=>
        {
            storeinput(event.target.value)
        }} />
        <button onClick={(event)=>
        {
          setdisplay(userinput);
        }}></button>

        <p>{display}</p>
    </div>
  )
}
