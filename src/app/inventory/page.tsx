"use client";

import { useState, useMemo } from "react";
import CarCard from "@/components/CarCard";
import inventory from "@/data/inventory.json";
import { Search, SlidersHorizontal, X } from "lucide-react";

const brands = [...new Set(inventory.cars.map((car) => car.brand))].sort();
const bodyTypes = [...new Set(inventory.cars.map((car) => car.body_type))].sort();
const fuelTypes = ["Petrol", "Diesel", "Electric", "Hybrid"];
const transmissions = ["Automatic", "Manual"];

export default function InventoryPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedBodyType, setSelectedBodyType] = useState("");
  const [selectedFuel, setSelectedFuel] = useState("");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 600000]);
  const [sortBy, setSortBy] = useState("featured");
  const [showFilters, setShowFilters] = useState(false);

  const filteredCars = useMemo(() => {
    let cars = [...inventory.cars];

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      cars = cars.filter(
        (car) =>
          car.brand.toLowerCase().includes(query) ||
          car.model.toLowerCase().includes(query)
      );
    }

    // Brand filter
    if (selectedBrand) {
      cars = cars.filter((car) => car.brand === selectedBrand);
    }

    // Body type filter
    if (selectedBodyType) {
      cars = cars.filter((car) => car.body_type === selectedBodyType);
    }

    // Fuel filter
    if (selectedFuel) {
      cars = cars.filter((car) => car.fuel === selectedFuel);
    }

    // Price filter
    cars = cars.filter(
      (car) => car.price_bgn >= priceRange[0] && car.price_bgn <= priceRange[1]
    );

    // Sort
    switch (sortBy) {
      case "price-asc":
        cars.sort((a, b) => a.price_bgn - b.price_bgn);
        break;
      case "price-desc":
        cars.sort((a, b) => b.price_bgn - a.price_bgn);
        break;
      case "year-desc":
        cars.sort((a, b) => b.year - a.year);
        break;
      case "mileage-asc":
        cars.sort((a, b) => a.mileage_km - b.mileage_km);
        break;
      default:
        // Featured first
        cars.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    return cars;
  }, [searchQuery, selectedBrand, selectedBodyType, selectedFuel, priceRange, sortBy]);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedBrand("");
    setSelectedBodyType("");
    setSelectedFuel("");
    setPriceRange([0, 600000]);
    setSortBy("featured");
  };

  const activeFiltersCount = [
    selectedBrand,
    selectedBodyType,
    selectedFuel,
    priceRange[0] > 0 || priceRange[1] < 600000,
  ].filter(Boolean).length;

  return (
    <div className="min-h-screen bg-[#0a0a0f] pt-24">
      {/* Header */}
      <div className="bg-gradient-to-b from-[#0d1117] to-[#0a0a0f] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-urbanist)] text-white mb-4">
            Автомобили
          </h1>
          <p className="text-gray-400 text-lg">
            Разгледайте нашата селекция от {inventory.cars.length}+ премиум автомобила
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Search and Filters Bar */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input
              type="text"
              placeholder="Търси по марка или модел..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl glass border-0 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00a8ff]/50"
            />
          </div>

          {/* Filter Toggle (Mobile) */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="md:hidden flex items-center justify-center gap-2 px-4 py-3 rounded-xl glass text-white"
          >
            <SlidersHorizontal className="w-5 h-5" />
            Филтри
            {activeFiltersCount > 0 && (
              <span className="w-5 h-5 rounded-full bg-[#00a8ff] text-xs flex items-center justify-center">
                {activeFiltersCount}
              </span>
            )}
          </button>

          {/* Sort Dropdown */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-3 rounded-xl glass border-0 text-white bg-transparent focus:outline-none focus:ring-2 focus:ring-[#00a8ff]/50 cursor-pointer"
          >
            <option value="featured" className="bg-[#1a1a2e]">Препоръчани</option>
            <option value="price-asc" className="bg-[#1a1a2e]">Цена: ниска към висока</option>
            <option value="price-desc" className="bg-[#1a1a2e]">Цена: висока към ниска</option>
            <option value="year-desc" className="bg-[#1a1a2e]">Най-нови</option>
            <option value="mileage-asc" className="bg-[#1a1a2e]">Най-малко км</option>
          </select>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside
            className={`lg:w-64 shrink-0 ${
              showFilters ? "block" : "hidden lg:block"
            }`}
          >
            <div className="glass rounded-2xl p-6 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-white font-[family-name:var(--font-urbanist)]">
                  Филтри
                </h3>
                {activeFiltersCount > 0 && (
                  <button
                    onClick={clearFilters}
                    className="text-sm text-[#00a8ff] hover:text-white transition-colors"
                  >
                    Изчисти
                  </button>
                )}
              </div>

              {/* Brand Filter */}
              <div className="mb-6">
                <label className="text-sm text-gray-400 mb-2 block">Марка</label>
                <select
                  value={selectedBrand}
                  onChange={(e) => setSelectedBrand(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#00a8ff]/50"
                >
                  <option value="" className="bg-[#1a1a2e]">Всички марки</option>
                  {brands.map((brand) => (
                    <option key={brand} value={brand} className="bg-[#1a1a2e]">
                      {brand}
                    </option>
                  ))}
                </select>
              </div>

              {/* Body Type Filter */}
              <div className="mb-6">
                <label className="text-sm text-gray-400 mb-2 block">Тип каросерия</label>
                <select
                  value={selectedBodyType}
                  onChange={(e) => setSelectedBodyType(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#00a8ff]/50"
                >
                  <option value="" className="bg-[#1a1a2e]">Всички типове</option>
                  {bodyTypes.map((type) => (
                    <option key={type} value={type} className="bg-[#1a1a2e]">
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              {/* Fuel Filter */}
              <div className="mb-6">
                <label className="text-sm text-gray-400 mb-2 block">Гориво</label>
                <select
                  value={selectedFuel}
                  onChange={(e) => setSelectedFuel(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#00a8ff]/50"
                >
                  <option value="" className="bg-[#1a1a2e]">Всички</option>
                  {fuelTypes.map((fuel) => (
                    <option key={fuel} value={fuel} className="bg-[#1a1a2e]">
                      {fuel === "Petrol" ? "Бензин" : fuel === "Diesel" ? "Дизел" : fuel === "Electric" ? "Електро" : "Хибрид"}
                    </option>
                  ))}
                </select>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <label className="text-sm text-gray-400 mb-2 block">
                  Цена: {priceRange[0].toLocaleString()} - {priceRange[1].toLocaleString()} лв.
                </label>
                <input
                  type="range"
                  min="0"
                  max="600000"
                  step="10000"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full accent-[#00a8ff]"
                />
              </div>
            </div>
          </aside>

          {/* Results */}
          <div className="flex-1">
            {/* Results count */}
            <p className="text-gray-400 mb-6">
              Намерени <span className="text-white font-medium">{filteredCars.length}</span> автомобила
            </p>

            {/* Cars Grid */}
            {filteredCars.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredCars.map((car) => (
                  <CarCard key={car.id} car={car} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-gray-400 text-lg mb-4">
                  Няма намерени автомобили с избраните филтри
                </p>
                <button
                  onClick={clearFilters}
                  className="btn-outline"
                >
                  Изчисти филтрите
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
