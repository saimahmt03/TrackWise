using System;
using System.Collections.Generic;
using TrackWise.API.Models;

namespace TrackWise.API.DTOs.Result.EmployeeResult
{
    public class GetAllEmployee
    {
        public List<Employee> Employees { get; set; } = new List<Employee>();   
    }
}