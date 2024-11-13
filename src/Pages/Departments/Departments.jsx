import {useSelector} from 'react-redux'
import { useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';


function Departments() {
  const departments = useSelector((state)=>state.departments)
  const employees = useSelector((state)=>state.employees)

  const navigate = useNavigate()

  const [departmentData,setDepartmentData] = useState({name:''})
  const [employeesDepartment,setEmployeesDepartment] = useState([])
  


  const showData = (e) => {
    const departmentData = departments.find((department)=>department.name == e.target.innerText)
    console.log(departmentData);
    setDepartmentData(departmentData)
    const data = employees.filter((employee)=> employee["department"] == departmentData.name)
    setEmployeesDepartment(data)
  }

    return (
      <>
        <div className="container">
        <div className="region left">
        <h2>Departments Data:</h2>
        <h3>Click On The Department To Show Its Data</h3>
        <div className='departments'>
        {departments.map((department)=>{
        return <h2 key={department.name} value={department.name} onClick={showData} style={{backgroundColor:'#B6C7AA', width:'40%', fontSize:'20px',padding:'10px',borderRadius:'20px'}}>{department.name}</h2>
      })} </div>
        </div>
        <div className="region right">
          {
            departmentData.name != '' &&
            <div style={{border:'2px solid #B6C7AA' , width:'90%' , height:'fit-content', margin: 30, padding:10, textAlign:'left', fontSize:"18px"}}>
            <h2 style={{backgroundColor:'#f0f0f0', width:'fit-content',fontSize:"25px",textAlign:'left',paddingLeft:'15px',paddingRight:'15px'}}> {departmentData.name} Department Data:</h2>
            <b>DepartmentName:</b> {departmentData.name} <br/>
            <b>Open Positions:</b> {departmentData.openPositions} <br/>     
            <b>Manager:</b> {departmentData.manager} <br/>           
            <b>Email:</b> {departmentData.email} <br/>           
            <b>Phone:</b> {departmentData.phone} <br/>
            </div>
          }

          {
            employeesDepartment.length > 0 &&
            <>
            <h2 style={{marginLeft:'45px',backgroundColor:'#f0f0f0',width:'fit-content',fontSize:"25px",textAlign:'left',paddingLeft:'15px', paddingRight:'15px'}}> Employees in this department:</h2>
            {employeesDepartment.map((employee)=>{
              return (
                <div div key={employee.id} style={{border:'2px solid #F8F4E1' , width:'90%' , height:'fit-content', margin: 30, padding:10, textAlign:'left', fontSize:"18px"}}>
                <b>EmployeeID:</b> {employee.id} <br/>
                <b>First Name:</b> {employee.firstName}<br/>
                <b>fast Name:</b> {employee.lastName}<br/>
                <b>Start Date:</b> {employee.startDate}<br/>
                <b>Departments:</b> {employee.department}<br/>
                <b>Branch</b> {employee.branch}<br/>
                <b>Salary</b> {employee.salary}<br/>

                </div> 
              )
          
            })}
            </>
          }
        </div>
        
      </div>
      <br/>
      <button onClick={()=>navigate('/')}>Back To Home Page</button>
      </>
    )
  }
  
  export default Departments