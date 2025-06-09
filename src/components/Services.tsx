import Icon from "@/components/ui/icon";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: "Presentation",
      title: "Конференц-залы",
      description:
        "Проектирование и оснащение переговорных комнат современным оборудованием для видеоконференций",
      features: ["Видеостены", "Системы управления", "Акустические решения"],
    },
    {
      icon: "GraduationCap",
      title: "Образовательные пространства",
      description:
        "Интерактивные решения для учебных заведений и корпоративного обучения",
      features: [
        "Интерактивные доски",
        "Системы трансляции",
        "Мультимедиа решения",
      ],
    },
    {
      icon: "Building",
      title: "Офисные решения",
      description:
        "Комплексное оснащение офисных пространств аудиовизуальным оборудованием",
      features: ["Digital Signage", "Системы оповещения", "Автоматизация"],
    },
    {
      icon: "Headphones",
      title: "Звуковые системы",
      description:
        "Профессиональные аудиосистемы для любых помещений и мероприятий",
      features: ["Акустический дизайн", "Звукоусиление", "Фоновое озвучивание"],
    },
    {
      icon: "Settings",
      title: "Техническое обслуживание",
      description:
        "Полный цикл поддержки установленного оборудования с гарантией качества",
      features: ["24/7 поддержка", "Плановое ТО", "Оперативный ремонт"],
    },
    {
      icon: "Users",
      title: "Консультации",
      description:
        "Экспертная помощь в выборе оптимальных решений для ваших задач",
      features: ["Анализ потребностей", "Техническое ТЗ", "Бюджетирование"],
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-primary font-montserrat">
            Наши услуги
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Полный спектр решений для создания современных аудиовизуальных
            пространств
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="hover:shadow-xl transition-all duration-500 group hover:-translate-y-2 border-0 shadow-lg"
            >
              <CardContent className="p-8">
                <div className="space-y-6">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                    <Icon
                      name={service.icon}
                      size={32}
                      className="text-white"
                    />
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-primary font-montserrat">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center space-x-2 transform hover:translate-x-2 transition-transform duration-300"
                      >
                        <Icon
                          name="Check"
                          size={16}
                          className="text-green-500 flex-shrink-0"
                        />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
