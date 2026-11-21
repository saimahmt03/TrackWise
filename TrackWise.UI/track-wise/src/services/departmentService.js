import apiClient from "./apiClient";

const departmentService = {
    create: async (data) => {
        const response = await apiClient.post("/department", data);
        return response.data;
    },

    getAll: async () => {
        const response = await apiClient.get("/department");
        return response.data;
    },

    update: async (id, data) => {
        const response = await apiClient.put(`/department/${id}`, data);
        return response.data;
    }
};

export default departmentService;