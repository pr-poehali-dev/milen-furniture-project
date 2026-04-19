import Icon from '@/components/ui/icon';

const salons = [
  {
    city: 'Кемерово',
    locations: [
      { name: 'ТЦ «Энергия Уюта»', address: 'пр. Химиков 43, 3 этаж' },
      { name: 'ТЦ «Сити-дом»', address: 'ул. В. Терешковой 41' },
    ],
  },
  {
    city: 'Новокузнецк',
    locations: [
      { name: 'ТЦ «Маяк»', address: 'ул. Курако 49' },
    ],
  },
  {
    city: 'Ленинск-Кузнецкий',
    locations: [
      { name: 'ТЦ «Фабрика»', address: 'ул. Телефонная 13' },
    ],
  },
];

const Salons = () => {
  return (
    <section className="section-padding bg-white" id="salons">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <p className="text-sand text-sm font-semibold tracking-widest uppercase font-body mb-3">
              Наши салоны
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-graphite leading-tight mb-4">
              Приходите
              <br />потрогать вживую
            </h2>
            <p className="text-warm-gray font-body text-base mb-10 max-w-md leading-relaxed">
              В наших шоурумах вы сможете ощутить качество тканей, оценить мягкость и обсудить заказ с консультантом лично.
            </p>

            {/* Hours */}
            <div className="inline-flex items-center gap-3 bg-beige rounded-xl px-5 py-3 mb-10">
              <Icon name="Clock" size={18} className="text-sand" />
              <div>
                <p className="font-semibold text-graphite text-sm font-body">Ежедневно 10:00–20:00</p>
                <p className="text-warm-gray text-xs font-body">без выходных</p>
              </div>
            </div>

            {/* Salons list */}
            <div className="space-y-6">
              {salons.map((salon) => (
                <div key={salon.city}>
                  <p className="text-sand text-xs font-semibold tracking-widest uppercase font-body mb-3">
                    {salon.city}
                  </p>
                  <div className="space-y-3">
                    {salon.locations.map((loc) => (
                      <div key={loc.name} className="flex items-start gap-3 p-4 rounded-xl border border-beige-dark/40 bg-milk hover:border-sand/50 transition-colors duration-300">
                        <Icon name="MapPin" size={16} className="text-sand flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-graphite text-sm font-body">{loc.name}</p>
                          <p className="text-warm-gray text-xs font-body mt-0.5">{loc.address}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: image + CTA */}
          <div className="space-y-5">
            <div className="rounded-2xl overflow-hidden aspect-[3/2]">
              <img
                src="https://cdn.poehali.dev/projects/0f55b065-18d0-4e34-b9d4-06970c3f84ce/files/a1bee713-f30a-4550-991e-cef8a3d7aea0.jpg"
                alt="Салон мягкой мебели Милена"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Actions */}
            <div className="grid grid-cols-2 gap-4">
              <a href="tel:+73842000000" className="flex items-center justify-center gap-2 bg-graphite text-white py-4 rounded-xl hover:bg-graphite-light transition-colors font-semibold text-sm font-body">
                <Icon name="Phone" size={16} />
                Позвонить
              </a>
              <a href="#contact" className="btn-sand flex items-center justify-center gap-2 py-4 rounded-xl font-semibold text-sm font-body">
                <Icon name="MessageSquare" size={16} />
                Написать
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Salons;
