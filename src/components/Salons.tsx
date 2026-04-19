import Icon from '@/components/ui/icon';

const salons = [
  { city: 'Кемерово', name: 'ТЦ «Энергия Уюта»', address: 'пр. Химиков 43, 3 этаж' },
  { city: 'Кемерово', name: 'ТЦ «Сити-дом»', address: 'ул. В. Терешковой 41' },
  { city: 'Новокузнецк', name: 'ТЦ «Маяк»', address: 'ул. Курако 49' },
  { city: 'Ленинск-Кузнецкий', name: 'ТЦ «Фабрика»', address: 'ул. Телефонная 13' },
];

const Salons = () => {
  return (
    <section className="bg-black py-20 md:py-28" id="salons">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: video/image block like design-cube showroom */}
          <div>
            <div className="relative overflow-hidden aspect-video bg-gray-900 group cursor-pointer">
              <img
                src="https://cdn.poehali.dev/projects/0f55b065-18d0-4e34-b9d4-06970c3f84ce/files/a1bee713-f30a-4550-991e-cef8a3d7aea0.jpg"
                alt="Наш шоурум"
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
              />
              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white/20 border-2 border-white flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon name="Play" size={24} className="text-white ml-1" />
                </div>
              </div>
            </div>
          </div>

          {/* Right: text + addresses */}
          <div>
            <h2 className="text-3xl md:text-4xl font-black uppercase text-white mb-5">
              Приезжайте
              <br />в наш шоурум
            </h2>
            <p className="text-white/60 text-sm leading-relaxed mb-8">
              Фотографии не смогут передать всю красоту и удобство мебели, изготовленной на заказ, 
              поэтому мы приглашаем в наши шоурумы. Покажем, чем отличаются дорогие материалы от 
              дешёвых, и поможем определиться с дизайном.
            </p>

            <div className="flex items-center gap-3 mb-8 text-white/50 text-sm">
              <Icon name="Clock" size={16} className="text-green-brand" />
              <span>Ежедневно 10:00–20:00, без выходных</span>
            </div>

            <div className="space-y-3 mb-8">
              {salons.map((s) => (
                <div key={s.name} className="flex items-start gap-3 border border-white/10 p-4 hover:border-green-brand transition-colors duration-200">
                  <Icon name="MapPin" size={16} className="text-green-brand flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-green-brand text-xs font-bold uppercase tracking-widest">{s.city}</span>
                    <div className="text-white text-sm font-semibold">{s.name}</div>
                    <div className="text-white/50 text-xs">{s.address}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              <a href="tel:+73842000000" className="btn-green flex-1 text-center py-3">Позвонить</a>
              <a href="#contact" className="btn-black flex-1 text-center py-3">Написать</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Salons;
