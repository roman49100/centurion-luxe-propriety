import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate, useLocation, Link } from 'react-router';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    // If we're on admin page, navigate to home first
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setIsMobileMenuOpen(false);
      }
    }
  };

  const navItems = [
    { label: 'Notre Histoire', id: 'notre-histoire' },
    { label: 'Comment ça marche', id: 'how-it-works' },
    { label: 'Services', id: 'services' },
    { label: 'Gestion Quotidienne', id: 'daily-management' },
    { label: 'Tarifs', id: 'pricing' },
    { label: 'Pourquoi Nous', id: 'why-us' },
    { label: 'Équipe', id: 'team' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <button
          onClick={() => scrollToSection('hero')}
          className={`text-2xl transition-colors mr-auto ${
            isScrolled ? 'text-gray-900' : 'text-white'
          }`}
        >
          <span className="font-semibold">Centurion</span>
          <span className="font-light"> Luxe Propriety</span>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 ml-auto">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`transition-colors hover:text-emerald-600 text-sm ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
          
          {/* Divider */}
          <div className={`h-6 w-px ${isScrolled ? 'bg-gray-300' : 'bg-white/30'}`}></div>
          
          <Link
            to="/exemples-biens"
            className={`transition-colors hover:text-emerald-600 text-sm ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}
          >
            Exemples
          </Link>
          <Link
            to="/avis-clients"
            className={`transition-colors hover:text-emerald-600 text-sm ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}
          >
            Avis
          </Link>
          <Link
            to="/faq"
            className={`transition-colors hover:text-emerald-600 text-sm ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}
          >
            FAQ
          </Link>
          
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-emerald-500 text-white px-6 py-2.5 rounded-full hover:bg-emerald-600 transition-colors text-sm"
          >
            Contact
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`md:hidden ${isScrolled ? 'text-gray-900' : 'text-white'}`}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white shadow-lg"
          >
            <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-gray-700 hover:text-emerald-600 transition-colors py-2"
                >
                  {item.label}
                </button>
              ))}
              
              <div className="border-t border-gray-200 my-2"></div>
              
              <Link
                to="/exemples-biens"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-left text-gray-700 hover:text-emerald-600 transition-colors py-2"
              >
                Exemples de Biens
              </Link>
              <Link
                to="/avis-clients"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-left text-gray-700 hover:text-emerald-600 transition-colors py-2"
              >
                Avis Clients
              </Link>
              <Link
                to="/faq"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-left text-gray-700 hover:text-emerald-600 transition-colors py-2"
              >
                FAQ
              </Link>
              
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-emerald-500 text-white px-6 py-2.5 rounded-full hover:bg-emerald-600 transition-colors text-center mt-2"
              >
                Commencer
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}