import Icon from '@/components/ui/icon';

const features = [
  'По вашим точным размерам — под любой проём или комнату',
  'По фото из интернета или журнала',
  'По вашему эскизу или дизайн-проекту',
  'Любая ткань, цвет и фактура из каталога',
  'Усиленный каркас под повышенную нагрузку',
  'Предварительная 3D-визуализация',
];

const CustomOrder = () => {
  return (
    <section className="section-padding bg-graphite grain-overlay" id="custom">
      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <p className="text-sand text-sm font-semibold tracking-widest uppercase font-body mb-3">
              Индивидуальный заказ
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-white leading-tight mb-6">
              Если нужного нет
              <br />
              <em className="not-italic text-sand">— мы сделаем</em>
            </h2>
            <p className="text-white/70 text-base font-body leading-relaxed mb-8 max-w-md">
              Нестандартная планировка, особые пожелания, точное совпадение с интерьером — 
              любой из этих поводов достаточен, чтобы сделать мебель специально для вас.
            </p>

            <ul className="space-y-3 mb-10">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <Icon name="Check" size={16} className="text-sand flex-shrink-0 mt-0.5" />
                  <span className="text-white/80 text-sm font-body">{f}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="btn-sand px-8 py-4 rounded-xl text-base font-semibold font-body text-center">
                Обсудить проект
              </a>
              <a
                href="tel:+73842000000"
                className="px-8 py-4 rounded-xl text-base font-semibold font-body text-center border-2 border-white/30 text-white hover:bg-white/10 transition-all duration-300"
              >
                Позвонить
              </a>
            </div>
          </div>

          {/* Right: image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden aspect-[4/5]">
              <img
                src="https://cdn.poehali.dev/projects/0f55b065-18d0-4e34-b9d4-06970c3f84ce/files/ac6dcd3b-6f29-4a61-bfa7-8d2a6e8a2778.jpg"
                alt="Производство мягкой мебели на заказ"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-5 -left-5 bg-sand rounded-2xl p-5 shadow-xl max-w-[200px]">
              <p className="font-display text-3xl font-semibold text-white mb-1">5 дней</p>
              <p className="text-white/80 text-xs font-body leading-snug">минимальный срок изготовления</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomOrder;
