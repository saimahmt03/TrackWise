using System;
using System.Collections.Generic;
using TrackWise.API.Models;

namespace TrackWise.API.DTOs.Result.DepartmentResult
{
    public class GetAllDepartment
    {
        public List<Department> Departments { get; set; } = new List<Department>();
    }
}