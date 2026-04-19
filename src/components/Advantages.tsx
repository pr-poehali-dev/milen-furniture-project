import Icon from '@/components/ui/icon';

const advantages = [
  {
    icon: 'Factory',
    title: 'Собственное производство',
    desc: 'Вы получите мебель без наценок посредников и перекупщиков — напрямую с завода.',
  },
  {
    icon: 'MapPin',
    title: 'Салоны в Кузбассе',
    desc: 'Четыре шоурума в Кемерово, Новокузнецке и Ленинске-Кузнецком — приходите потрогать вживую.',
  },
  {
    icon: 'Palette',
    title: 'Любые стили и конфигурации',
    desc: 'Производим диваны и кровати различных стилей, конфигураций и на любой вкус.',
  },
  {
    icon: 'Truck',
    title: 'Доставка и сборка',
    desc: 'Привезём, соберём и поднимем на любой этаж. Вывезем старую мебель — бесплатно.',
  },
  {
    icon: 'CreditCard',
    title: 'Оплата после доставки',
    desc: 'Принимаем оплату только после того, как вы убедились, что всё сделано правильно.',
  },
  {
    icon: 'Shield',
    title: 'Гарантия до 3 лет',
    desc: 'Обслуживаем мебель и после окончания гарантийного срока — ремонт и замена деталей.',
  },
];

const Advantages = () => {
  return (
    <section className="section-padding bg-white" id="advantages">
      <div className="container-wide">
        {/* Section heading — bracket deco like design-cube */}
        <div className="text-center mb-14">
          <div className="section-heading justify-center">
            <div className="bracket-deco" />
            <div>
              <div className="text-4xl md:text-5xl font-black uppercase">ПРЕИМУЩЕСТВА</div>
              <div className="text-base font-semibold uppercase tracking-widest text-gray-500 mt-1">РАБОТЫ С НАМИ</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-gray-200">
          {advantages.map((item) => (
            <div
              key={item.title}
              className="border-b border-r border-gray-200 p-8 group hover:bg-blue-light transition-colors duration-200"
            >
              <div className="w-10 h-10 border-2 border-green-brand flex items-center justify-center mb-5">
                <Icon name={item.icon} size={18} className="text-green-brand" fallback="Star" />
              </div>
              <h3 className="font-bold text-[15px] uppercase tracking-wide mb-3">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
