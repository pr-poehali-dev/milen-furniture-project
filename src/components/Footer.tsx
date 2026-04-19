import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-graphite border-t border-white/8 py-12">
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex flex-col mb-4">
              <span className="font-display text-2xl font-semibold text-white tracking-wide">Милена</span>
              <span className="text-[10px] text-white/40 tracking-[0.15em] uppercase font-body">Мягкая мебель</span>
            </div>
            <p className="text-white/50 text-xs font-body leading-relaxed mb-4">
              Производитель мягкой мебели в Кемерово. Работаем с 2006 года.
            </p>
            <p className="text-white/30 text-xs font-body">ООО «Милена»</p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-white/40 text-xs font-semibold tracking-widest uppercase font-body mb-5">
              Каталог
            </p>
            <div className="space-y-3">
              {['Угловые диваны', 'Прямые диваны', 'Кровати', 'Мебель на заказ'].map((item) => (
                <a key={item} href="#categories" className="block text-white/60 text-sm font-body hover:text-white transition-colors">
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Info */}
          <div>
            <p className="text-white/40 text-xs font-semibold tracking-widest uppercase font-body mb-5">
              Компания
            </p>
            <div className="space-y-3">
              {['О производстве', 'Примеры работ', 'Гарантия', 'Доставка', 'Контакты'].map((item) => (
                <a key={item} href="#" className="block text-white/60 text-sm font-body hover:text-white transition-colors">
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Contacts */}
          <div>
            <p className="text-white/40 text-xs font-semibold tracking-widest uppercase font-body mb-5">
              Контакты
            </p>
            <div className="space-y-4">
              <a href="tel:+73842000000" className="flex items-center gap-2.5 text-white/80 text-sm font-body hover:text-white transition-colors">
                <Icon name="Phone" size={14} className="text-sand" />
                +7 (3842) 00-00-00
              </a>
              <a href="mailto:info@milena-mebel.ru" className="flex items-center gap-2.5 text-white/80 text-sm font-body hover:text-white transition-colors">
                <Icon name="Mail" size={14} className="text-sand" />
                info@milena-mebel.ru
              </a>
              <div className="flex items-start gap-2.5 text-white/60 text-sm font-body">
                <Icon name="Clock" size={14} className="text-sand flex-shrink-0 mt-0.5" />
                Ежедневно 10:00–20:00
              </div>
            </div>

            {/* Messengers */}
            <div className="flex gap-3 mt-5">
              <a href="#" className="w-9 h-9 rounded-lg bg-white/8 flex items-center justify-center hover:bg-sand/30 transition-colors">
                <Icon name="Send" size={15} className="text-white/70" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-white/8 flex items-center justify-center hover:bg-sand/30 transition-colors">
                <Icon name="MessageCircle" size={15} className="text-white/70" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-white/8 flex items-center justify-center hover:bg-sand/30 transition-colors">
                <Icon name="Instagram" size={15} className="text-white/70" fallback="Camera" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/8 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs font-body">
            © 2006–2026 ООО «Милена». Все права защищены.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white/30 text-xs font-body hover:text-white/60 transition-colors">
              Политика конфиденциальности
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
