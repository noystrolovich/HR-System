import { useParams } from 'react-router-dom';
import {useSelector} from 'react-redux'
import { useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';


function EditEmployee() {

    const navigate = useNavigate()


    const {id} = useParams();
    const dispatch = useDispatch()
    
    const employees = useSelector((state)=>state.employees)
    const departments = useSelector((state)=>state.departments)  
    const employeeData = employees.find((employee)=>employee.id == id)
    
    const [obj,setObj] = useState({
      id: "",
      firstName: "",
      lastName: "",
      startDate: "",
      department: ""
    })

    useEffect(()=>{
      setObj(employeeData)
    },[])

    const updateEmployee = (e) => {
      e.preventDefault();
      dispatch({ type: 'UPDATE', payload: obj });
      
    }

      return (
        <>
        <div style={{border:'2px solid #B6C7AA',marginTop:'6%',backgroundColor:'#B6C7AA',padding:'30px'}}>
        <h2>Edit Employee</h2><br/>
        <form style={{width:'',padding:'10px',justifyContent:'center',alignItems:'center'}} id="EditEmployee">
        <label>First Name:</label>  <input value={obj.firstName} onChange={(e)=> setObj({...obj,firstName:e.target.value})}></input><br/><br/>
        <label>fast Name:</label>   <input value={obj.lastName} onChange={(e)=> setObj({...obj,lastName:e.target.value})}></input><br/><br/>
        <label>Start Date:</label>  <input value={obj.startDate} nChange={(e)=> setObj({...obj,startDate:e.target.value})}></input><br/><br/>
        <label>Departments:</label> <select value={obj.department} onChange={(e)=>setObj({...obj,department:e.target.value})}>
                                    <option value="">Select Department</option>
                                    {departments.map((department) => {
                                    return (
                                      <option key={department.name}>
                                      {department.name}
                                      </option>
                                    )})}
                                    </select><br/><br/>
        <label>Branch:</label>    <input value={employeeData.branch} onChange={(e)=> setObj({...obj,branch:e.target.value})}></input><br/><br/>
        <button className='whiteButton' onClick={updateEmployee}>UPDATE EMPLOYEE</button><br/>
        </form>
        </div>
        <br/>
        <button style={{marginTop:'30px'}} onClick={()=>navigate('/employees')}>Back To Employees Page</button>
                </>
      )
    }
    
    export default EditEmployee
    