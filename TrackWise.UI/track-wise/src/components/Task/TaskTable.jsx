import Table from "../Shared/Table";
import Button from "../Shared/Button";
import Dropdown from "../Shared/Dropdown";

function TaskTable({
    tasks,
    loading,
    onEdit,
    priorityOptions = [],
    statusOptions = [],
    onPriorityChange,
    onStatusChange
}) {

    const columns = [
        {
            header: "ID",
            accessor: (row) => row.id
        },
        {
            header: "Title",
            accessor: (row) => row.title
        },
        {
            header: "Description",
            accessor: (row) => row.description
        },

        // PRIORITY DROPDOWN
        {
            header: "Priority",
            accessor: (row) => (
                <Dropdown
                    name={`priority-${row.id}`}
                    value={row.priority?.id || ""}
                    options={priorityOptions}
                    onChange={(e) =>
                        onPriorityChange(row.id, e.target.value)
                    }
                />
            )
        },

        // STATUS DROPDOWN
        {
            header: "Status",
            accessor: (row) => (
                <Dropdown
                    name={`status-${row.id}`}
                    value={row.status?.id || ""}
                    options={statusOptions}
                    onChange={(e) =>
                        onStatusChange(row.id, e.target.value)
                    }
                />
            )
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
            <h2>Task List</h2>

            {loading ? (
                <p>Loading...</p>
            ) : (
                <Table columns={columns} data={tasks} onRowClick={onEdit} />
            )}
        </div>
    );
}

export default TaskTable;