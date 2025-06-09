import Icon from "@/components/ui/icon";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const advantages = [
    {
      icon: "Award",
      title: "Экспертность",
      description: "12 лет успешной работы в сфере аудиовизуальных технологий",
    },
    {
      icon: "Shield",
      title: "Гарантия качества",
      description: "Официальная гарантия на все работы и оборудование",
    },
    {
      icon: "Clock",
      title: "Быстрая реализация",
      description: "Соблюдение сроков и четкое планирование проектов",
    },
    {
      icon: "Users",
      title: "Индивидуальный подход",
      description: "Персональные решения под задачи каждого клиента",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-primary font-montserrat">
                О компании AV-GROUP
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Мы специализируемся на создании современных аудиовизуальных
                решений для бизнеса, образования и корпоративных мероприятий.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
                Наша команда состоит из опытных инженеров и проектировщиков,
                которые знают, как создать идеальное техническое решение для
                ваших задач. Мы работаем только с проверенным оборудованием
                ведущих мировых производителей.
              </p>

              <p className="text-gray-600 leading-relaxed">
                От консультации до технической поддержки — мы сопровождаем
                проекты на всех этапах и гарантируем результат, который
                превзойдет ваши ожидания.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-gray-200">
              <div>
                <div className="text-3xl font-bold text-primary font-montserrat">
                  500+
                </div>
                <div className="text-gray-600">Успешных проектов</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary font-montserrat">
                  200+
                </div>
                <div className="text-gray-600">Довольных клиентов</div>
              </div>
            </div>
          </div>

          {/* Advantages Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {advantages.map((advantage, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow duration-300"
              >
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-purple-600 rounded-xl flex items-center justify-center">
                      <Icon
                        name={advantage.icon}
                        size={24}
                        className="text-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-bold text-primary font-montserrat">
                        {advantage.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {advantage.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
