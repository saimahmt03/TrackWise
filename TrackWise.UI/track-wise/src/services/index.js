import realService from "./departmentService";
import mockService from "./departmentService.mock";

// switch here
const USE_MOCK = true;

const departmentService = USE_MOCK ? mockService : realService;

export default departmentService;