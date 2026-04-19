const steps = [
  { num: '1', title: 'Оставьте заявку', desc: 'Позвоните, напишите или заполните форму. Расскажите, что нужно.' },
  { num: '2', title: 'Замеры и подбор', desc: 'Определяемся с размерами, тканью и конфигурацией. По желанию — 3D-визуализация.' },
  { num: '3', title: 'Производство', desc: 'Изготавливаем на нашем заводе в Кемерово. Срок от 5 рабочих дней.' },
  { num: '4', title: 'Доставка', desc: 'Привозим, собираем, забираем старую мебель. Оплата — после сборки.' },
];

const HowWeWork = () => {
  return (
    <section className="section-padding bg-white" id="how">
      <div className="container-wide">
        <div className="text-center mb-14">
          <div className="section-heading justify-center">
            <div className="bracket-deco" />
            <div>
              <div className="text-4xl md:text-5xl font-black uppercase">КАК МЫ</div>
              <div className="text-4xl md:text-5xl font-black uppercase">РАБОТАЕМ</div>
              <div className="text-sm font-semibold uppercase tracking-widest text-gray-500 mt-1">ОТ ЗАЯВКИ ДО ГОТОВОЙ МЕБЕЛИ</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-l border-gray-200">
          {steps.map((step) => (
            <div key={step.num} className="border-b border-r border-gray-200 p-8 relative">
              <div className="text-6xl font-black text-green-brand/20 leading-none mb-4">{step.num}</div>
              <h3 className="font-black text-[15px] uppercase mb-3">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a href="#contact" className="btn-green">Начать заказ</a>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
