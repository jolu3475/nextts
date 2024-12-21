'use client'

import { useState } from "react"

const Test = () => {
    const [name , setName] = useState('');
    return (
        <>
            <h1>Enter your name</h1>
            <input value={name} onChange={(e)=> setName(e.target.value)}/>
            <p>Hello, {name}</p>
        </>
    );
}

export default Test;