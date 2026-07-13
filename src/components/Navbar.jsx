import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar({ variant = 'solid' }) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isTransparent = variant === 'transparent';

  // Clases CSS dinámicas según la variante
  const navbarClasses = isTransparent
    ? 'absolute top-0 left-0 w-full z-50 bg-transparent'
    : 'sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100';

  const textClasses = isTransparent
    ? 'text-white hover:text-[#01ABEC]'
    : 'text-gray-800 hover:text-[#01ABEC]';

  const toggleMenu = () => setIsOpen(!isOpen);

  // Helper para verificar si la ruta está activa
  const isActive = (path) => location.pathname === path;

  return (
    <>
      <nav className={`${navbarClasses} transition-all duration-300`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center py-4">
          
          {/* LOGO */}
          <Link to="/" className="flex items-center transition-transform hover:scale-102">
            <img
              src="/imagenes/Logo_blanco.png"
              alt="Logo 24/7 Asistencias"
              className="w-20 md:w-28 h-auto object-contain"
            />
          </Link>

          {/* MENÚ DESKTOP */}
          <div className="hidden md:flex items-center gap-8 font-semibold text-lg">
            <Link
              to="/"
              className={`${textClasses} transition-colors duration-300 ${
                isActive('/') ? 'text-[#01ABEC]' : ''
              }`}
            >
              Inicio
            </Link>
            <Link
              to="/servicios"
              className={`${textClasses} transition-colors duration-300 ${
                isActive('/servicios') ? 'text-[#01ABEC]' : ''
              }`}
            >
              Servicios
            </Link>
            <a
              href="#contacto"
              className={`${textClasses} transition-colors duration-300`}
              onClick={() => {
                // Si no estamos en la página de inicio, redirigir a / primero y luego hacer scroll
                if (location.pathname !== '/') {
                  // Dejamos que el navegador cambie de página, y podemos usar el hash
                }
              }}
            >
              Contacto
            </a>
            <a
              href="https://wa.me/51988888141"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#01ABEC] text-white px-5 py-2.5 rounded-xl font-bold hover:bg-[#009bd6] transition-all hover:scale-105 duration-300 shadow-md"
            >
              Cotizar Servicio
            </a>
          </div>

          {/* BOTÓN MENÚ MÓVIL */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="focus:outline-none p-1 rounded-lg hover:bg-black/5"
              aria-label="Abrir menú"
            >
              <svg
                className={`w-8 h-8 ${isTransparent ? 'text-white' : 'text-gray-800'}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* MENÚ MÓVIL - OPCIÓN 1 (PANEL LATERAL DESLIZABLE / SLIDE-IN DRAWER) */}
      {/* CAPA DE FONDO OSCURO (BACKDROP) */}
      <div 
        className={`fixed inset-0 bg-black/50 backdrop-blur-xs z-40 md:hidden transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleMenu}
      />

      {/* PANEL LATERAL (DRAWER) - SIEMPRE OSCURO/AZUL TRASLÚCIDO */}
      <div className={`fixed top-0 right-0 h-full w-[80%] max-w-xs z-50 md:hidden shadow-2xl border-l border-white/10 bg-slate-950/95 text-white backdrop-blur-xl transition-transform duration-300 transform ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        {/* BOTÓN DE CIERRE EN EL PANEL */}
        <div className="flex justify-end p-6">
          <button
            onClick={toggleMenu}
            className="focus:outline-none p-1 rounded-lg hover:bg-white/10"
            aria-label="Cerrar menú"
          >
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* ENLACES DE NAVEGACIÓN */}
        <div className="flex flex-col px-8 py-4 gap-5 font-semibold text-lg">
          <Link
            to="/"
            onClick={toggleMenu}
            className={`py-2.5 px-4 rounded-xl transition-all duration-200 ${
              isActive('/') 
                ? 'bg-[#01ABEC]/15 text-[#01ABEC]' 
                : 'hover:bg-white/5'
            }`}
          >
            Inicio
          </Link>
          <Link
            to="/servicios"
            onClick={toggleMenu}
            className={`py-2.5 px-4 rounded-xl transition-all duration-200 ${
              isActive('/servicios') 
                ? 'bg-[#01ABEC]/15 text-[#01ABEC]' 
                : 'hover:bg-white/5'
            }`}
          >
            Servicios
          </Link>
          <a
            href="#contacto"
            onClick={toggleMenu}
            className="py-2.5 px-4 rounded-xl transition-all duration-200 hover:bg-white/5"
          >
            Contacto
          </a>
          <a
            href="https://wa.me/51988888141"
            target="_blank"
            rel="noopener noreferrer"
            onClick={toggleMenu}
            className="bg-[#01ABEC] text-white text-center py-3 rounded-xl font-bold hover:bg-[#009bd6] transition-transform hover:scale-102 mt-4 shadow-lg"
          >
            Cotizar Servicio
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
