import React,{useState,useEffect} from 'react'

export default

function useStatement((){
  const [data,setData]=useState(null);

/*export default function Effect() {

  const [data,setData]=useState(null);*/

useEffect(()=>
  {
    fetch('https:/jsonplaceholder.typicode.com/todos/1')
    .then(response =>response.json())
    .then(result =>setData(result));
  }
  return()=>{

  },[]);

return (
    <div>
      {data?(
        <p>Data</p>
      ):(
        <p>Loading...</p>
      )
    }
    </div>
  )
  };
