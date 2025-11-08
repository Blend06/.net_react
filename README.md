# .NET React Fullstack Project

## Database Information

**Database Name:** books.db
**Database Type:** SQLite
**Location:** Backend/books.db

## Viewing the Database in GUI

You can use any of these tools to view the SQLite database:

1. **DB Browser for SQLite** (Recommended)
   - Download: https://sqlitebrowser.org/
   - Open the file: Backend/books.db

2. **VS Code Extension**
   - Install "SQLite Viewer" or "SQLite" extension
   - Right-click on books.db and select "Open Database"

3. **DBeaver** (Universal database tool)
   - Download: https://dbeaver.io/

## Commands Used to Build This Project

### Backend Setup

```cmd
# Create .NET Web API project
dotnet new webapi -n Backend

# Navigate to Backend folder
cd Backend

# Install Entity Framework Core packages
dotnet add package Microsoft.EntityFrameworkCore.Sqlite
dotnet add package Microsoft.EntityFrameworkCore.Design

# Install EF Core CLI tools globally
dotnet tool install --global dotnet-ef

# Create initial database migration
dotnet ef migrations add InitialCreate

# Apply migration and create database
dotnet ef database update

# Build the project
dotnet build

# Run the project
dotnet run
```

### Frontend Setup (Not yet created)

```cmd
# Go back to root directory
cd ..

# Create React app with Vite
npm create vite@latest Frontend -- --template react

# Navigate to Frontend folder
cd Frontend

# Install dependencies
npm install

# Run development server
npm run dev
```

## Project Structure

```
.net_react/
├── Backend/
│   ├── Controllers/
│   │   └── BooksController.cs
│   ├── Data/
│   │   └── AppDbContext.cs
│   ├── Models/
│   │   └── Book.cs
│   ├── Migrations/
│   ├── Properties/
│   ├── Program.cs
│   ├── Backend.csproj
│   ├── appsettings.json
│   └── books.db
└── Frontend/ (to be created)
```

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

## Useful EF Core Commands

```cmd
# Create a new migration
dotnet ef migrations add MigrationName

# Apply migrations to database
dotnet ef database update

# Remove last migration (if not applied)
dotnet ef migrations remove

# View migration SQL
dotnet ef migrations script

# Drop database
dotnet ef database drop
```

## Connection String

Located in Program.cs:
```
Data Source=books.db
```

This creates a SQLite database file named "books.db" in the Backend folder.
