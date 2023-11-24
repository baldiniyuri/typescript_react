import React from 'react';
import { useState } from "react"



const Home = () => {
    const [change, setChange] = useState<boolean>(false)

    const buttonAction = () => {
        setChange(!change)
    }

    return (
        <div className="oh-yes">
            <p>Click Me</p>
            <p>{change.toString()}</p> 
            <button className='h-b' onClick={buttonAction}>click</button>
        </div>
    );
}


export default Home