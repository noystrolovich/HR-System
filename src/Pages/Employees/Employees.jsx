import AddNewEmployee from './AddNewEmployee'
import EmployeesData from './EmployeesData'
import {useNavigate} from 'react-router-dom';


function Employees() {

  const navigate = useNavigate()

  
    return (
      <>
      <div className="container">
        <div className="region left">
          <EmployeesData/>
        </div>
        <div className="region right">
          <AddNewEmployee/>
        </div>
      </div>
      <br/>
      <button onClick={()=>navigate('/')}>Back To Home Page</button>
      </>
    )
  }
  
  export default Employees
  