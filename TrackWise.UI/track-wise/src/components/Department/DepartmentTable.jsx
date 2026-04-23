import Table from "../Shared/Table";
import Button from "../Shared/Button";

function DepartmentTable({ departments, loading, onEdit }) {

    const columns = [
        {
            header: "ID",
            accessor: (row) => row.id
        },
        {
            header: "Department Name",
            accessor: (row) => row.name
        },
        {
            header: "Actions",
            accessor: (row) => (
                <Button
                    label="Edit"
                    onClick={() => onEdit(row)}
                />
            )
        }
    ];

    return (
        <div>
            <h2>Department List</h2>

            {loading ? (
                <p>Loading...</p>
            ) : (
                <Table columns={columns} data={departments} />
            )}
        </div>
    );
}

export default DepartmentTable;