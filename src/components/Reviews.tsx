import Icon from '@/components/ui/icon';

const reviews = [
  {
    name: 'Марина К.',
    city: 'Кемерово',
    rating: 5,
    text: 'Заказывала угловой диван под нестандартный проём — 298 см. Всё сделали точно в размер, ткань подобрали под цвет штор. Очень довольна!',
    date: 'март 2025',
  },
  {
    name: 'Сергей В.',
    city: 'Новокузнецк',
    rating: 5,
    text: 'Брали кровать 180×200 с подъёмным механизмом. Качество отличное — никаких скрипов. Прошло уже 8 месяцев, всё как новое.',
    date: 'январь 2025',
  },
  {
    name: 'Елена Д.',
    city: 'Кемерово',
    rating: 5,
    text: 'Делали диван по фото из Pinterest. Показали 3D-визуализацию заранее. Готовый диван выглядит лучше, чем на картинке!',
    date: 'февраль 2025',
  },
  {
    name: 'Алексей Р.',
    city: 'Ленинск-Кузнецкий',
    rating: 5,
    text: 'Порадовало, что оплата после доставки — без риска. Привезли точно в срок, собрали аккуратно, старый диван вывезли.',
    date: 'апрель 2025',
  },
];

const Reviews = () => {
  return (
    <section className="section-padding bg-blue-light" id="reviews">
      <div className="container-wide">
        <div className="text-center mb-14">
          <div className="section-heading justify-center">
            <div className="bracket-deco" />
            <div>
              <div className="text-4xl md:text-5xl font-black uppercase">ОТЗЫВЫ</div>
              <div className="text-sm font-semibold uppercase tracking-widest text-gray-500 mt-1">ЧТО ГОВОРЯТ КЛИЕНТЫ</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 mb-12">
          {reviews.map((r) => (
            <div key={r.name} className="bg-white p-8">
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <Icon key={i} name="Star" size={14} className="text-green-brand" />
                ))}
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-6">«{r.text}»</p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-bold text-sm uppercase">{r.name}</div>
                  <div className="text-gray-400 text-xs">{r.city}</div>
                </div>
                <span className="text-gray-300 text-xs">{r.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Trust row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
          {[
            { icon: 'Award', v: '3 года', l: 'гарантия' },
            { icon: 'Factory', v: 'с 2006', l: 'на рынке' },
            { icon: 'Users', v: '2000+', l: 'заказов' },
            { icon: 'ThumbsUp', v: 'после', l: 'оплата' },
          ].map((b) => (
            <div key={b.l} className="bg-white p-6 text-center">
              <Icon name={b.icon} size={26} className="text-green-brand mx-auto mb-3" fallback="Star" />
              <div className="font-black text-xl uppercase">{b.v}</div>
              <div className="text-gray-400 text-xs uppercase tracking-wide mt-1">{b.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
