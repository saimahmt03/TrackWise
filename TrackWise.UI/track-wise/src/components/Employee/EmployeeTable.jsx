import Table from "../Shared/Table";
import { getDepartmentName } from "../../utils/departmentUtils"; // import helper from utils

function EmployeeTable({ employees, departments }) {

    const columns = [
        {
            header: "ID",
            accessor: (row) => row.id
        },
        {
            header: "Full Name",
            accessor: (row) => `${row.firstname} ${row.lastname}`
        },
        {
            header: "Email",
            accessor: (row) => row.email
        },
        {
            header: "Department",
            // use reusable helper instead of inline function
            accessor: (row) => getDepartmentName(departments, row.departmentId)
        }
    ];

    return (
        <div>
            <h2>Employee List</h2>

            <Table
                columns={columns}
                data={employees}
            />
        </div>
    );
}

export default EmployeeTable;