import { useState } from "react";
import DepartmentForm from "../components/Department/DepartmentForm";
import DepartmentTable from "../components/Department/DepartmentTable";
import Modal from "../components/Shared/Modal";
import Button from "../components/Shared/Button";
import useDepartment from "../hooks/useDepartment";
import { pageLayoutStyles } from "../pages/pageLayout.style";

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
        <main className={pageLayoutStyles.container}>
            <div className={pageLayoutStyles.wrapper}>

                <h1 className={pageLayoutStyles.title}>
                    Department Management
                </h1>

                <div className={pageLayoutStyles.actions}>
                    <Button label="Add Department" onClick={handleAdd} />
                </div>

                <div className={pageLayoutStyles.tableSection}>
                    <DepartmentTable
                        {...departmentState}
                        onEdit={handleEdit}
                    />
                </div>

                <Modal
                    isOpen={isOpen}
                    onClose={handleClose}
                    title={selectedDepartment ? "Edit Department" : "Add Department"}
                >
                    <div className={pageLayoutStyles.modalContent}>
                        <DepartmentForm
                            {...departmentState}
                            selectedDepartment={selectedDepartment}
                            onSuccess={handleClose}
                        />
                    </div>
                </Modal>

            </div>
        </main>
    );
}

export default DepartmentPage;