import { useState } from 'react';
import Icon from '@/components/ui/icon';

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', phone: '', message: '', type: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: подключить бэкенд для отправки заявок
    setSent(true);
  };

  const types = ['Угловой диван', 'Прямой диван', 'Кровать', 'На заказ', 'Другое'];

  return (
    <section className="section-padding bg-milk" id="contact">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left */}
          <div>
            <p className="text-sand text-sm font-semibold tracking-widest uppercase font-body mb-3">
              Заявка
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-graphite leading-tight mb-5">
              Рассчитайте
              <br />стоимость бесплатно
            </h2>
            <p className="text-warm-gray font-body text-base leading-relaxed mb-8">
              Оставьте заявку — и мы свяжемся с вами в течение 30 минут. Расскажем цену, 
              сроки и ответим на все вопросы.
            </p>

            <div className="space-y-4">
              {[
                { icon: 'Clock', text: 'Ответим в течение 30 минут' },
                { icon: 'Shield', text: 'Без обязательств — только консультация' },
                { icon: 'Video', text: 'Можно провести видеоконсультацию' },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-sand/15 flex items-center justify-center flex-shrink-0">
                    <Icon name={item.icon} size={15} className="text-sand" fallback="Check" />
                  </div>
                  <span className="text-graphite-light text-sm font-body">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-beige-dark/30">
            {sent ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-sand/15 flex items-center justify-center mx-auto mb-5">
                  <Icon name="CheckCircle" size={32} className="text-sand" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-graphite mb-3">Заявка принята!</h3>
                <p className="text-warm-gray font-body text-sm leading-relaxed">
                  Мы свяжемся с вами в течение 30 минут в рабочее время.
                  <br />Наш телефон: <a href="tel:+73842000000" className="text-sand font-semibold">+7 (3842) 00-00-00</a>
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-semibold text-graphite-light uppercase tracking-wide mb-2 font-body">
                    Ваше имя
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Как вас зовут?"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl border border-beige-dark/50 bg-milk text-graphite placeholder-warm-gray text-sm font-body focus:outline-none focus:border-sand focus:ring-2 focus:ring-sand/20 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-graphite-light uppercase tracking-wide mb-2 font-body">
                    Телефон
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+7 (___) ___-__-__"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl border border-beige-dark/50 bg-milk text-graphite placeholder-warm-gray text-sm font-body focus:outline-none focus:border-sand focus:ring-2 focus:ring-sand/20 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-graphite-light uppercase tracking-wide mb-2 font-body">
                    Что интересует?
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {types.map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setForm({ ...form, type: t })}
                        className={`px-4 py-2 rounded-lg text-xs font-semibold font-body border transition-all ${
                          form.type === t
                            ? 'bg-sand text-white border-sand'
                            : 'bg-milk text-graphite-light border-beige-dark/50 hover:border-sand/60'
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-graphite-light uppercase tracking-wide mb-2 font-body">
                    Комментарий (необязательно)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Размеры, цвет, пожелания..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl border border-beige-dark/50 bg-milk text-graphite placeholder-warm-gray text-sm font-body focus:outline-none focus:border-sand focus:ring-2 focus:ring-sand/20 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-sand w-full py-4 rounded-xl text-base font-semibold font-body flex items-center justify-center gap-2"
                >
                  Получить расчёт стоимости
                  <Icon name="ArrowRight" size={18} />
                </button>

                <p className="text-warm-gray text-xs font-body text-center">
                  Нажимая кнопку, вы соглашаетесь на обработку персональных данных
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
