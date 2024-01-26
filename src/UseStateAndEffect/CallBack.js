import React,{useCallback,useState} from 'react'

const CallBack=()=>
{
    const [count,setCount]=useState(0);

const HandleClick=useCallback(()=>
{
    console.warn(`Button Clicked ! Count : ${count}`);
},[count]);
  return (
    <div>
        <button onClick={HandleClick}>Click</button>
        <br/>
        <p>Count : {count}</p>
        <br/>
        <button onClick={()=>
        {
            setCount(count+1);
        }}>Increment</button>
    </div>
  );
}
export default CallBack;