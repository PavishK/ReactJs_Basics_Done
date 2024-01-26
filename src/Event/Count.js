import React,{useState} from 'react'

export default function Count() {

    const [count,setCount]=useState(0);
  return (
    <div>
        <center><p>Count : {count}</p></center>
        <label>Count Me : </label>
        <button onClick={()=> setCount(count + 1 )}>
    Increment Me </button>
    <button onClick={()=> setCount(count - 1 )}>
    Decrement Me </button>
    <button onClick={()=> setCount(count *0 )}>
    Reset Me </button>
    </div>
  )
}
