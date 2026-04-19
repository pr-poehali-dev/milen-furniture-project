import Icon from '@/components/ui/icon';

const advantages = [
  {
    icon: 'Factory',
    title: 'Своё производство',
    desc: 'Делаем сами — в Кемерово. Никаких складских остатков и перекупщиков. Контролируем каждый этап.',
  },
  {
    icon: 'Ruler',
    title: 'Любые размеры',
    desc: 'Нестандартный проём, маленькая комната, большой зал — подберём конфигурацию или сделаем с нуля.',
  },
  {
    icon: 'Truck',
    title: 'Доставка и сборка бесплатно',
    desc: 'Привезём, соберём и поднимем на любой этаж. Вывезем старую мебель — тоже бесплатно.',
  },
  {
    icon: 'CreditCard',
    title: 'Оплата после доставки',
    desc: 'Принимаем деньги, когда вы убедились, что всё сделано правильно. Рассрочка без процентов.',
  },
  {
    icon: 'Shield',
    title: 'Гарантия до 3 лет',
    desc: 'Обслуживаем мебель и после окончания гарантии. Приедем и починим, если что-то пойдёт не так.',
  },
  {
    icon: 'Box',
    title: '3D-визуализация',
    desc: 'Покажем, как будет выглядеть ваша мебель в интерьере, до начала производства.',
  },
  {
    icon: 'Video',
    title: 'Видеоконсультация',
    desc: 'Не нужно ехать в салон — проконсультируем онлайн, подберём ткань и размеры по видеосвязи.',
  },
  {
    icon: 'Dumbbell',
    title: 'Усиленная конструкция',
    desc: 'По запросу укрепим каркас и пружины под повышенную нагрузку — для долгой службы без ремонта.',
  },
];

const Advantages = () => {
  return (
    <section className="section-padding bg-white" id="advantages">
      <div className="container-wide">
        {/* Section header */}
        <div className="max-w-xl mb-14">
          <p className="text-sand text-sm font-semibold tracking-widest uppercase font-body mb-3">
            Наши преимущества
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-graphite leading-tight">
            Почему выбирают именно нас
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((item, i) => (
            <div
              key={item.title}
              className="group p-6 rounded-2xl bg-milk border border-beige-dark/40 card-hover"
            >
              <div className="w-12 h-12 rounded-xl bg-beige flex items-center justify-center mb-5 group-hover:bg-sand/15 transition-colors duration-300">
                <Icon name={item.icon} size={22} className="text-sand" fallback="Star" />
              </div>
              <h3 className="font-semibold text-graphite text-base mb-2 font-body">{item.title}</h3>
              <p className="text-warm-gray text-sm leading-relaxed font-body">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;