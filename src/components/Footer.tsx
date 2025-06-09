import Icon from "@/components/ui/icon";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: "Phone", href: "tel:+74951234567" },
    { icon: "Mail", href: "mailto:info@av-group.ru" },
    { icon: "MessageCircle", href: "#" },
  ];

  const quickLinks = [
    { name: "Главная", href: "#hero" },
    { name: "Услуги", href: "#services" },
    { name: "О компании", href: "#about" },
    { name: "Контакты", href: "#contacts" },
  ];

  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-lg">AV</span>
              </div>
              <span className="text-xl font-bold font-montserrat">
                AV-GROUP
              </span>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Современные аудиовизуальные решения для бизнеса. Качество,
              надежность, инновации.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg">Навигация</h4>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-white/80 hover:text-white transition-colors text-sm"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg">Услуги</h4>
            <div className="space-y-2 text-sm">
              <p className="text-white/80">Конференц-залы</p>
              <p className="text-white/80">Образовательные пространства</p>
              <p className="text-white/80">Офисные решения</p>
              <p className="text-white/80">Техническое обслуживание</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg">Контакты</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Icon name="Phone" size={16} className="text-white/80" />
                <span className="text-white/80 text-sm">
                  +7 (495) 123-45-67
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Mail" size={16} className="text-white/80" />
                <span className="text-white/80 text-sm">info@av-group.ru</span>
              </div>
              <div className="flex items-start space-x-2">
                <Icon
                  name="MapPin"
                  size={16}
                  className="text-white/80 mt-0.5"
                />
                <span className="text-white/80 text-sm">
                  Москва, ул. Примерная, д. 123
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-3 pt-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <Icon name={social.icon} size={18} className="text-white" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/60 text-sm">
              © {currentYear} AV-GROUP. Все права защищены.
            </p>
            <div className="flex space-x-6 text-sm">
              <a
                href="#"
                className="text-white/60 hover:text-white transition-colors"
              >
                Политика конфиденциальности
              </a>
              <a
                href="#"
                className="text-white/60 hover:text-white transition-colors"
              >
                Пользовательское соглашение
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
