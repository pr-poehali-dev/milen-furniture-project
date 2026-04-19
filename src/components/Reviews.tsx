import Icon from '@/components/ui/icon';

const reviews = [
  {
    name: 'Марина К.',
    city: 'Кемерово',
    rating: 5,
    text: 'Заказывала угловой диван под нестандартный проём — 298 см. Всё сделали точно в размер, ткань подобрали под цвет штор. Доставили и собрали за 2 часа. Очень довольна!',
    date: 'март 2025',
  },
  {
    name: 'Сергей В.',
    city: 'Новокузнецк',
    rating: 5,
    text: 'Брали кровать 180×200 с подъёмным механизмом. Качество отличное — никаких скрипов, механизм работает плавно. Прошло уже 8 месяцев, всё как новое.',
    date: 'январь 2025',
  },
  {
    name: 'Елена Д.',
    city: 'Кемерово',
    rating: 5,
    text: 'Делали диван по фото из Pinterest. Менеджер помогла подобрать ткань, показали 3D-визуализацию заранее. Готовый диван выглядит лучше, чем на картинке!',
    date: 'февраль 2025',
  },
  {
    name: 'Алексей Р.',
    city: 'Ленинск-Кузнецкий',
    rating: 5,
    text: 'Порадовало, что оплата после доставки — без риска. Привезли точно в срок, собрали аккуратно, старый диван вывезли. Отличный сервис.',
    date: 'апрель 2025',
  },
];

const Reviews = () => {
  return (
    <section className="section-padding bg-beige" id="reviews">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-sand text-sm font-semibold tracking-widest uppercase font-body mb-3">
            Отзывы
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-graphite leading-tight mb-4">
            Что говорят клиенты
          </h2>
          <p className="text-warm-gray font-body text-base max-w-md mx-auto">
            Более 2000 выполненных заказов с 2006 года. Большинство клиентов приходят повторно или по рекомендации.
          </p>
        </div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-14">
          {reviews.map((review) => (
            <div key={review.name} className="bg-white rounded-2xl p-6 border border-beige-dark/30">
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Icon key={i} name="Star" size={14} className="text-sand fill-current" />
                ))}
              </div>
              {/* Text */}
              <p className="text-graphite-light text-sm font-body leading-relaxed mb-5">
                «{review.text}»
              </p>
              {/* Author */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-graphite text-sm font-body">{review.name}</p>
                  <p className="text-warm-gray text-xs font-body">{review.city}</p>
                </div>
                <span className="text-warm-gray text-xs font-body">{review.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: 'Award', title: 'Гарантия до 3 лет', desc: 'На всю продукцию' },
            { icon: 'Factory', title: 'Своё производство', desc: 'С 2006 года' },
            { icon: 'Users', title: '2000+ заказов', desc: 'Выполнено' },
            { icon: 'ThumbsUp', title: 'Оплата после', desc: 'Без предоплаты' },
          ].map((badge) => (
            <div key={badge.title} className="bg-white rounded-2xl p-5 text-center border border-beige-dark/30">
              <Icon name={badge.icon} size={28} className="text-sand mx-auto mb-3" fallback="Star" />
              <p className="font-semibold text-graphite text-sm font-body">{badge.title}</p>
              <p className="text-warm-gray text-xs font-body mt-1">{badge.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
