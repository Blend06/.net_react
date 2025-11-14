using Backend.Models;

namespace Backend.Repositories;

public interface IAuthorRepository
{
    Task<IEnumerable<Author>> GetAllAsync();
    Task<Author?> GetByIdAsync(int id);
    Task<Author> CreateAsync(Author author);
    Task<Author> UpdateAsync(Author author);
    Task<bool> DeleteAsync(int id);
    Task<bool> ExistsAsync(int id);
}