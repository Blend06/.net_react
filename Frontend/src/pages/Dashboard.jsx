import { useNavigate } from 'react-router-dom';
import { FaBook, FaPersonBooth } from 'react-icons/fa';

function Dashboard() {
  const navigate = useNavigate();

  const cards = [
    { 
      title: 'Books', 
      description: 'Manage books', 
      path: '/books', 
      icon: FaBook,
      color: 'text-blue-500'
    },
    { 
      title: 'Authors', 
      description: 'Manage authors', 
      path: '/authors', 
      icon: FaPersonBooth,
      color: 'text-blue-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Admin Dashboard
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card) => {
            const IconComponent = card.icon;
            return (
              <div
                key={card.path}
                onClick={() => navigate(card.path)}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer p-8 text-center hover:scale-105"
              >
                <div className={`flex justify-center mb-4 ${card.color}`}>
                  <IconComponent size={60} />
                </div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                  {card.title}
                </h2>
                <p className="text-gray-600">{card.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
