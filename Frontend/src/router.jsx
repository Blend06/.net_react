import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import BookDashboard from './components/Books/BookDashboard';

function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/books" element={<BookDashboard />} />
        </Routes>
    );
}

export default AppRouter;
