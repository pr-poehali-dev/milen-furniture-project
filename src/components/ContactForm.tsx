import { useState } from 'react';
import Icon from '@/components/ui/icon';

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', phone: '', agree: true });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section className="bg-green-brand" id="contact">
      <div className="grid lg:grid-cols-2 min-h-[500px]">
        {/* Left: brand + contacts */}
        <div className="px-8 md:px-14 py-16 flex flex-col justify-between">
          <div>
            <div className="border-2 border-white w-14 h-14 flex flex-col items-center justify-center mb-8 leading-none gap-0">
              <span className="text-[10px] font-black tracking-widest text-white">МИ</span>
              <span className="text-[10px] font-black tracking-widest text-white">ЛЕ</span>
              <span className="text-[8px] font-black tracking-[0.2em] text-white">НА</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-black uppercase text-white mb-3">
              Ждём ваших идей,<br />свяжитесь с нами
            </h2>
            <a href="tel:+73842000000" className="text-2xl font-black text-white hover:text-white/80 transition-colors block mb-8">
              +7 (3842) 00-00-00
            </a>

            <div className="flex gap-4 flex-wrap">
              {[
                { icon: 'MessageCircle', label: 'WhatsApp', href: '#' },
                { icon: 'Send', label: 'Telegram', href: '#' },
                { icon: 'Camera', label: 'Instagram', href: '#' },
              ].map((s) => (
                <a key={s.label} href={s.href} className="flex items-center gap-2 text-white/80 hover:text-white text-sm font-semibold transition-colors">
                  <Icon name={s.icon} size={16} fallback="Link" />
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <p className="text-white/40 text-xs mt-10">Нажмите ↗</p>
        </div>

        {/* Right: form on dark background */}
        <div className="bg-black px-8 md:px-14 py-16 flex flex-col justify-center relative overflow-hidden">
          {/* Decorative plant-like element */}
          <div className="absolute -right-10 top-10 opacity-5 text-white text-[200px] select-none pointer-events-none">🌿</div>

          {sent ? (
            <div className="text-center py-8">
              <Icon name="CheckCircle" size={40} className="text-green-brand mx-auto mb-4" />
              <h3 className="text-2xl font-black text-white uppercase mb-2">Заявка принята!</h3>
              <p className="text-white/60 text-sm">
                Свяжемся в течение 30 минут.<br />
                Телефон: <a href="tel:+73842000000" className="text-green-brand font-bold">+7 (3842) 00-00-00</a>
              </p>
            </div>
          ) : (
            <>
              <h3 className="text-2xl font-black text-white uppercase mb-8">Или оставьте заявку</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  required
                  placeholder="Имя"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-white text-black px-4 py-4 text-sm font-medium placeholder-gray-400 outline-none focus:ring-2 focus:ring-green-brand"
                />
                <input
                  type="tel"
                  required
                  placeholder="Телефон"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full bg-white text-black px-4 py-4 text-sm font-medium placeholder-gray-400 outline-none focus:ring-2 focus:ring-green-brand"
                />
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={form.agree}
                    onChange={(e) => setForm({ ...form, agree: e.target.checked })}
                    className="mt-1 accent-green-600"
                    required
                  />
                  <span className="text-white/50 text-xs leading-relaxed">
                    Я согласен на обработку персональных данных
                  </span>
                </label>

                <button type="submit" className="btn-black w-full py-4 text-center">
                  ОТПРАВИТЬ
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
