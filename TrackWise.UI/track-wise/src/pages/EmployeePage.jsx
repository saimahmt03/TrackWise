import { useState } from "react";
import EmployeeForm from "../components/Employee/EmployeeForm";
import EmployeeTable from "../components/Employee/EmployeeTable";
import Modal from "../components/Shared/Modal";
import Button from "../components/Shared/Button";
import useEmployee from "../hooks/useEmployee";
import { pageLayoutStyles } from "../pages/pageLayout.style";

function EmployeePage() {

    const employeeState = useEmployee();

    const [isOpen, setIsOpen] = useState(false);
    const [selectedEmployee, setSelectedEmployee] = useState(null);

    const handleAdd = () => {
        setSelectedEmployee(null);
        setIsOpen(true);
    };

    const handleEdit = (emp) => {
        setSelectedEmployee(emp);
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <main className={pageLayoutStyles.container}>
            <div className={pageLayoutStyles.wrapper}>

                <h1 className={pageLayoutStyles.title}>
                    Employee Management
                </h1>

                <div className={pageLayoutStyles.actions}>
                    <Button label="Add Employee" onClick={handleAdd} />
                </div>

                <div className={pageLayoutStyles.tableSection}>
                    <EmployeeTable
                        {...employeeState}
                        onEdit={handleEdit}
                    />
                </div>

                <Modal
                    isOpen={isOpen}
                    onClose={handleClose}
                    title={selectedEmployee ? "Edit Employee" : "Add Employee"}
                >
                    <div className={pageLayoutStyles.modalContent}>
                        <EmployeeForm
                            {...employeeState}
                            selectedEmployee={selectedEmployee}
                            onSuccess={handleClose}
                        />
                    </div>
                </Modal>

            </div>
        </main>
    );
}

export default EmployeePage;