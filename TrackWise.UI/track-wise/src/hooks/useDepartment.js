import { useState } from "react";
import departmentService from "../services/departmentService";

function useDepartment() {

    // The best practice for hooks divided into three:
    // 1. STATE LAYER: This layer manages the state of the department data, including loading and error states.
    // 2. ACTION LAYER: This layer defines functions to perform actions related to departments, such as creating a new department.
    // 3. VALIDATION LAYER: This layer can be used to validate department data before performing actions.

    // State Layer
    const [department, setDepartment] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    // Validation Layer
    const validateDepartment = (departmentData) => {

        if(!departmentData.name || departmentData.name.trim() === "") {
            return "Department name is required";
        }

        const regex = /^[A-Za-z\s]+$/;

        if (!regex.test(departmentData.name)) {
            return "Only letters and spaces are allowed";
        }

        return null;
    }


    // Action Layer
    // Add new department
    const addNewDepartment = async (departmentData) => {

        const validationError = validateDepartment(departmentData);

        if (validationError) {
            setError(validationError);
            return;
        }

        setLoading(true);
        setError(null);

        try {
            const newDepartment = await departmentService.create(departmentData);
            setDepartment([...department, newDepartment]);
        } catch (err) {
            setError("Failed to create department");
            return false;
        } finally {
            setLoading(false);
        }
    };

    return {
        department,
        loading,
        error,
        addNewDepartment
    };
}