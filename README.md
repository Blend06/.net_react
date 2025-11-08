# .NET React Fullstack Project

## Database Information

**Database Name:** books.db
**Database Type:** SQLite
**Location:** Backend/books.db

## Commands Used to Build This Project

### Backend Setup

```cmd
# Create .NET Web API project
dotnet new webapi -n Backend
cd Backend

# Install packages
dotnet add package Microsoft.EntityFrameworkCore.Sqlite
dotnet add package Microsoft.EntityFrameworkCore.Design
dotnet add package AutoMapper.Extensions.Microsoft.DependencyInjection

# Install EF Core CLI tools
dotnet tool install --global dotnet-ef

# Create and apply migration
dotnet ef migrations add InitialCreate
dotnet ef database update

# Run the project
dotnet run
```

### Frontend Setup

```cmd
cd ..
npm create vite@latest Frontend -- --template react
cd Frontend

# Install dependencies
npm install axios react-router-dom react-icons
npm install -D tailwindcss@3 postcss autoprefixer

# Run development server
npm run dev
```

## Architecture

**Pattern:** N-Layer Architecture with Repository and Service patterns

**Backend Layers:**
- Controllers - API endpoints (HTTP requests/responses)
- Services - Business logic and validation
- Repositories - Data access (database operations)
- DTOs - Data transfer objects (API input/output)
- Models - Database entities
- Middleware - Global exception handling
- Mappings - AutoMapper profiles

## Project Structure

```
.net_react/
├── Backend/
│   ├── Controllers/        # API endpoints
│   ├── Services/          # Business logic
│   ├── Repositories/      # Data access
│   ├── DTOs/             # Data transfer objects
│   ├── Models/           # Database entities
│   ├── Data/             # DbContext
│   ├── Middleware/       # Exception handling
│   ├── Exceptions/       # Custom exceptions
│   ├── Common/           # Shared utilities
│   ├── Mappings/         # AutoMapper profiles
│   ├── Migrations/       # EF Core migrations
│   ├── Program.cs
│   └── books.db
└── Frontend/
    ├── src/
    │   ├── components/   # React components
    │   ├── pages/        # Page components
    │   ├── services/     # API calls
    │   └── router.jsx    # Routes
    └── package.json
```

## Backend Components

**Controllers** - Handle HTTP requests, call services, return responses
**Services** - Business logic, validation, orchestration
**Repositories** - Database queries using Entity Framework
**DTOs** - CreateBookDto, UpdateBookDto, BookDto (with validation)
**Middleware** - ExceptionMiddleware (catches all errors, returns consistent responses)
**Exceptions** - NotFoundException (404), BadRequestException (400)
**Common** - ApiResponse wrapper for consistent API responses
**Mappings** - AutoMapper profiles (Book ↔ DTOs)

## API Endpoints

Base URL: http://localhost:5214/api/books

- GET /api/books - Get all books
- GET /api/books/{id} - Get book by ID
- POST /api/books - Create new book
- PUT /api/books/{id} - Update book
- DELETE /api/books/{id} - Delete book

Swagger UI: http://localhost:5214/swagger

## Database Schema

### Books Table

| Column | Type    | Description          |
|--------|---------|----------------------|
| Id     | INTEGER | Primary Key (Auto)   |
| Title  | TEXT    | Book title           |
| Author | TEXT    | Book author          |
| Year   | INTEGER | Publication year     |