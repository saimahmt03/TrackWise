let mockPriorities = [
    { id: 1, name: "Low" },
    { id: 2, name: "Medium" },
    { id: 3, name: "High" }
];

let mockStatuses = [
    { id: 1, name: "Open" },
    { id: 2, name: "In Progress" },
    { id: 3, name: "Closed" }
];

// simulate API delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const dataService = {

    // GET ALL TASK PRIORITIES      
    getAllTaskPriorities: async () => {
        await delay(500);
        return [...mockPriorities];
    },

    // GET ALL TASK STATUSES
    getAllTaskStatuses: async () => {
        await delay(500);
        return [...mockStatuses];
    }

};

export default dataService;