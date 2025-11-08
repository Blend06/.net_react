using AutoMapper;
using Backend.DTOs;
using Backend.Models;
using Backend.Repositories;
using Backend.Exceptions;

namespace Backend.Services;

public class BookService : IBookService
{
    private readonly IBookRepository _bookRepository;
    private readonly IMapper _mapper;

    public BookService(IBookRepository bookRepository, IMapper mapper)
    {
        _bookRepository = bookRepository;
        _mapper = mapper;
    }

    public async Task<IEnumerable<BookDto>> GetAllBooksAsync()
    {
        var books = await _bookRepository.GetAllAsync();
        return _mapper.Map<IEnumerable<BookDto>>(books);
    }

    public async Task<BookDto?> GetBookByIdAsync(int id)
    {
        var book = await _bookRepository.GetByIdAsync(id);
        if (book == null)
        {
            throw new NotFoundException($"Book with ID {id} not found.");
        }
        return _mapper.Map<BookDto>(book);
    }

    public async Task<BookDto> CreateBookAsync(CreateBookDto createBookDto)
    {
        var book = _mapper.Map<Book>(createBookDto);
        var createdBook = await _bookRepository.CreateAsync(book);
        return _mapper.Map<BookDto>(createdBook);
    }

    public async Task<BookDto?> UpdateBookAsync(int id, UpdateBookDto updateBookDto)
    {
        var existingBook = await _bookRepository.GetByIdAsync(id);
        if (existingBook == null)
        {
            throw new NotFoundException($"Book with ID {id} not found.");
        }

        _mapper.Map(updateBookDto, existingBook);
        var updatedBook = await _bookRepository.UpdateAsync(existingBook);
        return _mapper.Map<BookDto>(updatedBook);
    }

    public async Task<bool> DeleteBookAsync(int id)
    {
        var exists = await _bookRepository.ExistsAsync(id);
        if (!exists)
        {
            throw new NotFoundException($"Book with ID {id} not found.");
        }
        return await _bookRepository.DeleteAsync(id);
    }
}
