import { useState, useEffect } from "react";
//import departmentService from "../services/departmentService";
import departmentService from "../services/departmentService.mock";

function useDepartment() {

    // STATE
    const [departments, setDepartments] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // VALIDATION
    const validateDepartment = (data) => {
        if (!data.name || data.name.trim() === "") {
            return "Department name is required";
        }

        const regex = /^[A-Za-z\s]+$/;
        if (!regex.test(data.name)) {
            return "Only letters and spaces are allowed";
        }

        return null;
    };

    // GET ALL
    const fetchDepartments = async () => {
        setLoading(true);
        try {
            const data = await departmentService.getAll();
            setDepartments(data);
        } catch {
            setError("Failed to load departments");
        } finally {
            setLoading(false);
        }
    };

    // CREATE
    const createDepartment = async (data) => {
        const errorMsg = validateDepartment(data);
        if (errorMsg) {
            setError(errorMsg);
            return false;
        }

        setLoading(true);
        try {
            const result = await departmentService.create(data);
            setDepartments(prev => [...prev, result]);
            return true;
        } catch {
            setError("Failed to create department");
            return false;
        } finally {
            setLoading(false);
        }
    };

    // UPDATE
    const updateDepartment = async (id, data) => {
        const errorMsg = validateDepartment(data);
        if (errorMsg) {
            setError(errorMsg);
            return false;
        }

        setLoading(true);
        try {
            const result = await departmentService.update(id, data);

            setDepartments(prev =>
                prev.map(dep =>
                    dep.id === id ? result : dep
                )
            );

            return true;
        } catch {
            setError("Failed to update department");
            return false;
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchDepartments();
    }, []);

    return {
        departments,
        loading,
        error,
        createDepartment,
        updateDepartment
    };
}

export default useDepartment;