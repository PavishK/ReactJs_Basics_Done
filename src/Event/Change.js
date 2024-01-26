import React from 'react'

export default function Change() {
    const ChangeMe=()=>
    {
        let arr=['black','green','blue','gray','pink','yellow','red','aqua'];
        
        document.body.style.background=arr[(Math.floor(Math.random() * arr.length))];
    };
  return (
    <div><center>
        <lable>Select Random Color By Click here : </lable>
        <button onClick={ChangeMe}>Generate Color</button>
        </center>
    </div>
  )
}
