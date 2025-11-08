using System.ComponentModel.DataAnnotations;

namespace Backend.DTOs;

public class CreateBookDto
{
    [Required]
    [StringLength(200)]
    public string Title { get; set; } = string.Empty;
    
    [Required]
    [StringLength(100)]
    public string Author { get; set; } = string.Empty;
    
    [Range(1000, 9999)]
    public int Year { get; set; }
}
