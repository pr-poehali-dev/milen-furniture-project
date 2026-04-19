const FinalCTA = () => {
  return (
    <section className="bg-blue-light py-20">
      <div className="container-wide text-center">
        <div className="section-heading justify-center mb-6">
          <div className="bracket-deco" />
          <div>
            <div className="text-4xl md:text-6xl font-black uppercase">ПОЧЕМУ</div>
            <div className="text-base font-semibold uppercase tracking-widest text-gray-500 mt-1">У НАС ДЕШЕВЛЕ</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-1 mt-12 mb-12">
          {[
            {
              num: '1',
              title: 'Собственное производство',
              desc: 'Вы получите мебель без наценок посредников и перекупщиков. Так же мы не тратим время на работу с ними, которое тоже стоит денег.',
            },
            {
              num: '2',
              title: 'Работаем напрямую с поставщиками материалов',
              desc: 'Являемся официальными дилерами крупных производителей тканей и фурнитуры.',
            },
            {
              num: '3',
              title: 'Гибкая ценовая политика',
              desc: 'Подберём вариант под ваш бюджет без потери качества. Рассрочка без процентов.',
            },
          ].map((item) => (
            <div key={item.num} className="bg-blue-light border border-gray-200 p-8 text-left">
              <div className="text-5xl font-black text-green-brand/30 mb-4 leading-none">{item.num}</div>
              <h3 className="font-black text-[14px] uppercase mb-3">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contact" className="btn-black px-12 py-5">РАССЧИТАТЬ СТОИМОСТЬ</a>
          <a href="tel:+73842000000" className="btn-outline-black px-12 py-4">+7 (3842) 00-00-00</a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
