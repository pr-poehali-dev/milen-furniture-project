const FinalCTA = () => {
  return (
    <section className="relative py-24 bg-graphite overflow-hidden grain-overlay">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-sand/10 -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-sand/8 translate-y-1/3 -translate-x-1/4" />

      <div className="container-wide relative z-10 text-center">
        <p className="text-sand text-sm font-semibold tracking-widest uppercase font-body mb-4">
          Готовы начать?
        </p>
        <h2 className="font-display text-4xl md:text-6xl font-semibold text-white leading-tight mb-6 max-w-2xl mx-auto">
          Мебель вашей мечты —
          <br />
          <em className="not-italic text-sand">уже через 5 дней</em>
        </h2>
        <p className="text-white/65 font-body text-base md:text-lg leading-relaxed mb-10 max-w-lg mx-auto">
          Позвоните или оставьте заявку. Мы поможем подобрать размер, ткань и конфигурацию — 
          и рассчитаем точную стоимость бесплатно.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contact" className="btn-sand px-10 py-4 rounded-xl text-base font-semibold font-body">
            Рассчитать стоимость
          </a>
          <a
            href="tel:+73842000000"
            className="px-10 py-4 rounded-xl text-base font-semibold font-body border-2 border-white/30 text-white hover:bg-white/10 transition-all duration-300"
          >
            +7 (3842) 00-00-00
          </a>
        </div>

        {/* Mini-advantages */}
        <div className="flex flex-wrap justify-center gap-6 mt-14">
          {[
            'Бесплатная доставка',
            'Оплата после получения',
            'Рассрочка без %',
            'Гарантия до 3 лет',
          ].map((item) => (
            <div key={item} className="flex items-center gap-2 text-white/60 text-sm font-body">
              <span className="w-1 h-1 rounded-full bg-sand flex-shrink-0" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
