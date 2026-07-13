import { Link } from "react-router-dom";

function ServiceCard({ title, imgUrl, id }) {
  return (
    <div className="flex flex-col rounded-2xl overflow-hidden bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl w-full">
      <div className="w-full h-48 overflow-hidden">
        <img className="w-full h-full object-cover object-center" src={imgUrl} alt={title} />
      </div>
      <div className="flex justify-between items-center px-5 py-4 bg-[#F2F7FF]">
        <p className="font-semibold text-gray-800">{title}</p>
        <Link className="font-bold text-[#01ABEC] hover:text-[#009bd6] transition-colors" to={`/servicios/${id}`}>
          Ver Servicio
        </Link>
      </div>
    </div>
  );
}

export default ServiceCard; 