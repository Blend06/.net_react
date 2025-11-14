using AutoMapper;
using Backend.DTOs;
using Backend.Models;
using Backend.Repositories;
using Backend.Exceptions;

namespace Backend.Services;

public class AuthorService : IAuthorService
{
    private readonly IAuthorRepository _authorRepository;
    private readonly IMapper _mapper;

    public AuthorService(IAuthorRepository authorRepository, IMapper mapper)
    {
        _authorRepository = authorRepository;
        _mapper = mapper;
    }

    public async Task<IEnumerable<AuthorDto>> GetAllAuthorsAsync()
    {
        var authors = await _authorRepository.GetAllAsync();
        return _mapper.Map<IEnumerable<AuthorDto>>(authors);
    }

    public async Task<AuthorDto?> GetAuthorByIdAsync(int id)
    {
        var author = await _authorRepository.GetByIdAsync(id);
        if (author == null)
        {
            throw new NotFoundException($"Author with ID {id} not found.");
        }
        return _mapper.Map<AuthorDto>(author);
    }

    public async Task<AuthorDto> CreateAuthorAsync(CreateAuthorDto createAuthorDto)
    {
        var author = _mapper.Map<Author>(createAuthorDto);
        var createdAuthor = await _authorRepository.CreateAsync(author);
        return _mapper.Map<AuthorDto>(createdAuthor);
    }

    public async Task<AuthorDto?> UpdateAuthorAsync(int id, UpdateAuthorDto updateAuthorDto)
    {
        var existingAuthor = await _authorRepository.GetByIdAsync(id);
        if (existingAuthor == null)
        {
            throw new NotFoundException($"Author with ID {id} not found.");
        }

        _mapper.Map(updateAuthorDto, existingAuthor);
        var updatedAuthor = await _authorRepository.UpdateAsync(existingAuthor);
        return _mapper.Map<AuthorDto>(updatedAuthor);
    }

    public async Task<bool> DeleteAuthorAsync(int id)
    {
        var exists = await _authorRepository.ExistsAsync(id);
        if (!exists)
        {
            throw new NotFoundException($"Author with ID {id} not found.");
        }
        return await _authorRepository.DeleteAsync(id);
    }
}