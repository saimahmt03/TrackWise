import { useState } from "react";
import FormInput from "../Shared/FormInput";
import Button from "../Shared/Button";

function DepartmentForm() {
    const [departmentData, setDepartmentData] = useState({
        name: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(departmentData);
    };

    return (
        <form onSubmit = {handleSubmit}> 

            {/* Reusability of FormInput component for Department Form */}
            <FormInput
                label="Department Name"
                name="name"
                value={departmentData.name}
                onChange={(e) => setDepartmentData(e.target.value)}
                placeholder="Enter department name"
                required
            /> 

            {/* Reusability of Button component for Department Form */}
            <Button type="submit" label="Save Department" /> 

        </form>
    );
} 

export default DepartmentForm;