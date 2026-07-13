function BenefitsSection() {
  return (
    <section className="relative min-h-[60vh] md:min-h-[45vh] md:py-28 flex flex-col justify-center items-center py-16 px-8">
      <img
        src="/imagenes/BeneficiosFondo.png"
        alt="Fondo de beneficios"
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
      />
      <div className="absolute inset-0 bg-black/70 z-10"></div>

      <div className="relative z-20 flex flex-col gap-12 md:flex-row md:justify-center md:items-start md:gap-24 md:w-full md:max-w-6xl md:mx-auto text-white text-center">
        <div className="md:max-w-[240px] flex flex-col items-center gap-4">
          <div className="w-20 h-20 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-sm">
            <svg
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10 text-white"
            >
              <circle cx="32" cy="32" r="28" stroke="white" strokeWidth="4" />
              <path d="M32 18V34L42 40" stroke="white" strokeWidth="4" strokeLinecap="round" />
            </svg>
          </div>
          <p className="font-semibold text-lg md:text-xl text-white text-center leading-snug">
            Respetamos los tiempos establecidos
          </p>
        </div>

        <div className="md:max-w-[240px] flex flex-col items-center gap-4">
          <div className="w-20 h-20 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-sm">
            <svg
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10 text-white"
            >
              <path
                d="M32 6L12 16V32C12 45.255 20.747 56.527 32 58C43.253 56.527 52 45.255 52 32V16L32 6Z"
                stroke="white"
                strokeWidth="4"
                strokeLinejoin="round"
              />
              <path d="M24 32L30 38L42 26" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <p className="font-semibold text-lg md:text-xl text-white text-center leading-snug">Garantía total</p>
        </div>

        <div className="md:max-w-[240px] flex flex-col items-center gap-4">
          <div className="w-20 h-20 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-sm">
            <div className="flex items-center justify-center gap-1">
              <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white">
                <path d="M12 2L14.94 8.93L22.36 9.64L16.18 14.26L17.82 21.54L12 17.98L6.18 21.54L7.82 14.26L1.64 9.64L9.06 8.93L12 2Z" />
              </svg>
              <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white">
                <path d="M12 2L14.94 8.93L22.36 9.64L16.18 14.26L17.82 21.54L12 17.98L6.18 21.54L7.82 14.26L1.64 9.64L9.06 8.93L12 2Z" />
              </svg>
              <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white">
                <path d="M12 2L14.94 8.93L22.36 9.64L16.18 14.26L17.82 21.54L12 17.98L6.18 21.54L7.82 14.26L1.64 9.64L9.06 8.93L12 2Z" />
              </svg>
            </div>
          </div>
          <p className="font-semibold text-lg md:text-xl text-white text-center leading-snug">Técnicos calificados</p>
        </div>
      </div>
    </section>
  );
}

export default BenefitsSection;
