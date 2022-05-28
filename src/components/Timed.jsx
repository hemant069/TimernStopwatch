import React, {  useState } from 'react'

const Timed = () => {
    const [Timer, setTimer] = useState(0);
    const [input, setInput] = useState()
    const [endpoint, setEndpoint] = useState()
    if(Timer==endpoint){
      clearInterval(Timer)
    }
    const handleClick=()=>{
     
      if(!Timer){
        let id=setInterval(()=>{
            setInput((prev)=>prev+1)
        },1000)
        setTimer(id)
    }

        
      
    }

    const target=(e)=>{
    setInput(e.target.value)
   
    }
    const endpointtarget=(e)=>{
      setEndpoint(e.target.value)
      
    }

    
  return (
      <>
       <div>Timer {Timer}</div>
       <input type="number" placeholder='Enter Initial value'value={input} onChange={target} />
        <button onClick={handleClick}>+</button>
        <input type="number" value={endpoint} onChange={endpointtarget} />
        
      
      </>
   
    
  )
}

export default Timed