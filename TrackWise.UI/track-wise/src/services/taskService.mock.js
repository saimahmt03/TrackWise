// MOCK TASK DATA
let mockTasks = [
    {
        id: 1,
        title: "Setup Project",
        description: "Initialize React app structure",
        priority: { id: 2, name: "Medium" },
        status: { id: 1, name: "Open" }
    },
    {
        id: 2,
        title: "Create API Layer",
        description: "Build service layer for API calls",
        priority: { id: 3, name: "High" },
        status: { id: 2, name: "In Progress" }
    }
];

// simulate API delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const taskService = {

    // GET ALL TASKS
    getAll: async () => {
        await delay(500);
        return [...mockTasks];
    },

    // CREATE TASK
    create: async (data) => {
        await delay(300);

        const newTask = {
            id: mockTasks.length + 1,
            title: data.title,
            description: data.description,
            priority: data.priority || null,
            status: data.status || null
        };

        mockTasks.push(newTask);
        return newTask;
    },

    // UPDATE TASK
    update: async (id, data) => {
        await delay(300);

        mockTasks = mockTasks.map(task =>
            task.id === id
                ? { ...task, ...data } // FIXED: proper merge update
                : task
        );

        return mockTasks.find(t => t.id === id);
    }

};

export default taskService;