import React, { useState } from 'react';

const  Greeting = () =>{
    const [message,setMessage] = useState("Hello React");

    const changeMessage = () => {
        setMessage("Hello, World")
    };

    return (
        <div>
            <h1> {message} </h1>

            <button onClick={changeMessage}>change message</button>
        </div>
    )
}

export default Greeting;