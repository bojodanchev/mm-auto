import Link from "next/link";
import {
  Car,
  Banknote,
  RefreshCw,
  FileCheck,
  Clock,
  CheckCircle,
  ArrowRight,
  Phone,
} from "lucide-react";

const services = [
  {
    icon: Car,
    title: "Продажба на автомобили",
    description:
      "Разполагаме с над 360 премиум автомобила в нашия шоурум. Всеки автомобил преминава през щателна проверка и подготовка преди продажба.",
    features: [
      "360+ автомобила в наличност",
      "Пълна история на автомобила",
      "Гаранция за качество",
      "Професионална консултация",
    ],
    cta: "Разгледай автомобилите",
    href: "/inventory",
  },
  {
    icon: Banknote,
    title: "MM Лизинг",
    description:
      "Предлагаме гъвкави лизингови решения с бързо одобрение. Финансов и оперативен лизинг с индивидуални условия според вашите нужди.",
    features: [
      "Одобрение до 5 часа",
      "Гъвкава първоначална вноска",
      "Конкурентни лихвени проценти",
      "Финансов и оперативен лизинг",
    ],
    cta: "Свържете се за лизинг",
    href: "/contact",
  },
  {
    icon: RefreshCw,
    title: "Trade-in програма",
    description:
      "Разменете стария си автомобил за нов от нашата селекция. Предлагаме честна оценка и моментално приспадане от цената на новия автомобил.",
    features: [
      "Безплатна оценка",
      "Честна пазарна цена",
      "Бърз процес",
      "Директно приспадане от цената",
    ],
    cta: "Оценка на автомобил",
    href: "/contact",
  },
  {
    icon: FileCheck,
    title: "Комисионна продажба",
    description:
      "Продайте вашия автомобил чрез нас. С нашия опит и клиентска база ще намерим правилния купувач за вашата кола.",
    features: [
      "Експертна пазарна оценка",
      "Професионална фотосесия",
      "Широка клиентска база",
      "Прозрачен процес",
    ],
    cta: "Научи повече",
    href: "/contact",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] pt-24">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d1117] to-[#0a0a0f]" />
        <div className="absolute inset-0 bg-grid opacity-30" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <p className="text-[#00a8ff] text-sm font-medium mb-2 uppercase tracking-wider">
            Нашите услуги
          </p>
          <h1 className="text-4xl md:text-6xl font-bold font-[family-name:var(--font-urbanist)] text-white mb-6">
            Всичко за вашия автомобил
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl">
            От покупка до продажба - предлагаме пълен набор от услуги
            за вашето удобство и спокойствие.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-12">
            {services.map((service, index) => (
              <div
                key={index}
                className={`glass rounded-3xl p-8 md:p-12 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    {/* Icon */}
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00a8ff]/20 to-[#0066ff]/20 flex items-center justify-center mb-6">
                      <service.icon className="w-8 h-8 text-[#00a8ff]" />
                    </div>

                    {/* Title & Description */}
                    <h2 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-urbanist)] text-white mb-4">
                      {service.title}
                    </h2>
                    <p className="text-gray-400 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* CTA */}
                    <Link
                      href={service.href}
                      className="btn-primary inline-flex items-center gap-2"
                    >
                      {service.cta}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>

                  {/* Features */}
                  <div className={`space-y-4 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    {service.features.map((feature, fIndex) => (
                      <div
                        key={fIndex}
                        className="flex items-center gap-3 p-4 rounded-xl bg-white/5"
                      >
                        <CheckCircle className="w-5 h-5 text-[#00a8ff] shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leasing Highlight */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#00a8ff]/10 to-[#0066ff]/10" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-urbanist)] text-white mb-4">
              MM Лизинг - Бързо и лесно
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Нашият лизинг процес е проектиран да бъде максимално бърз и удобен
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Изберете автомобил",
                description: "Разгледайте нашата селекция и изберете перфектния автомобил",
              },
              {
                step: "2",
                title: "Подайте заявка",
                description: "Попълнете кратка форма с вашите данни за лизинг",
              },
              {
                step: "3",
                title: "Получете одобрение",
                description: "Получавате решение до 5 часа и взимате колата",
              },
            ].map((item, index) => (
              <div key={index} className="text-center relative">
                {/* Step number */}
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#00a8ff] to-[#0066ff] flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white">
                  {item.step}
                </div>

                {/* Connector line */}
                {index < 2 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-[#00a8ff]/50 to-transparent" />
                )}

                <h3 className="text-xl font-semibold text-white mb-2 font-[family-name:var(--font-urbanist)]">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Speed highlight */}
          <div className="mt-16 glass rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <Clock className="w-12 h-12 text-[#00a8ff]" />
              <div>
                <p className="text-3xl font-bold text-white font-[family-name:var(--font-urbanist)]">
                  До 5 часа
                </p>
                <p className="text-gray-400">Одобрение на лизинг</p>
              </div>
            </div>
            <Link href="/contact" className="btn-primary">
              Кандидатствай за лизинг
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-urbanist)] text-white mb-6">
            Имате въпроси?
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Свържете се с нашия екип за безплатна консултация
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+35928686072"
              className="btn-primary flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              +359 2 868 60 72
            </a>
            <Link href="/contact" className="btn-outline">
              Изпрати запитване
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
