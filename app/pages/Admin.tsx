import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AdminContacts } from '@/app/components/AdminContacts';
import { ArrowLeft, LogOut } from 'lucide-react';

export default function Admin() {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if user is authenticated
    const token = sessionStorage.getItem('admin_authenticated');
    
    if (!token) {
      // Redirect to login if not authenticated
      navigate('/login');
    } else {
      setIsAuthenticated(true);
    }
  }, [navigate]);

  const handleLogout = () => {
    sessionStorage.removeItem('admin_authenticated');
    navigate('/login');
  };

  if (!isAuthenticated) {
    return null; // or a loading spinner
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 transition-colors"
          >
            <ArrowLeft size={20} />
            Retour au site
          </Link>
          
          <button
            onClick={handleLogout}
            className="inline-flex items-center gap-2 text-gray-600 hover:text-red-600 transition-colors bg-gray-100 hover:bg-red-50 px-4 py-2 rounded-lg"
          >
            <LogOut size={20} />
            Déconnexion
          </button>
        </div>
      </div>
      <AdminContacts />
    </div>
  );
}