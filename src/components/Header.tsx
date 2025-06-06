import React from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Scissors" size={32} className="text-primary" />
            <h1 className="text-2xl font-bold text-primary font-montserrat">
              Groom Studio
            </h1>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#services"
              className="text-gray-700 hover:text-primary transition-colors font-medium"
            >
              Услуги
            </a>
            <a
              href="#products"
              className="text-gray-700 hover:text-primary transition-colors font-medium"
            >
              Магазин
            </a>
            <a
              href="#gallery"
              className="text-gray-700 hover:text-primary transition-colors font-medium"
            >
              Галерея
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-primary transition-colors font-medium"
            >
              Контакты
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              className="hidden sm:flex items-center space-x-2"
            >
              <Icon name="Phone" size={16} />
              <span>+7 (999) 123-45-67</span>
            </Button>
            <Button className="bg-primary hover:bg-primary/90">
              Записаться
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
