import { useState } from 'react';
import EmployeeForm from '../components/Employee/EmployeeForm';
import EmployeeTable from '../components/Employee/EmployeeTable';
import Modal from '../components/Shared/Modal';
import Button from '../components/Shared/Button';
import useEmployee from '../hooks/useEmployee';

function EmployeePage() {

    const employeeState = useEmployee(); // useEmployee hooks

    const [isOpen, setIsOpen] = useState(false);
    const [selectedEmployee, setSelectedEmployee] = useState(null);

    const handleAdd = () => {   // Open modal for adding new employee
        setSelectedEmployee(null);
        setIsOpen(true);
    }

    const handleEdit = (emp) => {   // Open modal for editing existing employee
        setSelectedEmployee(emp);
        setIsOpen(true);
    }

    const handleClose = () => {   // Close modal
        setIsOpen(false);
     }

     return (
        <main>
            <h1>Employee Management</h1>

            <Button label="Add Employee" onClick={handleAdd} />

            <EmployeeTable
                {...employeeState}
                onEdit={handleEdit}
            />

            <Modal
                isOpen={isOpen}
                onClose={handleClose}
                title={selectedEmployee ? "Edit Employee" : "Add Employee"}
            >

                <EmployeeForm
                    {...employeeState}
                    selectedEmployee={selectedEmployee}
                    onSuccess={handleClose}
                />
                
            </Modal>
        </main>
     );
}

export default EmployeePage;