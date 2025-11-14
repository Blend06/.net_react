import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import BookDashboard from './components/Books/BookDashboard';
import AuthorDashboard from './components/Authors/AuthorDashboard';

function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/books" element={<BookDashboard />} />
            <Route path="/authors" element={<AuthorDashboard />} />
        </Routes>
    );
}

export default AppRouter;
