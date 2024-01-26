import React from 'react'
import Change from '../Event/Change'
import Reducer from '../StateReducer/Reducer'
import CallBack from '../UseStateAndEffect/CallBack'
export default function Home() {
  return (
    <div>
            <br></br><br/><br/>
     
      <Change/>
      <br></br>
      <h1>Using Reducer</h1>
      <Reducer/>
      <br/>
      <br/>
      <h1>Using CallBack</h1><br/>
      <CallBack/>
    </div>
  )
}