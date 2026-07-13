import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { servicesData } from '../data/servicesData';

function ServiceDetailPage() {
  const { serviceId } = useParams();

  // Scroll al inicio al cargar la página
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceId]);

  // Buscar el servicio correspondiente
  const service = servicesData.find((s) => s.id === serviceId);

  // Si el servicio no existe, mostrar un 404 premium
  if (!service) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col">
        <Navbar variant="solid" />
        <main className="flex-grow flex flex-col items-center justify-center text-center px-6 py-24">
          <div className="max-w-md bg-white p-10 rounded-3xl shadow-xl border border-gray-100">
            <div className="w-20 h-20 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Servicio no encontrado</h1>
            <p className="mt-3 text-gray-600">Lo sentimos, el servicio que estás buscando no se encuentra disponible o ha sido retirado.</p>
            <Link
              to="/"
              className="mt-8 inline-block w-full bg-[#01ABEC] text-white py-3 px-6 rounded-xl font-bold hover:bg-[#009bd6] transition-all hover:scale-103 duration-300 shadow-md"
            >
              Volver al Inicio
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Enlace dinámico de WhatsApp con mensaje personalizado
  const whatsappUrl = `https://wa.me/51988888141?text=Hola,%20deseo%20cotizar%20el%20servicio%20de%20${encodeURIComponent(service.title)}`;

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* NAVBAR */}
      <Navbar variant="solid" />

      {/* SECCIÓN CABECERA */}
      <header className="bg-gradient-to-r from-[#E5ECF4] via-white to-[#F2F7FF] border-b border-gray-150 pt-10 pb-12 px-6 md:pt-14 md:pb-16 md:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumb simple */}
          <div className="flex items-center gap-2 text-sm text-gray-500 font-semibold mb-4">
            <Link to="/" className="hover:text-[#01ABEC] transition-colors">Inicio</Link>
            <span>/</span>
            <Link to="/servicios" className="hover:text-[#01ABEC] transition-colors">Servicios</Link>
            <span>/</span>
            <span className="text-gray-800">{service.title}</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
            Especialistas en <span className="text-[#01ABEC]">{service.title}</span>
          </h1>
          <p className="mt-5 text-lg md:text-xl text-slate-700 max-w-4xl leading-relaxed">
            {service.description}
          </p>
        </div>
      </header>

      {/* CONTENIDO PRINCIPAL */}
      <main className="flex-grow max-w-6xl mx-auto py-12 px-6 md:py-16 md:px-12 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* COLUMNA IZQUIERDA: IMAGEN */}
          <div className="w-full overflow-hidden rounded-3xl shadow-lg border border-gray-200/50 hover:shadow-xl transition-shadow duration-300">
            <img 
              className="object-cover w-full h-80 md:h-[400px] object-center transition-transform duration-500 hover:scale-102"
              src={service.imgUrl} 
              alt={`Imagen de nuestro servicio de ${service.title}`} 
            />
          </div>

          {/* COLUMNA DERECHA: SUB-SERVICIOS */}
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight border-b border-gray-200 pb-3">
              ¿Qué incluye este servicio?
            </h2>
            <ul className="flex flex-col gap-4">
              {service.items.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#01ABEC]/10 flex items-center justify-center text-[#01ABEC] mt-0.5">
                    {/* SVG Check icon */}
                    <svg className="w-4 h-4 stroke-[3]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-base md:text-lg text-slate-700 font-medium">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* BOTÓN LLAMADA A LA ACCIÓN GIGANTE */}
        <div className="mt-16 md:mt-24 text-center">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#01ABEC] text-white py-4.5 px-8 md:px-12 rounded-2xl text-xl font-bold shadow-lg transition-all duration-300 hover:bg-[#009bd6] hover:scale-105 hover:shadow-xl active:scale-98"
          >
            {/* WhatsApp Icon */}
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7" xmlns="http://www.w3.org/2000/svg">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.666.988 3.311 1.5 5.353 1.51 5.494.004 9.963-4.463 9.967-9.962.003-2.664-1.03-5.167-2.91-7.051C17.18 1.766 14.685 1.033 12.016 1.033c-5.5.002-9.97 4.47-9.974 9.969-.002 2.148.563 3.86 1.629 5.56l-1.072 3.914 4.048-1.062z" />
            </svg>
            Cotizar Servicio
          </a>
        </div>
      </main>

      {/* FOOTER */}
      <div id="contacto">
        <Footer />
      </div>
    </div>
  );
}

export default ServiceDetailPage;
