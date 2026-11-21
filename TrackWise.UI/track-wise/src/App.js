import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import DepartmentPage from "./pages/DepartmentPage";
import EmployeePage from "./pages/EmployeePage";
import TaskPage from "./pages/TaskPage";
import Navbar from "./components/Shared/Navbar";

function App() {
    return (
        <>
            <Navbar />

            <Routes>
                <Route path="/department" element={<DepartmentPage />} />
                <Route path="/employee" element={<EmployeePage />} />
                <Route path="/task" element={<TaskPage />} />
            </Routes>
        </>
    );
}

export default App;