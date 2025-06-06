import React from "react";
import Icon from "@/components/ui/icon";

const Gallery = () => {
  const works = [
    {
      before:
        "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400",
      after:
        "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400",
      breed: "Йоркширский терьер",
    },
    {
      before: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=400",
      after:
        "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400",
      breed: "Золотистый ретривер",
    },
    {
      before:
        "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=400",
      after:
        "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400",
      breed: "Пудель",
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 font-montserrat">
            Наши работы
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Результаты нашей работы говорят сами за себя
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((work, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="grid grid-cols-2 h-64">
                <div className="relative group">
                  <img
                    src={work.before}
                    alt="До"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-white font-bold text-lg">ДО</span>
                  </div>
                </div>
                <div className="relative group">
                  <img
                    src={work.after}
                    alt="После"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-primary/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-white font-bold text-lg">ПОСЛЕ</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {work.breed}
                </h3>
                <div className="flex items-center text-primary">
                  <Icon name="Star" size={16} className="mr-1" />
                  <Icon name="Star" size={16} className="mr-1" />
                  <Icon name="Star" size={16} className="mr-1" />
                  <Icon name="Star" size={16} className="mr-1" />
                  <Icon name="Star" size={16} className="mr-2" />
                  <span className="text-sm text-gray-600">
                    Отличный результат
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
