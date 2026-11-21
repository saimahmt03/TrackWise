let mockDepartments = [
    { id: 1, name: "HR" },
    { id: 2, name: "Finance" },
    { id: 3, name: "IT" },
    { id: 4, name: "Product" }
];

// simulate API delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const departmentService = {

    // GET ALL
    getAll: async () => {
        await delay(500);
        return [...mockDepartments];
    },

    // CREATE
    create: async (data) => {
        await delay(500);

        const newDepartment = {
            id: Date.now(), // simple unique id
            name: data.name
        };

        mockDepartments.push(newDepartment);

        return newDepartment;
    },

    // UPDATE
    update: async (id, data) => {
        await delay(500);

        mockDepartments = mockDepartments.map(dep =>
            dep.id === id
                ? { ...dep, name: data.name }
                : dep
        );

        return mockDepartments.find(dep => dep.id === id);
    }

};

export default departmentService;