

namespace TrackWise.API.DTOs.Request.EmployeeRequest
{
    public class AddNewEmployee
    {
        public string FirstName { get; set; } = string.Empty;
        public string LastName { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public int DepartmentId { get; set; }
    }
}