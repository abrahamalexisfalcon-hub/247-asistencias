function Hero(){
    return(
<section className="relative min-h-[75vh] md:min-h-screen flex flex-col pt-32 md:pt-0 pb-10"> 

    {/* CONTENEDOR DE TEXTO */}
    <div className="flex flex-col gap-5 md:gap-15 mt-auto mb-auto relative text-white z-10 px-8 md:px-12 md:text-center md:items-center">
        <h1 className="font-bold text-3xl md:text-5xl md:mx-auto tracking-tight leading-tight">
            Especialistas en solucionar tus problemas <span className="text-[#01ABEC]">técnicos.</span>
        </h1>  
        <p className="text-lg font-semibold opacity-90 md:text-2xl">
            Técnicos a domicilio cuando más los necesitas. Garantía y puntualidad.
        </p>
        <div className="flex justify-center w-full mt-2">
            <a 
              className="flex text-xl md:text-2xl font-bold text-center w-full max-w-50 md:max-w-[320px] justify-center bg-[#01ABEC] py-3 px-4 rounded-xl transition-all duration-300 hover:scale-105" 
              href="https://wa.me/51988888141"
              target="_blank"
              rel="noopener noreferrer"
            >
                Cotizar Servicio
            </a>
        </div>
    </div>

    {/* IMAGEN DE FONDO */}
    <img className="absolute w-full h-full object-cover object-center inset-0 z-0" src="/imagenes/Hero.png" alt="Imagen del Hero"/>
</section>
    );
}

export default Hero;