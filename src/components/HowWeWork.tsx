const steps = [
  {
    num: '01',
    title: 'Оставьте заявку или позвоните',
    desc: 'Расскажите, что нужно — по телефону, в мессенджере или через форму на сайте. Или приходите в салон.',
  },
  {
    num: '02',
    title: 'Замеры и подбор',
    desc: 'Определяемся с размерами, конфигурацией, тканью и цветом. При необходимости — делаем 3D-визуализацию.',
  },
  {
    num: '03',
    title: 'Производство',
    desc: 'Изготавливаем мебель на нашем заводе в Кемерово. Срок — от 5 рабочих дней.',
  },
  {
    num: '04',
    title: 'Доставка и сборка',
    desc: 'Привозим, собираем, поднимаем на любой этаж. Забираем старую мебель. Оплата — после сборки.',
  },
];

const HowWeWork = () => {
  return (
    <section className="section-padding bg-white" id="how">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <div>
            <p className="text-sand text-sm font-semibold tracking-widest uppercase font-body mb-3">
              Как мы работаем
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-graphite leading-tight mb-6">
              От заявки до
              <br />готовой мебели
            </h2>
            <p className="text-warm-gray text-base font-body leading-relaxed mb-10 max-w-md">
              Весь процесс прозрачен и предсказуем. Вы знаете, что происходит на каждом этапе.
            </p>
            <a href="#contact" className="btn-sand px-8 py-4 rounded-xl text-base font-semibold font-body inline-block">
              Начать заказ
            </a>
          </div>

          {/* Right: steps */}
          <div className="space-y-0">
            {steps.map((step, i) => (
              <div
                key={step.num}
                className="flex gap-6 pb-8 relative"
              >
                {/* Line connector */}
                {i < steps.length - 1 && (
                  <div className="absolute left-[22px] top-10 w-px h-[calc(100%-16px)] bg-gradient-to-b from-beige-dark/60 to-transparent" />
                )}

                {/* Number */}
                <div className="flex-shrink-0 w-11 h-11 rounded-full border-2 border-beige-dark bg-milk flex items-center justify-center z-10">
                  <span className="font-display text-sm font-semibold text-sand">{step.num}</span>
                </div>

                {/* Content */}
                <div className="pt-1">
                  <h3 className="font-semibold text-graphite text-base mb-1 font-body">{step.title}</h3>
                  <p className="text-warm-gray text-sm leading-relaxed font-body">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
