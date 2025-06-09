import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-gray-100 pt-20"
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-primary font-montserrat leading-tight">
                Аудиовизуальные
                <span className="block text-purple-600">решения</span>
                <span className="block">для бизнеса</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Комплексное оснащение переговорных комнат, конференц-залов и
                образовательных пространств современным AV-оборудованием
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-lg px-8 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                onClick={() =>
                  document
                    .querySelector("#contacts")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Обсудить проект
                <Icon name="ArrowRight" size={20} />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 transform hover:scale-105 transition-all duration-300 hover:shadow-lg"
                onClick={() =>
                  document
                    .querySelector("#services")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                <Icon name="Play" size={20} />
                Посмотреть портфолио
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary font-montserrat">
                  500+
                </div>
                <div className="text-gray-600">Проектов</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary font-montserrat">
                  12
                </div>
                <div className="text-gray-600">Лет опыта</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary font-montserrat">
                  24/7
                </div>
                <div className="text-gray-600">Поддержка</div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-purple-600/20 rounded-3xl p-8">
              <div className="w-full h-full bg-white rounded-2xl shadow-2xl flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 bg-gradient-to-r from-primary to-purple-600 rounded-2xl flex items-center justify-center mx-auto transform hover:rotate-12 hover:scale-110 transition-all duration-500">
                    <Icon
                      name="Presentation"
                      size={48}
                      className="text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-primary">
                      Современные технологии
                    </h3>
                    <p className="text-gray-600">Для вашего успеха</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center animate-pulse hover:animate-none hover:scale-125 transition-all duration-300 cursor-pointer">
              <Icon name="Zap" size={24} className="text-purple-600" />
            </div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center animate-pulse hover:animate-none hover:scale-125 transition-all duration-300 cursor-pointer">
              <Icon name="Target" size={20} className="text-blue-600" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
