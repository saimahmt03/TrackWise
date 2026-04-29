import apiClient from "./apiClient";

const dataService = {

    getAllTaskPriorities: async () => {
        const response = await apiClient.get("/task-priority");
        return response.data;
    },

    getAllTaskStatuses: async () => {
        const response = await apiClient.get("/task-status");
        return response.data;
    }
};

export default dataService;