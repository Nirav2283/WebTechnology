import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Loader.css'
function StudentList() {
    const [studentList , setStudentList] = useState([])
    const [isLoading , setIsLoading] = useState(true)
    const apiurl = "https://6671937fe083e62ee43c341e.mockapi.io/Students"

    const fetchStudents = () =>{
        setIsLoading(true)
        fetch(apiurl).then(res=>res.json())
        .then((res)=>setStudentList(res))
        .finally(()=>{
            setIsLoading(false)
        })
    }

    useEffect(()=>{
        console.log("CAlled")
        fetchStudents()
    } , [])
    const handleDelete = (id) => {
        fetch(apiurl + '/' + id , {
            method : "DELETE"
        }).then(res=>res.json()).then(()=>{
            fetchStudents()
        })
    }
  return (
     <div>
      <h2>Student List</h2>
      {isLoading ? <div className='loader'></div> : <>
      <table>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
        </tr>
        <tbody>
            {studentList.map((stu , index)=>{
                return(
                    <tr>
                    <td>{index + 1}</td>
                    <td>{stu.name}</td>
                    <td>{stu.email}</td>
                    <td>
                        <Link to={`/view/${stu.id}`}><button>View</button></Link>
                        <Link to={`/edit/${stu.id}`}><button>Edit</button></Link>
                        <button onClick={()=>handleDelete(stu.id)}>Delete</button>
                    </td>
                </tr>
                )
                
            })}
        </tbody>
      </table>
      <Link to="/add"><button>Add Student</button></Link>
      </>}
    </div>
  )
}

export default StudentList
