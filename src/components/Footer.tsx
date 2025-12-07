import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#050508] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-bold tracking-tight font-[family-name:var(--font-urbanist)]">
                <span className="text-white">MM</span>
                <span className="gradient-text"> Auto</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Вашият доверен партньор за премиум автомобили в България от 2005 година.
              Част от MM Group - над 30 години опит.
            </p>
            <div className="flex gap-4 pt-2">
              <a
                href="#"
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white hover:border-[#00a8ff]/50 transition-all"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white hover:border-[#00a8ff]/50 transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white hover:border-[#00a8ff]/50 transition-all"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 font-[family-name:var(--font-urbanist)]">
              Навигация
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/inventory", label: "Автомобили" },
                { href: "/about", label: "За нас" },
                { href: "/services", label: "Услуги" },
                { href: "/contact", label: "Контакти" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4 font-[family-name:var(--font-urbanist)]">
              Услуги
            </h3>
            <ul className="space-y-3">
              {[
                "Продажба на автомобили",
                "MM Лизинг",
                "Изкупуване на коли",
                "Комисионна продажба",
                "Trade-in",
              ].map((service) => (
                <li key={service}>
                  <span className="text-gray-400 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4 font-[family-name:var(--font-urbanist)]">
              Контакти
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#00a8ff] shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">
                  ул. Околовръстен път 3,<br />1700 София
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#00a8ff] shrink-0" />
                <a
                  href="tel:+35928686072"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  +359 2 868 60 72
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#00a8ff] shrink-0" />
                <a
                  href="mailto:office@mm-bulgaria.com"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  office@mm-bulgaria.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#00a8ff] shrink-0" />
                <span className="text-gray-400 text-sm">
                  Пон - Пет: 09:00 - 18:00
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} MM Auto. Част от MM Group. Всички права запазени.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-gray-500 hover:text-gray-400 text-sm transition-colors">
              Политика за поверителност
            </Link>
            <Link href="#" className="text-gray-500 hover:text-gray-400 text-sm transition-colors">
              Общи условия
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
