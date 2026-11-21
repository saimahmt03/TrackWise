import { useState } from "react";
import TaskForm from "../components/Task/TaskForm";
import TaskTable from "../components/Task/TaskTable";
import Modal from "../components/Shared/Modal";
import Button from "../components/Shared/Button";
import useTask from "../hooks/useTask";
import useData from "../hooks/useData";
import { pageLayoutStyles } from "../pages/pageLayout.style";

function TaskPage() {

    const taskState = useTask();
    const { priorityOptions, statusOptions } = useData();

    const [isOpen, setIsOpen] = useState(false);
    const [selectedTask, setSelectedTask] = useState(null);

    const handleAdd = () => {
        setSelectedTask(null);
        setIsOpen(true);
    };

    const handleEdit = (task) => {
        setSelectedTask(task);
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    // HANDLE PRIORITY CHANGE - safer fallback for undefined options
    const handlePriorityChange = (taskId, priorityId) => {
        
        const selected = priorityOptions.find(
            p => p.id === Number(priorityId)
        );

        taskState.setTasks(prev =>
            prev.map(t =>
                t.id === taskId
                    ? { ...t, priority: selected } // unchanged logic
                    : t
            )
        );
    };

    // HANDLE STATUS CHANGE:  same pattern consistency as priority change, with safer option handling   
    const handleStatusChange = (taskId, statusId) => {
        
        const selected = statusOptions.find(
            s => s.id === Number(statusId)
        );

        taskState.setTasks(prev =>
            prev.map(t =>
                t.id === taskId
                    ? { ...t, status: selected }
                    : t
            )
        );
    };

    return (
        <main className={pageLayoutStyles.container}>
            <div className={pageLayoutStyles.wrapper}>

                <h1 className={pageLayoutStyles.title}>
                    Task Management
                </h1>

                <div className={pageLayoutStyles.actions}>
                    <Button label="Add Task" onClick={handleAdd} />
                </div>

                <div className={pageLayoutStyles.tableSection}>
                    <TaskTable
                        {...taskState}
                        onEdit={handleEdit}
                        priorityOptions={priorityOptions}
                        statusOptions={statusOptions}
                        onPriorityChange={handlePriorityChange}
                        onStatusChange={handleStatusChange}
                    />
                </div>

                <Modal
                    isOpen={isOpen}
                    onClose={handleClose}
                    title={selectedTask ? "Edit Task" : "Add Task"}
                >
                    <div className={pageLayoutStyles.modalContent}>
                        <TaskForm
                            {...taskState}
                            selectedTask={selectedTask}
                            onSuccess={handleClose}
                        />
                    </div>
                </Modal>

            </div>
        </main>
    );
}

export default TaskPage;