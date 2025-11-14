import { Link } from 'react-router-dom';

function DashboardLayout({ title, error, children }) {
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
          <Link
            to="/"
            className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors"
          >
            Back to Dashboard
          </Link>
        </div>

        {error && (
          <div className="bg-red-500 text-white p-4 rounded-lg mb-6">{error}</div>
        )}

        {children}
      </div>
    </div>
  );
}

export default DashboardLayout;
