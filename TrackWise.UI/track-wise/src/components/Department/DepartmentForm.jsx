import { useState, useEffect } from "react";
import FormInput from "../Shared/FormInput";
import Button from "../Shared/Button";

function DepartmentForm({
    createDepartment,
    updateDepartment,
    selectedDepartment,
    error,
    loading,
    onSuccess
}) {

    const [departmentData, setDepartmentData] = useState({
        name: ""
    });

    // PREFILL FOR EDIT
    useEffect(() => {
        if (selectedDepartment) {
            setDepartmentData({
                name: selectedDepartment.name || ""
            });
        }
    }, [selectedDepartment]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        let success = false;

        if (selectedDepartment) {
            success = await updateDepartment(selectedDepartment.id, departmentData);
        } else {
            success = await createDepartment(departmentData);
        }

        if (success) {
            setDepartmentData({ name: "" });
            if (onSuccess) onSuccess();
        }
    };

    return (
        <form onSubmit={handleSubmit}>

            <FormInput
                label="Department Name"
                name="name"
                value={departmentData.name}
                onChange={(e) =>
                    setDepartmentData({
                        ...departmentData,
                        name: e.target.value
                    })
                }
                placeholder="Enter department name"
                required
            />

            {error && <p style={{ color: "red" }}>{error}</p>}

            <Button
                type="submit"
                label={
                    loading
                        ? "Saving..."
                        : selectedDepartment
                            ? "Update Department"
                            : "Save Department"
                }
                disabled={loading}
            />

        </form>
    );
}

export default DepartmentForm;