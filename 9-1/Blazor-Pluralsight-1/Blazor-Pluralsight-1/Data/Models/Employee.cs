using System.ComponentModel.DataAnnotations;

namespace Blazor_Pluralsight_1.Data.Models;

public class Employee
{
    public int id { get; set; }

    [Required]
    [StringLength(50)]
    public string? FirstName { get; set; }

    [Required]
    [StringLength(50)]
    public string? LastName { get; set; }

    public bool IsDeveloper { get; set; }

    [Required]
    public int? DepartmentId { get; set; }
    public Department? Department { get; set; }

    [Timestamp]
    public byte[]? Timestamp { get; set; }
}
