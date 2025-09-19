import React , {useState , useEffect}from 'react'

function RenderSpecific() {
    const [count , setCount] = useState(0)
    const [count2 , setCount2] = useState(0)


    //component render when count2 variable change

    useEffect(()=>{
        console.log("Component renderd");
    } , [count2])
    
  return (
    <div>
      <h2>Counter 1 : {count}</h2>
      <h2>Counter 2 : {count2}</h2>
        <br />
    <button className='btn btn-primary m-2' onClick={()=>setCount(count+1)}>Increase counter 1</button>
    <button className='btn btn-primary m-2' onClick={()=>setCount2(count2+1)}>Increase counter 2</button>
    </div>
  )
}

export default RenderSpecific
