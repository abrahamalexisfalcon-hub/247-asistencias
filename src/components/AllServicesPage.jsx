import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import ServiceCard from './ServiceCard';
import Footer from './Footer';
import { servicesData } from '../data/servicesData';

function AllServicesPage() {
  // Nos aseguramos de subir al inicio de la página al cargar el componente
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* NAVBAR SÓLIDO PARA ESTA PÁGINA */}
      <Navbar variant="solid" />

      {/* CONTENEDOR PRINCIPAL */}
      <main className="flex-grow pt-10 md:pt-14 pb-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb simple */}
          <div className="flex items-center gap-2 text-sm text-gray-500 font-semibold mb-8">
            <Link to="/" className="hover:text-[#01ABEC] transition-colors">Inicio</Link>
            <span>/</span>
            <span className="text-gray-800">Servicios</span>
          </div>

          {/* TÍTULO PRINCIPAL */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-950">
              Nuestros Servicios <span className="text-[#01ABEC]">Completos</span>
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Ofrecemos soluciones técnicas integrales con la máxima puntualidad y garantía para tu hogar o negocio.
            </p>
          </div>

          {/* COMBINACIÓN DE GRID Y FLEXBOX (Muestra 5 tarjetas alineadas: 3 arriba, 2 abajo centradas en PC) */}
          <div className="flex flex-wrap justify-center gap-8 px-6">
            {servicesData.map((service) => (
              <div
                key={service.id}
                className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-[380px] flex flex-col"
              >
                <ServiceCard
                  id={service.id}
                  title={service.title}
                  imgUrl={service.imgUrl}
                />
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <div id="contacto">
        <Footer />
      </div>
    </div>
  );
}

export default AllServicesPage;
