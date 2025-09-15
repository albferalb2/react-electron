import { useState } from 'react';

function App() {
  const [people] = useState([
    'Ana García - Desarrolladora',
    'Carlos Rodríguez - Diseñador',
    'María López - Project Manager',
    'Juan Martínez - QA Engineer',
    'Laura Fernández - Backend Developer'
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          🚀 Mi Equipo
        </h1>
        
        <div className="bg-white rounded-2xl shadow-xl p-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-6">
            Miembros del Equipo ({people.length})
          </h2>
          
          <ul className="space-y-3">
            {people.map((person, index) => (
              <li key={index} className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                <span className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center">
                  {index + 1}
                </span>
                <span className="text-gray-700">{person}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-center mt-8 text-gray-600">
          <p>Electron + React + Tailwind CSS</p>
        </div>
      </div>
    </div>
  );
}

export default App;