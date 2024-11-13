import {useSelector} from 'react-redux'
import { useState} from 'react';
import {useNavigate} from 'react-router-dom';



function SalaryCalculator() {
  const employees = useSelector((state)=>state.employees)
  const navigate = useNavigate()


  const [employeeID,setEmployeeID] = useState('')
  const [incomeTax,setIncomeTax] = useState(0)
  const [employeeSalary,setEmployeeSalary] = useState({
    name:'',
    salaryBase:0,
    pension:0,
    travelExpenses:0,
    nationalInsurance:0,
    healthInsurance:0,
    incomeTax:0,
    salaryAfter:0
  })

  const nationalInsurance = 7;
  const pension = 6;
  const travelExpenses = 224;
  const healthInsurance = 5;
  const calculateSalary = (e) =>{
    e.preventDefault();
    const employeeData = employees.find((employee)=>employee.id == employeeID)
    
    const employeeSalary = employeeData.salary
    const obj ={}
    let incomeTax;
    
    if(employeeSalary > 0 && employeeSalary < 7010){
      incomeTax = 10
    }
    else if(employeeSalary > 7011 && employeeSalary < 10060){
      incomeTax = 14
    }
    else if(employeeSalary > 10061 && employeeSalary < 16150){
      incomeTax = 20
    }
    else {
      incomeTax = 31
    }
    obj.name = (`${employeeData.firstName} ${employeeData.lastName}`)
    obj.salaryBase = employeeSalary;
    obj.pension = (employeeSalary/100)*pension;
    obj.travelExpenses = travelExpenses;
    obj.nationalInsurance = (employeeSalary/100)*nationalInsurance;
    obj.healthInsurance = (employeeSalary/100)*healthInsurance;
    obj.incomeTax = (employeeSalary/100)*incomeTax;
    obj.salaryAfter = employeeSalary - obj.pension + obj.travelExpenses - obj.nationalInsurance -  obj.healthInsurance - obj.incomeTax;
    setEmployeeSalary(obj)
    setIncomeTax(incomeTax)
  }

    
      return (
        <>
        <h2>Salary Calculator For Employee</h2><br/>
        <form>
        <select onChange={(e)=>setEmployeeID(e.target.value)}>
        <option value="">Select Employee</option>
        {employees.map((employee)=>{        
        return(<option key={employee.name} value={employee.id}>{`${employee.firstName} ${employee.lastName}`}</option>)
        })}
        </select>
        <button onClick={calculateSalary}>Calcolate Salary</button>
        </form>
        <div>
        {
        <div style={{visibility: employeeSalary.name ? 'visible' : 'hidden'}}>
        <h2>{employeeSalary.name} Salary Details:</h2>
        <table>
          <tbody>
          <tr>
            <th>Name</th>
            <th>Value</th>
            <th>Percentage</th>
          </tr>
          <tr>
            <td>Salary Base</td>
            <td>{employeeSalary.salaryBase}</td>
            <td></td>
          </tr>
          <tr>
            <td>Pension</td>
            <td>{`- ${employeeSalary.pension}`}</td>
            <td>{`- ${pension}%`}</td>
          </tr>
          <tr>
            <td>Travel Expenses</td>
            <td>{`+ ${employeeSalary.travelExpenses}`}</td>
            <td></td>
          </tr>
          <tr>
            <td>National Insurance</td>
            <td>{`- ${employeeSalary.nationalInsurance}`}</td>
            <td>{`- ${nationalInsurance}%`}</td>
          </tr>
          <tr>
            <td>Health Insurance</td>
            <td>{`- ${employeeSalary.healthInsurance}`}</td>
            <td>{`- ${healthInsurance}%`}</td>
          </tr>
          <tr>
            <td>Income Tax</td>
            <td>{`- ${employeeSalary.incomeTax}`}</td>
            <td>{`- ${incomeTax}%`}</td>
          </tr>
          <tr>
            <td>Salary After</td>
            <td>{`${employeeSalary.salaryAfter}`}</td>
            <td></td>
          </tr>
          </tbody>
        </table>
        </div>
        }
        <button style={{marginTop: "40px"}} onClick={()=>navigate('/')}>Back To Home Page</button>

        </div>
        </>
      )
    }
    
    export default SalaryCalculator
    