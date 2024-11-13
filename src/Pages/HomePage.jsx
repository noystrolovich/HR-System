import {useNavigate} from 'react-router-dom';

function HomePage() {

    const navigate = useNavigate()

  return (
    <>
      <div className="homepage">
        <h1>HR System</h1>
        <div>
          <button onClick={() => navigate("/employees")}>Employees Page</button>
          <button onClick={() => navigate("/departments")}>Departments Page</button>
          <button onClick={() => navigate("/salarycalculator")}>Salary Calculator</button>
        </div>
      </div>{" "}
    </>
  );
}

export default HomePage;
