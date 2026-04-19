import Icon from '@/components/ui/icon';

const features = [
  'По точным размерам — под любой проём или комнату',
  'По фото из интернета или журнала',
  'По вашему эскизу или дизайн-проекту',
  'Любая ткань, цвет и фактура',
  'Усиленный каркас под повышенную нагрузку',
  'Предварительная 3D-визуализация',
];

const CustomOrder = () => {
  return (
    <section className="bg-black py-20 md:py-28" id="custom">
      {/* Dark background with leaf pattern like design-cube showroom section */}
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left */}
          <div>
            <p className="text-green-brand text-xs font-bold tracking-widest uppercase mb-4">
              ИНДИВИДУАЛЬНЫЙ ЗАКАЗ
            </p>
            <h2 className="text-4xl md:text-5xl font-black uppercase text-white leading-tight mb-6">
              ИЗГОТОВИМ
              <br />
              <span className="text-green-brand">НЕ ТОЛЬКО МЕБЕЛЬ</span>
              <br />
              — СОЗДАДИМ ИНТЕРЬЕР
            </h2>
            <p className="text-white/60 text-base leading-relaxed mb-8 max-w-md">
              В нашей команде есть опытные дизайнеры, которые создадут для вас проект квартиры или дома вашей мечты.
              Мы делаем не просто красивые картинки, а дизайн, который реально реализовать.
            </p>

            <ul className="space-y-3 mb-10">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <Icon name="Check" size={15} className="text-green-brand flex-shrink-0 mt-0.5" />
                  <span className="text-white/70 text-sm">{f}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="btn-green text-center">Обсудить проект</a>
              <a href="tel:+73842000000" className="btn-outline-black border-white/40 text-white hover:bg-white hover:text-black text-center" style={{ borderColor: 'rgba(255,255,255,0.3)' }}>Позвонить</a>
            </div>
          </div>

          {/* Right: image */}
          <div className="relative">
            <div className="overflow-hidden aspect-[3/4]">
              <img
                src="https://cdn.poehali.dev/projects/0f55b065-18d0-4e34-b9d4-06970c3f84ce/files/ac6dcd3b-6f29-4a61-bfa7-8d2a6e8a2778.jpg"
                alt="Производство мягкой мебели"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-6 left-6 bg-green-brand text-white p-5">
              <div className="text-3xl font-black">от 5 дней</div>
              <div className="text-white/80 text-xs uppercase tracking-wide mt-1">срок изготовления</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomOrder;
