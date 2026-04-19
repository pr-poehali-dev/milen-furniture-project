const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-milk">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://cdn.poehali.dev/projects/0f55b065-18d0-4e34-b9d4-06970c3f84ce/files/a1bee713-f30a-4550-991e-cef8a3d7aea0.jpg"
          alt="Мягкая мебель Милена"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-graphite/75 via-graphite/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-graphite/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="container-wide relative z-10 pt-24 pb-12">
        <div className="max-w-2xl">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 rounded-full px-4 py-1.5 mb-8 animate-fade-in-up"
            style={{ opacity: 0 }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-sand flex-shrink-0" />
            <span className="text-white/90 text-xs font-medium tracking-wide font-body">
              Производитель с 2006 года · Кемерово
            </span>
          </div>

          {/* Heading */}
          <h1
            className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-[1.05] mb-6 animate-fade-in-up delay-100"
            style={{ opacity: 0 }}
          >
            Мебель, которая
            <br />
            <em className="not-italic text-sand">сделана под вас</em>
          </h1>

          {/* Subheading */}
          <p
            className="text-white/80 text-lg md:text-xl font-body leading-relaxed mb-10 max-w-xl animate-fade-in-up delay-200"
            style={{ opacity: 0 }}
          >
            Диваны и кровати по вашим размерам, фото или эскизу.
            Собственное производство — без посредников, с гарантией до 3 лет.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300"
            style={{ opacity: 0 }}
          >
            <a
              href="#contact"
              className="btn-sand px-8 py-4 rounded-xl text-base font-semibold font-body text-center"
            >
              Рассчитать стоимость
            </a>
            <a
              href="#custom"
              className="px-8 py-4 rounded-xl text-base font-semibold font-body text-center border-2 border-white/60 text-white hover:bg-white/15 transition-all duration-300"
            >
              Заказать по фото / эскизу
            </a>
          </div>

          {/* Stats */}
          <div
            className="flex flex-wrap gap-8 mt-14 animate-fade-in-up delay-400"
            style={{ opacity: 0 }}
          >
            {[
              { value: '18+', label: 'лет на рынке' },
              { value: 'от 5 дней', label: 'срок изготовления' },
              { value: 'до 3 лет', label: 'гарантия' },
              { value: '4 салона', label: 'в Кузбассе' },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="font-display text-3xl font-semibold text-sand">{stat.value}</span>
                <span className="text-white/70 text-sm font-body mt-0.5">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-fade-in delay-600" style={{ opacity: 0 }}>
        <span className="text-white/50 text-xs tracking-widest uppercase font-body">Смотреть</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
