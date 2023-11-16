import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./form.css"
import { useState } from "react";

export default function Form() {

    const [tableData, setTableData] = useState({
        fname : "",
        lname : "",
        email:"",
        address:"",
        gender:""
    })
    const [newData,setNewData]=useState([])

    const readValue = (event) =>{
        // const {name ,value} = event.target
        setTableData({...tableData,[event.target.name]:event.target.value})

    }

    function display(e){
       e.preventDefault();
       setNewData([...newData ,{tableData}])
       

    setTableData({
        fname : "",
        lname : "",
        email:"",
        address:"",
        gender:""
    })


    // function deleteRow(num){

    // }

    console.log(tableData)
    }

  return (
    <div className="container border">
      <div className="content col-lg-6" style={{ textAlign: "center" }}>
      <form onSubmit={display}>
        <div>
          <h2 style={{ textAlign: "center" }}>Fill the form</h2>
        </div>
        <div className="mb-2">
            
          <label className="col-lg-3 mt-2"> First name</label>
          <input className="col-lg-3 mt-2" name="fname" value={tableData.fname} onChange ={readValue}/>
          <label className="col-lg-3 mt-2 "> Last name</label>
          <input className="col-lg-3 mt-2" name="lname" value={tableData.lname} onChange ={readValue}/>
          <label className="col-lg-3 mt-2 "> Email Id</label>
          <input className="col-lg-9 mt-2" name="email" type="email" value={tableData.email} onChange ={readValue}/>
          <label className="col-lg-3  mt-2">Address</label>
          <input className="col-lg-9 mt-2" name="address" type="text" value={tableData.address} onChange ={readValue} />
        </div>
        <div className="col-lg-12">
            <div className="row">
            <label className="col-lg-4"> Gender</label>
          <div className="col-lg-8">
            <input className="" style={{marginLeft:"5px"}} type="checkbox" name="gender" value="male" onChange ={readValue}/>
            <label className="mr-5" style={{marginLeft:"5px"}}>male</label>
            <input type="checkbox" style={{marginLeft:"5px"}} name="gender" value="female" onChange ={readValue}/>
            <label style={{marginLeft:"5px"}} > female</label>
          </div> 
            </div>
        </div>

        <div className="col-lg-12">
          <button className="btn bg-primary " type="submit" style={{color:"white",}} onClick={display}> Save details</button>
        </div>
        </form>

      </div>
{/* table  */}
<div className="tableFormat mt-5">


<table className="table ">
  <thead>
    <tr>
      <th scope="col">No</th>
      <th scope="col">First name</th>
      <th scope="col">Second name</th>
      <th scope="col">Email address</th>
      <th scope="col">address</th>
      <th scope="col">Gender</th>
      <th scope="col">Action</th>

    </tr>
  </thead>
  <tbody>
    
    { newData.map((value,index)=>{
        return(
           
        <tr key={index}>
        <td>{index+1}</td>  
        <td>{value.fname}</td>
        <td>{value.lname}</td>
        <td>{value.email}</td>
        <td>{value.address}</td>
        <td>{value.gender}</td>
        <td><button className="btn primary" style={{color:"white"}}  >Delete</button></td>
        </tr>
        
        
        )
    }
        
     
    )
     }


  </tbody>
</table>

</div>

    </div>
  );
}
