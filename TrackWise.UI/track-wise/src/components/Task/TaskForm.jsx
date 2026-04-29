import { useEffect, useState } from "react";

function TaskForm({ selectedTask, onSuccess }) {

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        priority: null,
        status: null
    });

    // load selected task into form
    useEffect(() => {
        if (selectedTask) {
            setFormData({
                title: selectedTask.title || "",
                description: selectedTask.description || "",
                priority: selectedTask.priority || null,
                status: selectedTask.status || null
            });
        } else {
            // reset for "Add"
            setFormData({
                title: "",
                description: "",
                priority: null,
                status: null
            });
        }
    }, [selectedTask]);

    return (
        <div>
            <h3>{selectedTask ? "Edit Task" : "Add Task"}</h3>

            {/* example inputs */}
            <input
                value={formData.title}
                onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                }
            />

            <textarea
                value={formData.description}
                onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                }
            />

            <button onClick={onSuccess}>Close</button>
        </div>
    );
}

export default TaskForm;