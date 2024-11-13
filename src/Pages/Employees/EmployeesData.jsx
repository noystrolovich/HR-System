import {useSelector} from 'react-redux'
import EmployeeData from './EmployeeData'



function EmployeesData() {

  const employees = useSelector((state)=>state.employees)
  
    return (
      <>
      <h2>Employees Data:</h2>
      <h3>Current Number Of Employees:{employees.length}</h3>
      {employees.map((employee)=>{
        return <EmployeeData employee={employee} key={employee.id}/>
      })} 
      </>
    )
  }
  
  export default EmployeesData
  