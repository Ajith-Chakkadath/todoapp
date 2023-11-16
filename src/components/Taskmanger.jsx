import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import './taskmanger.css'

export default function Taskmanger() {
  const date = new Date();
  const currentDate = date.getDate();

  const [task, setTask] = useState('')
  const [valueRead, setValueRead] = useState([])

  function readValue(){
      setValueRead([...valueRead , task])
      setTask("")
  }
 
function deleteAction(b){
    
    const result = valueRead.filter((valuess) => valuess != b  );
    console.log(result)
    setValueRead(result)
}


  return (
    <div className="container border  ">
      <div className="action col-lg-6">
        <div className="row  ">
          <div className="text col-lg-12  mb-3" style={{ textAlign: "center" }}>
            <h1>To-Do app</h1>
          </div>
          <label className="col-lg-3 " style={{ textAlign: "center" }}>
            Task
          </label>
          <input className="col-lg-4" type="text" name="nameRead" value={task}  onChange ={e=>setTask(e.target.value)} />
          <button className="btn btn-primary col-lg-2 " onClick={readValue}> Add </button>
          <div className="dateDisplay col-lg-2">
            <h3>{currentDate}</h3>
          </div>
        </div>
      </div>
    { valueRead.map((value)=>{
        return (
        <div className="action col-lg-6 mt-3">
        <div className="add border col-lg-3   " style={{textAlign: "center"}}>
        <h3>{value}</h3>
         </div>
         <button className="btn btn-primary col-lg-2 " onClick={e =>deleteAction(value)}>Delete</button>
        </div>   
     )  
    })
     }
    </div>
  );
}
