import { useState} from 'react';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux'


function AddNewEmployee() {

  const dispatch = useDispatch()

  const departments = useSelector((state)=>state.departments)  
  

  const [obj,setObj] = useState({
    id: "",
    firstName: "",
    lastName: "",
    startDate: "",
    department: "",
    branch:"",
    salary:0

  })

  const addEmployee = () => {
    console.log();
    
    const ekeys = Object.keys(obj)
    ekeys.forEach(k => {
      if(obj[k] == ""){
        alert(`The property ${k} must have a value`);
      throw ''
      }
    });

    dispatch({ type: 'ADD', payload: obj });
    document.getElementById('addEmployee').reset();
}
  

    return (
      <>
      <h2>Add A New Employee:</h2>
      <h4>Fill the following:</h4>
      <div style={{border:'2px solid #B6C7AA' , width:'90%' , height:'fit-content', margin: 20, padding:5, textAlign:'left'}}>
        
        <h4>
        <form id="addEmployee">
        <label>EmployeeID:</label>  <input onChange={(e)=> setObj({...obj,id:+e.target.value})}></input><br/><br/>
        <label>First Name:</label>  <input onChange={(e)=> setObj({...obj,firstName:e.target.value})}></input><br/><br/>
        <label>fast Name:</label>   <input onChange={(e)=> setObj({...obj,lastName:e.target.value})}></input><br/><br/>
        <label>Start Date:</label>  <input onChange={(e)=> setObj({...obj,startDate:e.target.value})}></input><br/><br/>
        <label>Departments:</label> <select onChange={(e)=>setObj({...obj,department:e.target.value})}>
                                    <option value="">Select Department</option>
                                    {departments.map((department) => {
                                    return (
                                      <option key={department.name}>
                                      {department.name}
                                      </option>
                                    )})}
                                    </select><br/><br/>
        <label>Branch:</label>    <input onChange={(e)=> setObj({...obj,branch:e.target.value})}></input><br/><br/>
        <label>Salary:</label>    <input onChange={(e)=> setObj({...obj,salary:e.target.value})}></input><br/><br/>

        </form>
        </h4>
        
        <button className='whiteButton' onClick={addEmployee}>ADD</button>
      </div>
      </>
    )
  }
  
  export default AddNewEmployee