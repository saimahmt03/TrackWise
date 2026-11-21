// Department reusable helper
export const getDepartmentName = (departments, departmentId) => {
    const dept = departments.find(d => d.id === departmentId);
    return dept ? dept.name : "N/A";
};