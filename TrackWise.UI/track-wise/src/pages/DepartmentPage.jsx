import { useState } from "react";
import DepartmentForm from "../components/Department/DepartmentForm";
import DepartmentTable from "../components/Department/DepartmentTable";
import Modal from "../components/Shared/Modal";
import Button from "../components/Shared/Button";
import useDepartment from "../hooks/useDepartment";

function DepartmentPage() {

    const departmentState = useDepartment();

    const [isOpen, setIsOpen] = useState(false);
    const [selectedDepartment, setSelectedDepartment] = useState(null);

    const handleAdd = () => {
        setSelectedDepartment(null);
        setIsOpen(true);
    };

    const handleEdit = (dept) => {
        setSelectedDepartment(dept);
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <main>
            <h1>Department Management</h1>

            <Button label="Add Department" onClick={handleAdd} />

            <DepartmentTable
                {...departmentState}
                onEdit={handleEdit}
            />

            <Modal
                isOpen={isOpen}
                onClose={handleClose}
                title={selectedDepartment ? "Edit Department" : "Add Department"}
            >
                <DepartmentForm
                    {...departmentState}
                    selectedDepartment={selectedDepartment}
                    onSuccess={handleClose}
                />
            </Modal>
        </main>
    );
}

export default DepartmentPage;