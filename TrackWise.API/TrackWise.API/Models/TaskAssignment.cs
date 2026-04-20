using System;

namespace TrackWise.API.Models
{
    public class TaskAssignment
    {
        public int AssignmentId { get; set; }
        public int TaskId { get; set; }
        public int EmployeeId { get; set; }
        public DateTime AssignedAt { get; set; }
    }
}