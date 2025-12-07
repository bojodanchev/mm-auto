import HeroSection from "@/components/HeroSection";
import CarCard from "@/components/CarCard";
import inventory from "@/data/inventory.json";
import Link from "next/link";
import { ArrowRight, Car, Banknote, RefreshCw, FileCheck } from "lucide-react";

export default function Home() {
  const featuredCars = inventory.cars.filter((car) => car.featured).slice(0, 6);

  return (
    <>
      <HeroSection />

      {/* Featured Cars Section */}
      <section className="py-24 bg-[#0a0a0f] relative">
        <div className="absolute inset-0 bg-grid opacity-30" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <p className="text-[#00a8ff] text-sm font-medium mb-2 uppercase tracking-wider">
                Избрани автомобили
              </p>
              <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-urbanist)] text-white">
                Премиум селекция
              </h2>
            </div>
            <Link
              href="/inventory"
              className="mt-4 md:mt-0 flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
            >
              Виж всички автомобили
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Cars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCars.map((car) => (
              <CarCard key={car.id} car={car} featured />
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-24 bg-gradient-to-b from-[#0a0a0f] to-[#0d1117] relative overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00a8ff] rounded-full blur-[200px] opacity-5" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-[#00a8ff] text-sm font-medium mb-2 uppercase tracking-wider">
              Нашите услуги
            </p>
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-urbanist)] text-white mb-4">
              Всичко за вашия автомобил
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              От покупка до лизинг - ние предлагаме пълен набор от услуги за вашето удобство
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Car,
                title: "Продажба",
                description: "360+ премиум автомобила на склад, готови за доставка",
              },
              {
                icon: Banknote,
                title: "MM Лизинг",
                description: "Финансов и оперативен лизинг с одобрение до 5 часа",
              },
              {
                icon: RefreshCw,
                title: "Trade-in",
                description: "Разменете стария си автомобил за нов от нашата селекция",
              },
              {
                icon: FileCheck,
                title: "Комисионна",
                description: "Продайте колата си чрез нас с експертна оценка",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl glass glass-hover transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#00a8ff]/20 to-[#0066ff]/20 flex items-center justify-center mb-4 group-hover:from-[#00a8ff]/30 group-hover:to-[#0066ff]/30 transition-colors">
                  <service.icon className="w-7 h-7 text-[#00a8ff]" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 font-[family-name:var(--font-urbanist)]">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Link href="/services" className="btn-outline inline-flex items-center gap-2">
              Научи повече за услугите
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#0a0a0f] relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />

        {/* Gradient accents */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#00a8ff] rounded-full blur-[200px] opacity-10" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#0066ff] rounded-full blur-[200px] opacity-10" />

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-urbanist)] text-white mb-6">
            Готови да намерите
            <span className="gradient-text"> перфектния автомобил?</span>
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
            Използвайте нашия AI асистент за персонализирани препоръки или
            се свържете директно с нашия екип от експерти.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/inventory" className="btn-primary text-lg px-8 py-4">
              Разгледай колите
            </Link>
            <Link href="/contact" className="btn-outline text-lg px-8 py-4">
              Свържи се с нас
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
