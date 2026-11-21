import { useState, useEffect } from "react";
import dataService from "../services/dataService.mock"; // use the mock service for testing purposes

function useData() {

    const [priorityOptions, setPriorityOptions] = useState([]);
    const [statusOptions, setStatusOptions] = useState([]);

    useEffect(() => {
        const load = async () => {
            
            const priorities = await dataService.getAllTaskPriorities();
            const statuses = await dataService.getAllTaskStatuses();

            setPriorityOptions(priorities);
            setStatusOptions(statuses);
        };

        load();
    }, []);

    return {
        priorityOptions,
        statusOptions
    };
}

export default useData;