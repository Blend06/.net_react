using System.ComponentModel.DataAnnotations;

namespace Backend.DTOs;

public class UpdateAuthorDto
{
    [Required]
    [StringLength(100)]
    public string Name { get; set; } = string.Empty;
    
    [Required]
    [StringLength(50)]
    public string Country { get; set; } = string.Empty;
    
    [Range(1000, 9999)]
    public int BirthYear { get; set; }
}