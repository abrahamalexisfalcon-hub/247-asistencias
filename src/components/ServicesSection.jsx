import { Link } from "react-router-dom";
import ServiceCard from "./ServiceCard";
import { servicesData } from "../data/servicesData";

function ServicesSection() {
  return (
    <section className="bg-slate-50 py-16 px-6 md:px-12">
      <div className="mx-auto max-w-7xl text-center">
        <p className="text-3xl font-semibold uppercase tracking-[0.32em] text-[#01ABEC]">
          NUESTROS SERVICIOS
        </p>
      </div>

      <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-3">
        {servicesData.slice(0, 3).map((service) => (
          <ServiceCard
            key={service.id}
            id={service.id}
            title={service.title}
            imgUrl={service.imgUrl}
          />
        ))}
      </div>

      <div className="flex justify-center w-full mt-12">
        <Link
          to="/servicios"
          className="rounded-xl border-2 border-[#01ABEC] bg-[#01ABEC] px-6 py-3 text-lg font-bold text-white transition-all duration-300 hover:scale-105 shadow-md"
        >
          Ver más servicios
        </Link>
      </div>
    </section>
  );
}

export default ServicesSection;
