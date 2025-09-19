import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function StudentForm() {
    const [student , setStudent] = useState({name : '' , email: ''})
    const navigate = useNavigate()
    const api = "https://6671937fe083e62ee43c341e.mockapi.io/Students"
    const { id } = useParams()

    useEffect(()=>{
        if(id){
            fetch(api + '/' + id).then(res=>res.json()).then((res)=>setStudent(res))
        }
    } ,[id])

    const handleSubmit = () => {
        if(id){
            fetch(api + '/' + id , {
                method : "PUT",
                headers : {"Content-Type" : "application/json"},
                body : JSON.stringify(student)
            }).then(()=>{
                navigate('/')
            })
        }else{
            fetch(api , {
                method : "POST",
                headers : {"Content-Type" : "application/json"},
                body : JSON.stringify(student)
            }).then(()=>{
                navigate('/')
            })
        }
    }

  return (
    <div>
      <h2>{id ? "Edit Student" : "Add Student"}</h2>
        <input
          placeholder="Name"
          value={student.name}
          onChange={(e) => setStudent({ ...student, name: e.target.value })}
        />
        <input
          placeholder="Email"
          value={student.email}
          onChange={(e) => setStudent({ ...student, email: e.target.value })}
        />
        <button type="submit" onClick={handleSubmit}>{id ? "Update" : "Save"}</button>
     
    </div>
  )
}

export default StudentForm
