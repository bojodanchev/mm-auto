"use client";

import { ArrowRight, Car, Clock, Shield } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient and grid */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0f] via-[#0d1117] to-[#0a0a0f]" />
      <div className="absolute inset-0 bg-grid opacity-50" />

      {/* Ambient glow effects */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#00a8ff] rounded-full blur-[150px] opacity-20" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#0066ff] rounded-full blur-[150px] opacity-15" />

      {/* Car silhouette background (using CSS gradient as placeholder) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="w-[120%] h-[80%] opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 300'%3E%3Cpath fill='white' d='M750 200 L700 150 L650 130 L550 120 L450 115 L350 115 L250 120 L180 135 L120 160 L80 180 L50 200 L30 220 L780 220 Z'/%3E%3C/svg%3E")`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "contain"
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-32">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-[#00a8ff] animate-pulse" />
            <span className="text-sm text-gray-300">360+ премиум автомобила в наличност</span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-[family-name:var(--font-urbanist)] mb-6 animate-fade-in-up delay-100">
            <span className="text-white">MM</span>
            <span className="gradient-text"> Auto</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mb-4 animate-fade-in-up delay-200 font-[family-name:var(--font-urbanist)]">
            Премиум автомобили. Доверие от 2005.
          </p>
          <p className="text-base md:text-lg text-gray-500 max-w-xl mb-10 animate-fade-in-up delay-300">
            Вашият надежден партньор за качествени употребявани автомобили в България.
            Част от MM Group с над 30 години опит.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-fade-in-up delay-400">
            <Link href="/inventory" className="btn-primary flex items-center justify-center gap-2 text-lg px-8 py-4">
              Разгледай автомобилите
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/services" className="btn-outline flex items-center justify-center gap-2 text-lg px-8 py-4">
              Нашите услуги
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-12 animate-fade-in-up delay-500">
            <div className="flex flex-col items-center gap-2 p-6 rounded-2xl glass">
              <Car className="w-8 h-8 text-[#00a8ff] mb-2" />
              <span className="text-3xl font-bold font-[family-name:var(--font-urbanist)]">360+</span>
              <span className="text-gray-400 text-sm">Автомобила</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-6 rounded-2xl glass">
              <Clock className="w-8 h-8 text-[#00a8ff] mb-2" />
              <span className="text-3xl font-bold font-[family-name:var(--font-urbanist)]">5 часа</span>
              <span className="text-gray-400 text-sm">Одобрение за лизинг</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-6 rounded-2xl glass">
              <Shield className="w-8 h-8 text-[#00a8ff] mb-2" />
              <span className="text-3xl font-bold font-[family-name:var(--font-urbanist)]">30+</span>
              <span className="text-gray-400 text-sm">Години опит</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0f] to-transparent" />

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-gray-500 text-xs uppercase tracking-wider">Scroll</span>
        <div className="w-6 h-10 rounded-full border-2 border-gray-600 flex items-start justify-center p-1">
          <div className="w-1.5 h-3 rounded-full bg-gradient-to-b from-[#00a8ff] to-[#0066ff]" />
        </div>
      </div>
    </section>
  );
}
