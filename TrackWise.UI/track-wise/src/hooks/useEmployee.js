import { useState, useEffect } from "react";
import employeeService from "../services/employeeService";

function useEmployee() {

    // STATE
    const [employees, setEmployees] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // VALIDATION
    const validateEmployee = (data) => {
        if(!data.firstname || data.firstname.trim() === "") {
            return "First name is required";
        }
        
        if(!data.lastname || data.lastname.trim() === "") {
            return "Last name is required";
        }

        if(!data.email || data.email.trim() === "") {
            return "Email is required";
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(data.email)) {
            return "Invalid email format";
        }

        const regex = /^[A-Za-z\s]+$/;
        if (!regex.test(data.firstname) || !regex.test(data.lastname)) {
            return "Only letters and spaces are allowed";
        }

        return null;
    };

    // GET ALL
    const fetchEmployees = async () => {
        setLoading(true);
        try {
            const data = await employeeService.getAll();
            setEmployees(data);
        } catch {
            setError("Failed to load employees");
        } finally {
            setLoading(false);
        }
    }; 
    
    // CREATE
    const createEmployee = async (data) => {
        const errorMsg = validateEmployee(data);
        if (errorMsg) {
            setError(errorMsg);
            return false;
        }

        setLoading(true);
        try {
            const result = await employeeService.create(data);
            setEmployees(prev => [...prev, result]);
            return true;
        } catch {
            setError("Failed to create employee");
            return false;
        } finally {
            setLoading(false);
        }
    };  
    
    // UPDATE
    const updateEmployee = async (id, data) => {
        const errorMsg = validateEmployee(data);
        if (errorMsg) {
            setError(errorMsg);
            return false;
        }

        setLoading(true);
        try {
            const result = await employeeService.update(id, data);          
            setEmployees(prev => 
                prev.map(emp => 
                    emp.id === id ? result : emp
                )
            );

            return true;
        } catch {
            setError("Failed to update employee");
            return false;
        } finally {
            setLoading(false);
        }
    }; 

    useEffect(() => {
        fetchEmployees();
    }, []);

    return {
        employees,
        loading,
        error,
        createEmployee,
        updateEmployee
    };
} 

export default useEmployee;