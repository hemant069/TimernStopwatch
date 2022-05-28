import React from 'react'
import { useState } from 'react'

const Stopwatch = () => {
    const [watch, setwatch] = useState(0)
    const [timer, settimer] = useState(null)
    const start=()=>{
    if(!timer){
        let id=setInterval(()=>{
            setwatch((prev)=>prev+1)
        },1000)
        settimer(id)
    }
  
    }
    const stop=()=>{
        clearInterval(timer)
    }
    const reset=()=>{
        setwatch(0)
        settimer(null)
    }
  return (
    <>
    <h2>Stop Watch</h2>
    <h1>{watch}</h1>
    <div>
        <button onClick={start}>Start</button>
        <button onClick={stop}>Stop</button>
        <button onClick={reset}>Reset</button>
    </div>
    </>
  )
}

export default Stopwatch