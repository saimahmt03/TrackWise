let mockEmployees = [
    { id: 1, firstname: "Sachi", lastname: "De Leon", email: "sdl@startech.com.ph", departmentId: 3 },
    { id: 2, firstname: "Abi", lastname: "Pilongo", email: "ap@startech.com.ph", departmentId: 4 }
];


// simulate API delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const employeeService = {
    
    // GET ALL
    getAll: async () => {
        await delay(500);
        return [...mockEmployees];
    },

    // CREATE
    create: async (data) => {
        await delay(500);
        const newEmployee = {
            id: Date.now(), // simple unique id
            firstname: data.firstname,
            lastname: data.lastname,
            email: data.email,
            departmentId: data.departmentId
        };

        mockEmployees.push(newEmployee);

        return newEmployee;
    },

    // UPDATE
    update: async (id, data) => {
        await delay(500);
        mockEmployees = mockEmployees.map(emp =>
            emp.id === id
                ? { ...emp, ...data }
                : emp
        );

        return mockEmployees.find(emp => emp.id === id);
    }
    
};

export default employeeService;