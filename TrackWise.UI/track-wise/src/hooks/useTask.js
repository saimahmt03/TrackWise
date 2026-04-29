import { useState, useEffect } from "react";
import taskService from "../services/taskService.mock";

function useTask() {

    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // FIXED: auto-load tasks on hook init
    useEffect(() => {
        fetchTasks();
    }, []);

    const validateTask = (data) => {
        if (!data.title || data.title.trim() === "") {
            return "Task title is required"; // FIXED: was "name"
        }

        return null;
    };

    const fetchTasks = async () => {
        setLoading(true);
        try {
            const data = await taskService.getAll();
            setTasks(data);
        }
        catch {
            setError("Failed to load tasks");
        }
        finally {
            setLoading(false);
        }
    };

    const createTask = async (data) => {

        const errorMsg = validateTask(data);
        if (errorMsg) {
            setError(errorMsg);
            return false;
        }

        setLoading(true);
        try {
            const result = await taskService.create(data);
            setTasks(prev => [...prev, result]);
            return true;
        }
        catch {
            setError("Failed to create task");
            return false;
        }
        finally {
            setLoading(false);
        }
    };

    const updateTask = async (id, data) => {

        const errorMsg = validateTask(data);
        if (errorMsg) {
            setError(errorMsg);
            return false;
        }

        setLoading(true);
        try {
            const result = await taskService.update(id, data);

            setTasks(prev =>
                prev.map(task =>
                    task.id === id ? result : task
                )
            );

            return true;
        }
        catch {
            setError("Failed to update task");
            return false;
        }
        finally {
            setLoading(false);
        }
    };

    return {
        tasks,
        setTasks, // FIXED: needed for dropdown updates
        loading,
        error,
        fetchTasks,
        createTask,
        updateTask
    };
}

export default useTask;