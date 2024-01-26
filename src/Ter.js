import React, { useState } from 'react'

const Greeting = ({ isUserLoggedIn}) =>(
    <div>
        {isUserLoggedIn ? (
            <h1>Welcome</h1>
        ):(
            <h1>login again</h1>
        )
        }
    </div>
)

const Ter = () => {
    const[userLoggedIn, setUserLoggedIn] = useState(false);
  return (
    <div>
        <Greeting isUserLoggedIn = {userLoggedIn}/>
        <button onClick={() => 
        setUserLoggedIn(!userLoggedIn)}>
        login</button>

    </div>
  );
};

export default Ter