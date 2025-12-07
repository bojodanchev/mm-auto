import Link from "next/link";
import { Fuel, Gauge, Calendar, Zap } from "lucide-react";

interface Car {
  id: string;
  brand: string;
  model: string;
  year: number;
  price_bgn: number;
  price_eur: number;
  fuel: string;
  transmission: string;
  mileage_km: number;
  body_type: string;
  power_hp: number;
  color: string;
  images: string[];
}

interface CarCardProps {
  car: Car;
  featured?: boolean;
}

export default function CarCard({ car, featured = false }: CarCardProps) {
  const fuelIcon = () => {
    switch (car.fuel) {
      case "Electric":
        return <Zap className="w-4 h-4" />;
      default:
        return <Fuel className="w-4 h-4" />;
    }
  };

  const fuelLabel = () => {
    switch (car.fuel) {
      case "Diesel":
        return "Дизел";
      case "Petrol":
        return "Бензин";
      case "Electric":
        return "Електро";
      case "Hybrid":
        return "Хибрид";
      default:
        return car.fuel;
    }
  };

  return (
    <Link href={`/inventory/${car.id}`}>
      <article
        className={`group relative rounded-2xl overflow-hidden glass card-hover ${
          featured ? "h-[420px]" : "h-[380px]"
        }`}
      >
        {/* Image */}
        <div className="relative h-[55%] overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
          {/* Placeholder gradient - replace with actual images */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] to-[#16213e] flex items-center justify-center"
          >
            <div className="text-6xl opacity-20">{car.brand.charAt(0)}</div>
          </div>

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent opacity-60" />

          {/* Blue glow on hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-[#00a8ff] to-transparent blur-sm" />
          </div>

          {/* Body type badge */}
          <div className="absolute top-4 right-4 px-3 py-1 rounded-full glass text-xs text-gray-300">
            {car.body_type}
          </div>
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col h-[45%]">
          {/* Brand & Model */}
          <div className="mb-3">
            <p className="text-[#00a8ff] text-sm font-medium mb-1">{car.brand}</p>
            <h3 className="text-lg font-semibold text-white font-[family-name:var(--font-urbanist)] line-clamp-1 group-hover:text-[#00a8ff] transition-colors">
              {car.model}
            </h3>
          </div>

          {/* Specs */}
          <div className="flex flex-wrap gap-3 mb-4 text-sm text-gray-400">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-gray-500" />
              <span>{car.year}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Gauge className="w-4 h-4 text-gray-500" />
              <span>{(car.mileage_km / 1000).toFixed(0)}k км</span>
            </div>
            <div className="flex items-center gap-1.5">
              {fuelIcon()}
              <span>{fuelLabel()}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-gray-500" />
              <span>{car.power_hp} к.с.</span>
            </div>
          </div>

          {/* Price */}
          <div className="mt-auto flex items-end justify-between">
            <div>
              <p className="text-2xl font-bold text-white font-[family-name:var(--font-urbanist)]">
                {car.price_bgn.toLocaleString("bg-BG")} лв.
              </p>
              <p className="text-sm text-gray-500">
                ~{car.price_eur.toLocaleString("bg-BG")} €
              </p>
            </div>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00a8ff] to-[#0066ff] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-2 group-hover:translate-x-0">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Border glow on hover */}
        <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-[#00a8ff]/30 transition-colors pointer-events-none" />
      </article>
    </Link>
  );
}
