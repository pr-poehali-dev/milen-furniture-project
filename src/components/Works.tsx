const works = [
  {
    title: 'Угловой диван «Марсель»',
    desc: 'Велюр антрацит, размер 340×215 см, с оттоманкой и ящиком',
    img: 'https://cdn.poehali.dev/projects/0f55b065-18d0-4e34-b9d4-06970c3f84ce/files/a1bee713-f30a-4550-991e-cef8a3d7aea0.jpg',
  },
  {
    title: 'Кровать «Лион»',
    desc: 'Рогожка бежевая, 180×200, подъёмный механизм, деревянные ножки',
    img: 'https://cdn.poehali.dev/projects/0f55b065-18d0-4e34-b9d4-06970c3f84ce/files/33a0d342-c13f-4536-8c8d-96840ef38d2f.jpg',
  },
  {
    title: 'Диван по фото клиента',
    desc: 'Воспроизведён по референсу, нестандартный размер 310 см, экокожа',
    img: 'https://cdn.poehali.dev/projects/0f55b065-18d0-4e34-b9d4-06970c3f84ce/files/ac6dcd3b-6f29-4a61-bfa7-8d2a6e8a2778.jpg',
  },
  {
    title: 'Угловой диван «Верона»',
    desc: 'Рогожка серая, конфигурация под П-образную комнату, спальное место',
    img: 'https://cdn.poehali.dev/projects/0f55b065-18d0-4e34-b9d4-06970c3f84ce/files/a1bee713-f30a-4550-991e-cef8a3d7aea0.jpg',
  },
  {
    title: 'Прямой диван «Арно»',
    desc: 'Ткань шенилл, ширина 230 см, три мягких подушки, цвет карамель',
    img: 'https://cdn.poehali.dev/projects/0f55b065-18d0-4e34-b9d4-06970c3f84ce/files/33a0d342-c13f-4536-8c8d-96840ef38d2f.jpg',
  },
  {
    title: 'Кровать «Флоренция»',
    desc: 'Мягкое изголовье с каретной стяжкой, велюр пудра, 160×200 см',
    img: 'https://cdn.poehali.dev/projects/0f55b065-18d0-4e34-b9d4-06970c3f84ce/files/33a0d342-c13f-4536-8c8d-96840ef38d2f.jpg',
  },
];

const Works = () => {
  return (
    <section className="section-padding bg-milk" id="works">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-4">
          <div>
            <p className="text-sand text-sm font-semibold tracking-widest uppercase font-body mb-3">
              Примеры работ
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-graphite leading-tight">
              Что уже сделали
            </h2>
          </div>
          <p className="text-warm-gray text-sm font-body max-w-xs md:text-right">
            Все работы выполнены нашим производством для реальных клиентов
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {works.map((work) => (
            <div key={work.title} className="group rounded-2xl overflow-hidden bg-white border border-beige-dark/30 card-hover">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={work.img}
                  alt={work.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-graphite text-base font-body mb-1">{work.title}</h3>
                <p className="text-warm-gray text-sm font-body leading-relaxed">{work.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#contact" className="btn-sand px-10 py-4 rounded-xl text-base font-semibold font-body inline-block">
            Хочу такую же мебель
          </a>
        </div>
      </div>
    </section>
  );
};

export default Works;
