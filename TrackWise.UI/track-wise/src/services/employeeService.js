import apiClient from "./apiClient";

const employeeService = {
    create: async (data) => {
        const response = await apiClient.post("/employee", data);
        return response.data;
    },

    getAll: async () => {
        const response = await apiClient.get("/employee");
        return response.data;
    },

    update: async (id, data) => {
        const response = await apiClient.put(`/employee/${id}`, data);
        return response.data;
    }
};

export default employeeService;