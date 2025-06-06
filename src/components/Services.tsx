import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Services = () => {
  const services = [
    {
      icon: "Scissors",
      title: "Стрижка и укладка",
      description:
        "Профессиональная стрижка с учетом породы и пожеланий владельца",
      price: "от 2500 ₽",
    },
    {
      icon: "Droplets",
      title: "Мытье и сушка",
      description:
        "Бережное мытье специальными шампунями и профессиональная сушка",
      price: "от 1500 ₽",
    },
    {
      icon: "Sparkles",
      title: "Комплексный уход",
      description:
        "Полный комплекс: стрижка когтей, чистка ушей, обработка глаз",
      price: "от 3500 ₽",
    },
    {
      icon: "Star",
      title: "SPA-процедуры",
      description: "Расслабляющие процедуры для особо требовательных клиентов",
      price: "от 4000 ₽",
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 font-montserrat">
            Наши услуги
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Предоставляем полный спектр услуг по уходу за вашими питомцами
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon
                    name={service.icon as any}
                    size={32}
                    className="text-primary"
                  />
                </div>
                <CardTitle className="text-xl font-montserrat">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <div className="text-2xl font-bold text-primary">
                  {service.price}
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
