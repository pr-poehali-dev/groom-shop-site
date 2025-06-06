import React from "react";
import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Icon name="Scissors" size={28} className="text-primary" />
              <h3 className="text-2xl font-bold font-montserrat">
                Groom Studio
              </h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Профессиональный груминг для ваших любимцев. Создаем красоту с
              заботой и любовью.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Услуги</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Стрижка и укладка
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Мытье и сушка
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Комплексный уход
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  SPA-процедуры
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Контакты</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center space-x-2">
                <Icon name="MapPin" size={16} />
                <span>ул. Московская, 123</span>
              </li>
              <li className="flex items-center space-x-2">
                <Icon name="Phone" size={16} />
                <span>+7 (999) 123-45-67</span>
              </li>
              <li className="flex items-center space-x-2">
                <Icon name="Mail" size={16} />
                <span>info@groomstudio.ru</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Социальные сети</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Icon name="Instagram" size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Icon name="Facebook" size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Icon name="Twitter" size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Groom Studio. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
