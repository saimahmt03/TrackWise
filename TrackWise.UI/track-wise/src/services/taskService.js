import apiClient from "./apiClient";

const taskService = {
    create: async (data) => {
        const response = await apiClient.post("/task", data);
        return response.data;
    },

    getAll: async () => {
        const response = await apiClient.get("/task");
        return response.data;
    },

    update: async (id, data) => {
        const response = await apiClient.put(`/task/${id}`, data);
        return response.data;
    }
};

export default taskService;