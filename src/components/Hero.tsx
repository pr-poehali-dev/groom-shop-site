import React from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-primary/10 to-purple-100 py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl font-bold text-gray-800 mb-6 font-montserrat leading-tight">
              Профессиональный груминг для ваших питомцев
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Мы создаем красоту и комфорт для ваших любимцев с заботой и
              профессионализмом. Индивидуальный подход к каждому клиенту.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white px-8 py-3"
              >
                <Icon name="Calendar" size={20} className="mr-2" />
                Записаться на прием
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-3">
                <Icon name="Play" size={20} className="mr-2" />
                Посмотреть работы
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="bg-gradient-to-br from-primary/20 to-purple-200 rounded-xl h-80 flex items-center justify-center">
                <Icon name="Heart" size={80} className="text-primary" />
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Счастливые питомцы
                </h3>
                <p className="text-gray-600">Более 1000 довольных клиентов</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
