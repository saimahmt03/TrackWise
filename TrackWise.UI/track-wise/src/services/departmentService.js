import apiClient from "./apiClient";

const departmentService = {
    create: async (departmentData) => {
        try {
            const response = await apiClient.post("/department", departmentData);
            return response.data;
        } catch(error) {
            console.error("Error creating department:", error);
            throw error;
        }
    }

};

export default departmentService;