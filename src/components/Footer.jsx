function Footer() {
  return (
    /* EL PADRE: Mantiene el fondo infinito de extremo a extremo */
    <footer className="bg-[#E5ECF4] w-full py-12 px-6 md:py-16 md:px-12">
      
      {/* EL HIJO: Centrado y alineado en 3 columnas para pantallas grandes, 1 columna en celular */}
      <div className="flex flex-col items-center text-center gap-10 md:grid md:grid-cols-3 md:items-start md:text-center md:gap-16 md:max-w-7xl md:mx-auto">
        
        {/* COLUMNA 1: LOGO Y REDES */}
        <div className="flex flex-col items-center gap-4 justify-center w-full">
          <img
            className="w-32 md:w-44 h-auto object-contain"
            src="/imagenes/Logo_negro.svg"
            alt="Logo 24/7 Asistencias"
          />
          <div className="flex gap-5 justify-center">
            <img src="/icons/Facebook.png" alt="Facebook" className="w-6 h-6 md:w-7 md:h-7 object-contain hover:scale-110 transition-transform" />
            <img src="/icons/Tiktok.png" alt="TikTok" className="w-6 h-6 md:w-7 md:h-7 object-contain hover:scale-110 transition-transform" />
            <img src="/icons/Instagram.png" alt="Instagram" className="w-6 h-6 md:w-7 md:h-7 object-contain hover:scale-110 transition-transform" />
            <img src="/icons/Whatsapp.png" alt="WhatsApp" className="w-6 h-6 md:w-7 md:h-7 object-contain hover:scale-110 transition-transform" />
          </div>
        </div>

        {/* COLUMNA 2: COBERTURA */}
        <div className="md:mt-8 flex flex-col gap-3 items-center w-full">
          <h3 className="font-bold text-lg md:text-xl text-[#01ABEC]">Zonas de cobertura</h3>
          <p className="text-gray-800 font-medium text-sm md:text-base max-w-sm leading-relaxed">
            Atendemos emergencias y proyectos en Lima Metropolitana (Zonas Centro, Norte, Sur y Este).
          </p>
        </div>

        {/* COLUMNA 3: CONTACTO */}
        <div className="md:mt-7 flex flex-col gap-3 items-center w-full">
          <h3 className="font-bold text-lg md:text-xl text-[#01ABEC]">Contacto</h3>
          <div className="flex flex-col gap-3 w-full items-center">
            <div className="flex items-center gap-2 font-semibold text-gray-800 text-sm md:text-base justify-center">
              <img src="/icons/Whatsapp.png" alt="WhatsApp" className="w-5 h-5 object-contain" />
              +51 988 888 141
            </div>
            <div className="flex items-center gap-2 font-semibold text-gray-800 text-sm md:text-base justify-center">
              <img src="/icons/Whatsapp.png" alt="WhatsApp" className="w-5 h-5 object-contain" />
              +51 914 279 170
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="md:col-span-3 border-t border-gray-300/50 pt-8 w-full text-center text-xs text-gray-500 mt-4">
          © 2026 24/7 Asistencias Generales. Todos los derechos reservados.
        </div>

      </div>
    </footer>
  );
}

export default Footer;