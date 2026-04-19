import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/5 py-8">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs text-center md:text-left">
            © 2006–2026 ООО «Милена». Все права защищены. · Кемерово, Кузбасс
          </p>
          <div className="flex gap-6 items-center">
            <a href="#" className="text-white/30 text-xs hover:text-white/60 transition-colors">
              Политика конфиденциальности
            </a>
            <div className="flex gap-3">
              <a href="#" className="hover:opacity-60 transition-opacity">
                <Icon name="Send" size={16} className="text-white/30" />
              </a>
              <a href="#" className="hover:opacity-60 transition-opacity">
                <Icon name="MessageCircle" size={16} className="text-white/30" />
              </a>
              <a href="#" className="hover:opacity-60 transition-opacity">
                <Icon name="Camera" size={16} className="text-white/30" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
