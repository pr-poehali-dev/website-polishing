import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    // Имитация отправки формы
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Form submitted:", formData);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: "Phone",
      title: "Телефон",
      value: "+7 (495) 123-45-67",
      link: "tel:+74951234567",
    },
    {
      icon: "Mail",
      title: "Email",
      value: "info@av-group.ru",
      link: "mailto:info@av-group.ru",
    },
    {
      icon: "MapPin",
      title: "Адрес",
      value: "Москва, ул. Примерная, д. 123",
      link: "#",
    },
    {
      icon: "Clock",
      title: "Режим работы",
      value: "Пн-Пт: 9:00-18:00",
      link: "#",
    },
  ];

  return (
    <section id="contacts" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-primary font-montserrat">
            Свяжитесь с нами
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Готовы обсудить ваш проект? Оставьте заявку, и мы свяжемся с вами в
            течение часа
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <Card className="shadow-xl border-0 transform hover:scale-105 transition-all duration-300">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-primary font-montserrat mb-6">
                Получить консультацию
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      Имя *
                    </label>
                    <Input
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          name: e.target.value,
                        }))
                      }
                      placeholder="Ваше имя"
                      className="transition-all duration-300 focus:shadow-lg"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      Телефон *
                    </label>
                    <Input
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          phone: e.target.value,
                        }))
                      }
                      placeholder="+7 (___) ___-__-__"
                      className="transition-all duration-300 focus:shadow-lg"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Email *
                  </label>
                  <Input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        email: e.target.value,
                      }))
                    }
                    placeholder="your@email.com"
                    className="transition-all duration-300 focus:shadow-lg"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Сообщение
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        message: e.target.value,
                      }))
                    }
                    placeholder="Расскажите о вашем проекте..."
                    rows={4}
                    className="transition-all duration-300 focus:shadow-lg"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 transform hover:scale-105 transition-all duration-300 disabled:transform-none disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <Icon name="Loader2" size={20} className="animate-spin" />
                      Отправка...
                    </>
                  ) : (
                    <>
                      Отправить заявку
                      <Icon name="Send" size={20} />
                    </>
                  )}
                </Button>

                {submitStatus === "success" && (
                  <div className="text-green-600 text-center text-sm animate-fade-in">
                    ✅ Заявка успешно отправлена! Мы свяжемся с вами в ближайшее
                    время.
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="text-red-600 text-center text-sm animate-fade-in">
                    ❌ Произошла ошибка. Попробуйте еще раз или свяжитесь с нами
                    по телефону.
                  </div>
                )}

                <p className="text-sm text-gray-500 text-center">
                  Нажимая кнопку, вы соглашаетесь с обработкой персональных
                  данных
                </p>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-primary font-montserrat">
                Контактная информация
              </h3>

              <div className="grid gap-6">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-all duration-300">
                      <Icon
                        name={contact.icon}
                        size={20}
                        className="text-white"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary">
                        {contact.title}
                      </h4>
                      {contact.link !== "#" ? (
                        <a
                          href={contact.link}
                          className="text-gray-600 hover:text-primary transition-all duration-300 hover:translate-x-1"
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <p className="text-gray-600">{contact.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Card className="bg-gradient-to-r from-primary to-purple-600 text-white transform hover:scale-105 transition-all duration-300 shadow-xl">
              <CardContent className="p-8">
                <div className="space-y-4">
                  <h4 className="text-xl font-bold">Бесплатная консультация</h4>
                  <p className="text-white/90">
                    Получите экспертную оценку вашего проекта и рекомендации по
                    оптимальным решениям совершенно бесплатно
                  </p>
                  <Button
                    variant="secondary"
                    size="lg"
                    className="bg-white text-primary hover:bg-gray-100 transform hover:scale-105 transition-all duration-300"
                  >
                    <Icon name="Calendar" size={20} />
                    Записаться на встречу
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
