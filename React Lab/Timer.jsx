import React, { useEffect, useState } from 'react'

function Timer() {
    const [seconds , setSeconds] = useState(0)
    useEffect(()=>{
        console.log("component renderd");
        setTimeout(()=>{
            setSeconds(seconds + 1)
        } ,0.1)
    } , [seconds])
  return (
    <div>
      <h1>Timer : {seconds}</h1>
    </div>
  )
}

export default Timer
