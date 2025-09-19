import React, { useState } from 'react'

function Calc() {
    const [exp , setExp] = useState('')
    const handleClick = (data) =>{
        if(data == "AC"){
            setExp('')
        }else if(data == "="){
            setExp(eval(exp).toString())
        }else if(data == "->"){
            setExp(exp.slice(0,-1))
        }else{
            setExp(exp+data)
        }
    }
  return (
    <>
        <table>
            <tr>
                <td colSpan={4}><input type="text" name="" id="" class = "form-control" value={exp}/></td>
            </tr>
            <tr>
                <td><button className='btn btn-primary' onClick={()=>handleClick("1")}>1</button></td>
                <td><button className='btn btn-primary' onClick={()=>handleClick("2")}>2</button></td>
                <td><button className='btn btn-primary' onClick={()=>handleClick("3")}>3</button></td>
                <td><button className='btn btn-primary' onClick={()=>handleClick("4")}>4</button></td>
            </tr>
            <tr>
                <td><button className='btn btn-primary' onClick={()=>handleClick("+")}>+</button></td>
                <td><button className='btn btn-primary' onClick={()=>handleClick("->")}>{"->"}</button></td>
                <td><button className='btn btn-primary' onClick={()=>handleClick("=")}>=</button></td>
                <td><button className='btn btn-primary' onClick={()=>handleClick("AC")}>AC</button></td>
            </tr>
        </table>
    </>
  )
}

export default Calc
