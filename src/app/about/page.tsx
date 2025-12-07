import { Award, Users, TrendingUp, Shield, Quote } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] pt-24">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d1117] to-[#0a0a0f]" />
        <div className="absolute inset-0 bg-grid opacity-30" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <p className="text-[#00a8ff] text-sm font-medium mb-2 uppercase tracking-wider">
            За нас
          </p>
          <h1 className="text-4xl md:text-6xl font-bold font-[family-name:var(--font-urbanist)] text-white mb-6">
            MM Auto
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl">
            Вашият доверен партньор за премиум автомобили в България от 2005 година.
            Част от MM Group с над 30 години опит на пазара.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold font-[family-name:var(--font-urbanist)] text-white mb-6">
                Нашата история
              </h2>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  MM Group е водещ български консорциум, работещ от 1993 година в сферите
                  на застрахователното брокерство, продажба на автомобили, отдаване под наем
                  на коли и строителство.
                </p>
                <p>
                  <strong className="text-white">MM Auto</strong> е основана през 2005 година
                  и бързо се превръща в лидер на пазара благодарение на професионалните
                  стандарти за обслужване, наследени от застрахователното подразделение.
                </p>
                <p>
                  Днес предлагаме над 360 премиум автомобила в нашия шоурум в София,
                  заедно с пълен набор от услуги включително лизинг, trade-in и
                  комисионна продажба.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { number: "30+", label: "Години опит", icon: TrendingUp },
                { number: "360+", label: "Автомобила", icon: Shield },
                { number: "150+", label: "Служители", icon: Users },
                { number: "5", label: "Награди", icon: Award },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="glass rounded-2xl p-6 text-center group hover:border-[#00a8ff]/30 transition-colors"
                >
                  <stat.icon className="w-8 h-8 text-[#00a8ff] mx-auto mb-3" />
                  <p className="text-3xl font-bold text-white font-[family-name:var(--font-urbanist)] mb-1">
                    {stat.number}
                  </p>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CEO Quote */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#00a8ff]/5 to-[#0066ff]/5" />

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="glass rounded-3xl p-8 md:p-12">
            <Quote className="w-12 h-12 text-[#00a8ff]/30 mb-6" />
            <blockquote className="text-2xl md:text-3xl text-white font-[family-name:var(--font-urbanist)] leading-relaxed mb-8">
              „Пътят е пред нас, но ние определяме скоростта и посоката."
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#00a8ff] to-[#0066ff] flex items-center justify-center text-white font-bold text-xl">
                МХ
              </div>
              <div>
                <p className="text-white font-semibold">Марин Христов</p>
                <p className="text-gray-400 text-sm">Изпълнителен директор, MM Group</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-urbanist)] text-white mb-4">
              Нашите ценности
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Принципите, които ни водят във всичко, което правим
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Познаване на пазара",
                description: "Дълбоко разбиране на автомобилния пазар и нуждите на клиентите",
              },
              {
                title: "Дългосрочни партньорства",
                description: "Изграждане на трайни отношения с клиенти и партньори",
              },
              {
                title: "Професионализъм",
                description: "Експертен екип с години опит в автомобилната индустрия",
              },
              {
                title: "Социална отговорност",
                description: "Устойчив растеж и отговорни бизнес практики",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="glass rounded-2xl p-6 hover:border-[#00a8ff]/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#00a8ff]/20 to-[#0066ff]/20 flex items-center justify-center mb-4">
                  <span className="text-[#00a8ff] font-bold">{index + 1}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 font-[family-name:var(--font-urbanist)]">
                  {value.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-20 bg-gradient-to-b from-[#0a0a0f] to-[#0d1117]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-[family-name:var(--font-urbanist)] text-white mb-4">
              Признания и награди
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { year: "2023", title: "Сграда на годината", category: "Жилищна категория" },
              { year: "2022", title: "Сграда на годината", category: "M Residence" },
              { year: "2013", title: "Лоялен партньор", category: "Застрахователен бизнес" },
            ].map((award, index) => (
              <div
                key={index}
                className="glass rounded-2xl p-6 text-center hover:border-[#00a8ff]/30 transition-colors"
              >
                <Award className="w-10 h-10 text-[#00a8ff] mx-auto mb-4" />
                <p className="text-[#00a8ff] text-sm font-medium mb-1">{award.year}</p>
                <h3 className="text-xl font-semibold text-white mb-1 font-[family-name:var(--font-urbanist)]">
                  {award.title}
                </h3>
                <p className="text-gray-400 text-sm">{award.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
