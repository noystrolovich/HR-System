import './App.css'
import HomePage from'./Pages/HomePage'
import Employees from'./Pages/Employees/employees'
import Departments from'./Pages/Departments/Departments'
import SalaryCalculator from'./Pages/SalaryCalculator/SalaryCalculator'
import EditEmployee from './Pages/Employees/EditEmployee'
import{Routes, Route} from 'react-router-dom';


function App() {

  return (
    <>
    <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/employees" element={<Employees/>} />
        <Route path='/departments' element={<Departments/>} />
        <Route path="/salarycalculator" element={<SalaryCalculator/>} />
        <Route path="/employees/:id/edit" element={<EditEmployee/>} />
    </Routes>
    </>
  )
}

export default App
