import { useState, useEffect } from "react";
import FormInput from "../Shared/FormInput";
import Button from "../Shared/Button";
import SelectDropdown from "../Shared/SelectDropdown";

function EmployeeForm({
    createEmployee,
    updateEmployee,
    selectedEmployee, // UPDATED (was selectDepartment)
    departments,
    error,
    loading,
    onSuccess
}) {

    const [employeeData, setEmployeeData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        departmentId: ""
    });

    // PREFILL FOR EDIT
    useEffect(() => {
        if (selectedEmployee) { // UPDATED
            setEmployeeData({
                firstname: selectedEmployee.firstname || "",
                lastname: selectedEmployee.lastname || "",
                email: selectedEmployee.email || "",
                departmentId: selectedEmployee.departmentId || ""
            });
        }
    }, [selectedEmployee]); // UPDATED

    const handleSubmit = async (e) => {
        e.preventDefault();

        let success = false;

        if (selectedEmployee) { // UPDATED
            success = await updateEmployee(selectedEmployee.id, employeeData);
        } else {
            success = await createEmployee(employeeData);
        }

        if (success) {
            setEmployeeData({
                firstname: "",
                lastname: "",
                email: "",
                departmentId: ""
            });

            if (onSuccess) onSuccess();
        }
    };

    return (
        <form onSubmit={handleSubmit}>

            {/* First Name */}
            <FormInput
                label="First Name"
                name="firstname"
                value={employeeData.firstname}
                onChange={(e) =>
                    setEmployeeData({
                        ...employeeData,
                        firstname: e.target.value
                    })
                }
                placeholder="Enter first name"
                required
            />

            {/* Last Name */}
            <FormInput
                label="Last Name"
                name="lastname"
                value={employeeData.lastname}
                onChange={(e) =>
                    setEmployeeData({
                        ...employeeData,
                        lastname: e.target.value
                    })
                }
                placeholder="Enter last name"
                required
            />

            {/* Email */}
            <FormInput
                label="Email"
                name="email"
                type="email"
                value={employeeData.email}
                onChange={(e) =>
                    setEmployeeData({
                        ...employeeData,
                        email: e.target.value
                    })
                }
                placeholder="Enter email"
                required
            />

            {/* Department Dropdown */}
            <SelectDropdown
                label="Department"
                name="departmentId"
                value={employeeData.departmentId}
                onChange={(e) =>
                    setEmployeeData({
                        ...employeeData,
                        departmentId: Number(e.target.value) // keep numeric
                    })
                }
                options={departments}
                required
            />

            {error && <p style={{ color: "red" }}>{error}</p>}

            <Button
                type="submit"
                label={selectedEmployee ? "Update Employee" : "Create Employee"} // ✅ UPDATED
                disabled={loading}
            />
        </form>
    );
}

export default EmployeeForm;