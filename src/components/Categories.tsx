const categories = [
  {
    title: 'Угловые диваны',
    desc: 'Вместительные, с оттоманками и спальными местами. Под любой размер комнаты.',
    img: 'https://cdn.poehali.dev/projects/0f55b065-18d0-4e34-b9d4-06970c3f84ce/files/a1bee713-f30a-4550-991e-cef8a3d7aea0.jpg',
  },
  {
    title: 'Прямые диваны',
    desc: 'Классика в современном исполнении — от 150 до 250 см. Любой наполнитель и обивка.',
    img: 'https://cdn.poehali.dev/projects/0f55b065-18d0-4e34-b9d4-06970c3f84ce/files/ac6dcd3b-6f29-4a61-bfa7-8d2a6e8a2778.jpg',
  },
  {
    title: 'Кровати',
    desc: 'С подъёмным механизмом или ящиками. Мягкие изголовья, ортопедические основания.',
    img: 'https://cdn.poehali.dev/projects/0f55b065-18d0-4e34-b9d4-06970c3f84ce/files/33a0d342-c13f-4536-8c8d-96840ef38d2f.jpg',
  },
  {
    title: 'Мебель на заказ',
    desc: 'По вашему фото, эскизу или дизайн-проекту. Любые размеры, формы, ткани.',
    img: 'https://cdn.poehali.dev/projects/0f55b065-18d0-4e34-b9d4-06970c3f84ce/files/a1bee713-f30a-4550-991e-cef8a3d7aea0.jpg',
  },
];

const Categories = () => {
  return (
    <section className="section-padding bg-blue-light" id="categories">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-4">
          <div className="section-heading">
            <div className="bracket-deco" />
            <div>
              <div className="text-4xl md:text-5xl font-black uppercase">КАТАЛОГ</div>
              <div className="text-sm font-semibold uppercase tracking-widest text-gray-500 mt-1">МЯГКАЯ МЕБЕЛЬ ОТ ПРОИЗВОДИТЕЛЯ</div>
            </div>
          </div>
          <a href="#contact" className="btn-outline-black self-start md:self-auto">
            Все категории
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
          {categories.map((cat) => (
            <a
              key={cat.title}
              href="#contact"
              className="group relative overflow-hidden block"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={cat.img}
                  alt={cat.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/55 transition-colors duration-300" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white font-black text-xl uppercase mb-1">{cat.title}</h3>
                <p className="text-white/75 text-sm leading-relaxed mb-4 max-w-xs">{cat.desc}</p>
                <span className="inline-block border border-white/60 text-white text-xs font-bold uppercase tracking-widest px-4 py-2 group-hover:bg-white group-hover:text-black transition-all duration-200">
                  УЗНАТЬ ЦЕНУ →
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
