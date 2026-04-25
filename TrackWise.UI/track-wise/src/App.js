import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import DepartmentPage from "./pages/DepartmentPage";
import EmployeePage from "./pages/EmployeePage";

function App() {
    return (
        <BrowserRouter>

            <nav style={{ marginBottom: "20px" }}>
                <Link to="/department" style={{ marginRight: "10px" }}>
                    Departments
                </Link>

                {/*<Link to="/employee">
                    Employees
                </Link>*/}
            </nav>

            <Routes>
                {/*<Route path="/" element={<Navigate to="/department" />} */}
                <Route path="/department" element={<DepartmentPage />} />
                {/*<Route path="/employee" element={<EmployeePage />} />*/}
            </Routes>

        </BrowserRouter>
    );
}

export default App;