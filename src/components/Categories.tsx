const categories = [
  {
    title: 'Угловые диваны',
    desc: 'Вместительные, уютные, с оттоманками и спальными местами. Подберём размер под вашу комнату.',
    tag: 'Хит продаж',
    img: 'https://cdn.poehali.dev/projects/0f55b065-18d0-4e34-b9d4-06970c3f84ce/files/a1bee713-f30a-4550-991e-cef8a3d7aea0.jpg',
    href: '#contact',
  },
  {
    title: 'Прямые диваны',
    desc: 'Классика в современном исполнении — от компактных 150 см до больших 250 см.',
    tag: 'Коллекция',
    img: 'https://cdn.poehali.dev/projects/0f55b065-18d0-4e34-b9d4-06970c3f84ce/files/a1bee713-f30a-4550-991e-cef8a3d7aea0.jpg',
    href: '#contact',
  },
  {
    title: 'Кровати',
    desc: 'С подъёмным механизмом или ящиками. Мягкие изголовья, ортопедические основания.',
    tag: 'Новинки',
    img: 'https://cdn.poehali.dev/projects/0f55b065-18d0-4e34-b9d4-06970c3f84ce/files/33a0d342-c13f-4536-8c8d-96840ef38d2f.jpg',
    href: '#contact',
  },
  {
    title: 'Мебель на заказ',
    desc: 'По вашему фото, эскизу или дизайн-проекту. Любые размеры, формы, ткани, цвета.',
    tag: 'Индивидуально',
    img: 'https://cdn.poehali.dev/projects/0f55b065-18d0-4e34-b9d4-06970c3f84ce/files/ac6dcd3b-6f29-4a61-bfa7-8d2a6e8a2778.jpg',
    href: '#custom',
  },
];

const Categories = () => {
  return (
    <section className="section-padding bg-beige" id="categories">
      <div className="container-wide">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-4">
          <div>
            <p className="text-sand text-sm font-semibold tracking-widest uppercase font-body mb-3">
              Каталог
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-graphite leading-tight">
              Что мы делаем
            </h2>
          </div>
          <a href="#contact" className="btn-outline-graphite px-6 py-3 rounded-xl text-sm font-semibold font-body self-start md:self-auto">
            Смотреть весь каталог
          </a>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((cat, i) => (
            <a
              key={cat.title}
              href={cat.href}
              className="group relative overflow-hidden rounded-2xl card-hover block"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={cat.img}
                  alt={cat.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-graphite/80 via-graphite/20 to-transparent" />
              </div>

              {/* Tag */}
              <div className="absolute top-4 left-4">
                <span className="bg-sand text-white text-xs font-semibold px-3 py-1.5 rounded-full font-body">
                  {cat.tag}
                </span>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-display text-2xl font-semibold text-white mb-1">{cat.title}</h3>
                <p className="text-white/75 text-sm font-body leading-relaxed mb-4">{cat.desc}</p>
                <span className="inline-flex items-center gap-1.5 text-sand text-sm font-semibold font-body group-hover:gap-3 transition-all duration-300">
                  Узнать стоимость
                  <span className="text-lg">→</span>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
