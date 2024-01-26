import React from 'react'
import '../css/Contact.css'
export default function OperationOnPage() {

    const Refresh=()=>
    {
        window.location.reload();
        
    };

    const DarkTheme=()=>
    {

        document.body.style.color='white';
        document.body.style.background='black';

    };
  return (
    <div>
        <br/><br/><center><label>Reload Current page : </label><button onClick={Refresh}>Refresh Me</button></center>
        <br/><br/><center><label>Make Default : </label><button onClick={DarkTheme}>Default Mode</button></center>
        <br/><br/><p className='.scroll'>Hello all Hello allHello allHello allHello allHello allHello allHello allHello allHello allHello allHello allHello allHello allHello allHello allHello allHello allHello allHello allHello allHello allHello allHello allHello allHello allHello allHello allHello allHello allHello allHello allHello allHello allHello allHello allHello allHello allHello allHello all</p>
    </div>
  )
}
