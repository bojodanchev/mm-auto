import { notFound } from "next/navigation";
import Link from "next/link";
import inventory from "@/data/inventory.json";
import CarCard from "@/components/CarCard";
import {
  ArrowLeft,
  Calendar,
  Gauge,
  Fuel,
  Zap,
  Cog,
  Palette,
  Phone,
  Mail,
  MessageCircle,
} from "lucide-react";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return inventory.cars.map((car) => ({
    id: car.id,
  }));
}

export default async function CarDetailPage({ params }: PageProps) {
  const { id } = await params;
  const car = inventory.cars.find((c) => c.id === id);

  if (!car) {
    notFound();
  }

  const similarCars = inventory.cars
    .filter((c) => c.id !== car.id && (c.brand === car.brand || c.body_type === car.body_type))
    .slice(0, 3);

  const fuelLabel = () => {
    switch (car.fuel) {
      case "Diesel": return "Дизел";
      case "Petrol": return "Бензин";
      case "Electric": return "Електро";
      case "Hybrid": return "Хибрид";
      default: return car.fuel;
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] pt-24">
      {/* Back button */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        <Link
          href="/inventory"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Обратно към автомобилите
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden glass mb-4">
              <div className="w-full h-full bg-gradient-to-br from-[#1a1a2e] to-[#16213e] flex items-center justify-center">
                <span className="text-9xl opacity-20">{car.brand.charAt(0)}</span>
              </div>
            </div>
            {/* Thumbnail placeholder */}
            <div className="grid grid-cols-4 gap-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="aspect-square rounded-lg overflow-hidden glass cursor-pointer hover:border-[#00a8ff]/50 transition-colors"
                >
                  <div className="w-full h-full bg-gradient-to-br from-[#1a1a2e] to-[#16213e]" />
                </div>
              ))}
            </div>
          </div>

          {/* Details */}
          <div>
            {/* Brand & Model */}
            <div className="mb-6">
              <p className="text-[#00a8ff] text-sm font-medium mb-1">{car.brand}</p>
              <h1 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-urbanist)] text-white mb-2">
                {car.model}
              </h1>
              <p className="text-gray-400">{car.body_type} • {car.color}</p>
            </div>

            {/* Price */}
            <div className="glass rounded-2xl p-6 mb-6">
              <p className="text-4xl font-bold text-white font-[family-name:var(--font-urbanist)] mb-1">
                {car.price_bgn.toLocaleString("bg-BG")} лв.
              </p>
              <p className="text-gray-400">
                ~{car.price_eur.toLocaleString("bg-BG")} €
              </p>
            </div>

            {/* Key Specs */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              <div className="glass rounded-xl p-4">
                <Calendar className="w-5 h-5 text-[#00a8ff] mb-2" />
                <p className="text-white font-semibold">{car.year}</p>
                <p className="text-gray-500 text-sm">Година</p>
              </div>
              <div className="glass rounded-xl p-4">
                <Gauge className="w-5 h-5 text-[#00a8ff] mb-2" />
                <p className="text-white font-semibold">{car.mileage_km.toLocaleString()} км</p>
                <p className="text-gray-500 text-sm">Пробег</p>
              </div>
              <div className="glass rounded-xl p-4">
                <Fuel className="w-5 h-5 text-[#00a8ff] mb-2" />
                <p className="text-white font-semibold">{fuelLabel()}</p>
                <p className="text-gray-500 text-sm">Гориво</p>
              </div>
              <div className="glass rounded-xl p-4">
                <Zap className="w-5 h-5 text-[#00a8ff] mb-2" />
                <p className="text-white font-semibold">{car.power_hp} к.с.</p>
                <p className="text-gray-500 text-sm">Мощност</p>
              </div>
              <div className="glass rounded-xl p-4">
                <Cog className="w-5 h-5 text-[#00a8ff] mb-2" />
                <p className="text-white font-semibold">{car.transmission === "Automatic" ? "Автоматик" : "Ръчна"}</p>
                <p className="text-gray-500 text-sm">Скоростна кутия</p>
              </div>
              <div className="glass rounded-xl p-4">
                <Palette className="w-5 h-5 text-[#00a8ff] mb-2" />
                <p className="text-white font-semibold">{car.engine_cc > 0 ? `${car.engine_cc} cc` : "N/A"}</p>
                <p className="text-gray-500 text-sm">Двигател</p>
              </div>
            </div>

            {/* Features */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-white mb-4 font-[family-name:var(--font-urbanist)]">
                Екстри и оборудване
              </h3>
              <div className="flex flex-wrap gap-2">
                {car.features.map((feature, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 rounded-full glass text-sm text-gray-300"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            {/* Contact CTAs */}
            <div className="space-y-3">
              <a
                href="tel:+35928686072"
                className="btn-primary w-full flex items-center justify-center gap-2 py-4"
              >
                <Phone className="w-5 h-5" />
                Обадете се: +359 2 868 60 72
              </a>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="mailto:office@mm-bulgaria.com"
                  className="btn-outline flex items-center justify-center gap-2 py-3"
                >
                  <Mail className="w-5 h-5" />
                  Имейл
                </a>
                <Link
                  href="/contact"
                  className="btn-outline flex items-center justify-center gap-2 py-3"
                >
                  <MessageCircle className="w-5 h-5" />
                  Запитване
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Similar Cars */}
        {similarCars.length > 0 && (
          <section className="mt-20">
            <h2 className="text-2xl font-bold font-[family-name:var(--font-urbanist)] text-white mb-8">
              Подобни автомобили
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {similarCars.map((similarCar) => (
                <CarCard key={similarCar.id} car={similarCar} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
