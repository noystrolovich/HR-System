import {useNavigate } from 'react-router-dom';
import {useDispatch} from 'react-redux';


function EmployeeData({employee}) {
    const navigate = useNavigate()
    const dispatch = useDispatch()


    const deletEmployee = () => {
      dispatch({type:'DELETE',payload:employee.id})
    }
    
    return (
      <div style={{border:'2px solid #B6C7AA' , width:'90%' , height:'fit-content', margin: 20, padding:5, textAlign:'left'}}>
            <b>EmployeeID:</b> {employee.id} <br/>
            <b>First Name:</b> {employee.firstName}<br/>
            <b>fast Name:</b> {employee.lastName}<br/>
            <b>Start Date:</b> {employee.startDate}<br/>
            <b>Departments:</b> {employee.department}<br/>
            <b>Branch</b> {employee.branch}<br/>
            <b>Salary</b> {employee.salary}<br/>
            <button onClick={()=>navigate(`/employees/${employee.id}/edit`)}>EDIT</button>
            <button onClick={deletEmployee}>DELETE</button>
            </div>
    )
  }
  
  export default EmployeeData