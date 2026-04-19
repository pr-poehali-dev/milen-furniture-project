const Hero = () => {
  return (
    <section className="pt-16 md:pt-20 bg-blue-light min-h-screen flex items-center overflow-hidden">
      <div className="w-full">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left: text */}
          <div className="w-full lg:w-[45%] px-6 md:px-12 lg:pl-16 lg:pr-8 py-16 lg:py-0 flex flex-col justify-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase leading-[1] mb-6 animate-fade-in-up" style={{ opacity: 0 }}>
              <span className="text-green-brand">СТИЛЬНЫЕ</span>
              <br />
              ДИВАНЫ
              <br />
              <span className="text-[0.85em]">И КРОВАТИ</span>
              <br />
              <span className="text-[0.85em]">НА ЗАКАЗ</span>
            </h1>

            <div className="bg-white/80 p-5 mb-8 max-w-sm animate-fade-in-up delay-200" style={{ opacity: 0 }}>
              <p className="text-base text-gray-700 italic leading-relaxed">
                Изготовим мебель на собственном производстве от 5 дней, с дизайнерским подходом под ваш интерьер и бюджет
              </p>
            </div>

            <div className="flex gap-4 flex-wrap animate-fade-in-up delay-300" style={{ opacity: 0 }}>
              <a href="#works" className="btn-black">Смотреть каталог</a>
              <a href="#contact" className="btn-outline-black">Рассчитать стоимость</a>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-10 animate-fade-in-up delay-400" style={{ opacity: 0 }}>
              {[
                { v: '18+', l: 'лет работы' },
                { v: 'от 5', l: 'дней срок' },
                { v: '4', l: 'салона' },
              ].map(({ v, l }) => (
                <div key={l}>
                  <div className="text-2xl font-black text-green-brand">{v}</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wide mt-0.5">{l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: two photos overlapping like design-cube */}
          <div className="w-full lg:w-[55%] relative h-[420px] md:h-[560px] lg:h-screen flex-shrink-0">
            {/* Main photo — left/center */}
            <div className="absolute left-0 top-0 bottom-0 w-[65%] overflow-hidden">
              <img
                src="https://cdn.poehali.dev/projects/0f55b065-18d0-4e34-b9d4-06970c3f84ce/files/a1bee713-f30a-4550-991e-cef8a3d7aea0.jpg"
                alt="Диван на заказ"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Green block + second photo — right overlapping */}
            <div className="absolute right-0 top-0 bottom-0 w-[45%] bg-green-brand">
              <img
                src="https://cdn.poehali.dev/projects/0f55b065-18d0-4e34-b9d4-06970c3f84ce/files/33a0d342-c13f-4536-8c8d-96840ef38d2f.jpg"
                alt="Кровать на заказ"
                className="w-full h-[55%] object-cover"
              />
            </div>

            {/* CTA button overlapping bottom of photos */}
            <div className="absolute bottom-0 right-[5%] translate-y-[1px]">
              <a href="#works" className="btn-black block text-center px-10 py-5 text-sm">
                СМОТРЕТЬ ПОРТФОЛИО
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
