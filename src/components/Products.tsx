import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Products = () => {
  const [cart, setCart] = useState<{ [key: number]: number }>({});

  const products = [
    {
      id: 1,
      name: "Шампунь для собак премиум",
      image:
        "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=400",
      price: 1250,
      description: "Профессиональный шампунь для всех типов шерсти",
      category: "Уход",
    },
    {
      id: 2,
      name: "Машинка для стрижки",
      image:
        "https://images.unsplash.com/photo-1503602642458-232111445657?w=400",
      price: 4500,
      description: "Профессиональная машинка с керамическими ножами",
      category: "Инструменты",
    },
    {
      id: 3,
      name: "Ножницы для груминга",
      image:
        "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400",
      price: 2800,
      description: "Японская сталь, эргономичная ручка",
      category: "Инструменты",
    },
    {
      id: 4,
      name: "Кондиционер для шерсти",
      image:
        "https://images.unsplash.com/photo-1591769225440-811ad7d6eab3?w=400",
      price: 950,
      description: "Увлажняющий кондиционер с натуральными маслами",
      category: "Уход",
    },
    {
      id: 5,
      name: "Фен для сушки",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400",
      price: 8900,
      description: "Мощный фен с регулировкой температуры",
      category: "Инструменты",
    },
    {
      id: 6,
      name: "Расческа-пуходерка",
      image:
        "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=400",
      price: 650,
      description: "Для удаления подшерстка и колтунов",
      category: "Аксессуары",
    },
  ];

  const addToCart = (productId: number) => {
    setCart((prev) => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1,
    }));
  };

  const getTotalItems = () => {
    return Object.values(cart).reduce((sum, count) => sum + count, 0);
  };

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 font-montserrat">
            Магазин товаров для груминга
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Профессиональные инструменты и косметика для ухода за питомцами
          </p>
        </div>

        {getTotalItems() > 0 && (
          <div className="mb-8 text-center">
            <div className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-full">
              <Icon name="ShoppingCart" size={20} className="mr-2" />
              <span className="font-bold">
                В корзине: {getTotalItems()} товар(ов)
              </span>
            </div>
          </div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card
              key={product.id}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                    {product.category}
                  </span>
                </div>
              </div>

              <CardHeader className="pb-2">
                <CardTitle className="text-xl font-montserrat">
                  {product.name}
                </CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {product.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-primary">
                    {product.price.toLocaleString()} ₽
                  </div>

                  <Button
                    onClick={() => addToCart(product.id)}
                    className="bg-primary hover:bg-primary/90"
                  >
                    <Icon name="Plus" size={16} className="mr-2" />В корзину
                  </Button>
                </div>

                {cart[product.id] && (
                  <div className="mt-3 text-center">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                      В корзине: {cart[product.id]} шт.
                    </span>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="px-8 py-3">
            <Icon name="Package" size={20} className="mr-2" />
            Посмотреть весь каталог
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;
