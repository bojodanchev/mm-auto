"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] pt-24">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d1117] to-[#0a0a0f]" />
        <div className="absolute inset-0 bg-grid opacity-30" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <p className="text-[#00a8ff] text-sm font-medium mb-2 uppercase tracking-wider">
            Контакти
          </p>
          <h1 className="text-4xl md:text-6xl font-bold font-[family-name:var(--font-urbanist)] text-white mb-6">
            Свържете се с нас
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl">
            Имате въпроси или искате да научите повече за нашите автомобили и услуги?
            Ние сме тук да помогнем.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold font-[family-name:var(--font-urbanist)] text-white mb-8">
                Информация за контакт
              </h2>

              {/* Contact Cards */}
              <div className="space-y-4">
                <a
                  href="tel:+35928686072"
                  className="flex items-start gap-4 p-5 rounded-xl glass glass-hover transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00a8ff]/20 to-[#0066ff]/20 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-[#00a8ff]" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Телефон</p>
                    <p className="text-white font-medium">+359 2 868 60 72</p>
                  </div>
                </a>

                <a
                  href="mailto:office@mm-bulgaria.com"
                  className="flex items-start gap-4 p-5 rounded-xl glass glass-hover transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00a8ff]/20 to-[#0066ff]/20 flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-[#00a8ff]" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Имейл</p>
                    <p className="text-white font-medium">office@mm-bulgaria.com</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-5 rounded-xl glass">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00a8ff]/20 to-[#0066ff]/20 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-[#00a8ff]" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Адрес</p>
                    <p className="text-white font-medium">
                      ул. Околовръстен път 3<br />
                      1700 София, България
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-xl glass">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00a8ff]/20 to-[#0066ff]/20 flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-[#00a8ff]" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Работно време</p>
                    <p className="text-white font-medium">
                      Понеделник - Петък<br />
                      09:00 - 18:00
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="glass rounded-3xl p-8 md:p-10">
                <h2 className="text-2xl font-bold font-[family-name:var(--font-urbanist)] text-white mb-6">
                  Изпратете запитване
                </h2>

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-500" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Запитването е изпратено!
                    </h3>
                    <p className="text-gray-400 mb-6">
                      Ще се свържем с вас възможно най-скоро.
                    </p>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          name: "",
                          email: "",
                          phone: "",
                          subject: "",
                          message: "",
                        });
                      }}
                      className="btn-outline"
                    >
                      Изпрати ново запитване
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="text-sm text-gray-400 mb-2 block">
                          Вашето име *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#00a8ff]/50 transition-colors"
                          placeholder="Иван Иванов"
                        />
                      </div>
                      <div>
                        <label className="text-sm text-gray-400 mb-2 block">
                          Имейл *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#00a8ff]/50 transition-colors"
                          placeholder="ivan@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="text-sm text-gray-400 mb-2 block">
                          Телефон
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#00a8ff]/50 transition-colors"
                          placeholder="+359 888 123 456"
                        />
                      </div>
                      <div>
                        <label className="text-sm text-gray-400 mb-2 block">
                          Тема
                        </label>
                        <select
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#00a8ff]/50 transition-colors cursor-pointer"
                        >
                          <option value="" className="bg-[#1a1a2e]">Изберете тема</option>
                          <option value="purchase" className="bg-[#1a1a2e]">Покупка на автомобил</option>
                          <option value="leasing" className="bg-[#1a1a2e]">Лизинг</option>
                          <option value="trade-in" className="bg-[#1a1a2e]">Trade-in</option>
                          <option value="consignment" className="bg-[#1a1a2e]">Комисионна продажба</option>
                          <option value="other" className="bg-[#1a1a2e]">Друго</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="text-sm text-gray-400 mb-2 block">
                        Съобщение *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#00a8ff]/50 transition-colors resize-none"
                        placeholder="Как можем да ви помогнем?"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary w-full flex items-center justify-center gap-2 py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Изпращане...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Изпрати запитване
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="glass rounded-3xl overflow-hidden h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2932.7!2d23.3!3d42.67!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDLCsDQwJzEyLjAiTiAyM8KwMTgnMDAuMCJF!5e0!3m2!1sen!2sbg!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
