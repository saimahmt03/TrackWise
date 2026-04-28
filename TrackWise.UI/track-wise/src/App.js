import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import DepartmentPage from "./pages/DepartmentPage";
import EmployeePage from "./pages/EmployeePage";
import Navbar from "./components/Shared/Navbar";

function App() {
    return (
        <BrowserRouter>

            <Navbar />

            <Routes>
                {/* Default route */}
                <Route path="/" element={<Navigate to="/department" />} />

                <Route path="/department" element={<DepartmentPage />} />
                <Route path="/employee" element={<EmployeePage />} />
            </Routes>

        </BrowserRouter>
    );
}

export default App;