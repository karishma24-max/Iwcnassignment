import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {AiFillDelete} from "react-icons/ai"

const Task = () => {
    const date=new Date().toDateString()
    const [task,setTask]=useState("")
    const [mapdata,setMapdata]=useState([])
    const [taskdata,setTaskdata]=useState({"title":"","date":date})
    function handlechange(e)
    {
const {value,name}=e.target
const title=value

//const arr={title:value,date:dateji}
setTaskdata({...taskdata,title,date})

    }
    function handlesubmit(e){
        console.log("taskdata")
        e.preventDefault()
axios.post("http://localhost:8080/user",taskdata).then(res=>alert("Congratulations,Your task has been updated")).catch(e=>alert("Please enter your task first"))
  
}
function handledelete(id)
{
console.log(id)
    axios.delete(`http://localhost:8080/delete/${id}`).then(res=>alert("task sucessfully deleted")).catch(e=>alert("task can not deleted"))
}
    useEffect(()=>{
        axios.get("http://localhost:8080/user").then(res=>setMapdata(res.data)).catch(e=>console.log(e))
    },[mapdata])
  return (
    <div>
    <div className='heading'><text>Notes</text></div>
        <form onSubmit={handlesubmit}><input type="text" name="task" placeholder="Take a note" onChange={handlechange}/></form>
   <div className='mapping'>{mapdata.map((ele,i)=><div className='mapping-data' >{ele.title}
   <div className='deltecateg'>{ele.date}<AiFillDelete onClick={()=>handledelete(ele._id)}/></div></div>)}</div>
    </div>
  )
}

export default Task