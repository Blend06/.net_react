using Microsoft.EntityFrameworkCore;
using Backend.Data;
using Backend.Models;

namespace Backend.Repositories;

public class AuthorRepository : IAuthorRepository
{
    private readonly AppDbContext _context;

    public AuthorRepository(AppDbContext context)
    {
        _context = context;
    }

    public async Task<IEnumerable<Author>> GetAllAsync()
    {
        return await _context.Authors.ToListAsync();
    }

    public async Task<Author?> GetByIdAsync(int id)
    {
        return await _context.Authors.FindAsync(id);
    }

    public async Task<Author> CreateAsync(Author author)
    {
        _context.Authors.Add(author);
        await _context.SaveChangesAsync();
        return author;
    }

    public async Task<Author> UpdateAsync(Author author)
    {
        _context.Entry(author).State = EntityState.Modified;
        await _context.SaveChangesAsync();
        return author;
    }

    public async Task<bool> DeleteAsync(int id)
    {
        var author = await _context.Authors.FindAsync(id);
        if (author == null)
        {
            return false;
        }

        _context.Authors.Remove(author);
        await _context.SaveChangesAsync();
        return true;
    }

    public async Task<bool> ExistsAsync(int id)
    {
        return await _context.Authors.AnyAsync(e => e.Id == id);
    }
}
