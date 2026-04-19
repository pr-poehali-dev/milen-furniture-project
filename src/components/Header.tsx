import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-200 ${scrolled ? 'shadow-sm' : ''}`}>
      <div className="container-wide">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo — cube-style square */}
          <a href="#" className="flex-shrink-0">
            <div className="border-2 border-black w-12 h-12 flex flex-col items-center justify-center leading-none gap-0">
              <span className="text-[9px] font-black tracking-widest">МИ</span>
              <span className="text-[9px] font-black tracking-widest">ЛЕ</span>
              <span className="text-[7px] font-black tracking-[0.2em]">НА</span>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <a href="#categories" className="nav-link">Каталог ▾</a>
            <a href="#custom" className="nav-link">На заказ ▾</a>
            <a href="#works" className="nav-link">Портфолио</a>
            <a href="#salons" className="nav-link">Салоны</a>
          </nav>

          {/* Phone + socials */}
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+73842000000" className="font-bold text-[15px] text-black hover:text-green-brand transition-colors">
              +7 (3842) 00-00-00
            </a>
            <div className="flex items-center gap-1.5">
              <a href="#" className="hover:opacity-60 transition-opacity"><Icon name="Send" size={18} className="text-sky-500" /></a>
              <a href="#" className="hover:opacity-60 transition-opacity"><Icon name="MessageCircle" size={18} className="text-green-500" /></a>
              <a href="#" className="hover:opacity-60 transition-opacity"><Icon name="Camera" size={18} className="text-pink-500" /></a>
            </div>
          </div>

          <button className="lg:hidden p-2" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? 'X' : 'Menu'} size={22} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 py-6 space-y-4">
          {[['Каталог', '#categories'], ['На заказ', '#custom'], ['Портфолио', '#works'], ['Салоны', '#salons']].map(([label, href]) => (
            <a key={label} href={href} className="block nav-link py-1.5" onClick={() => setMenuOpen(false)}>{label}</a>
          ))}
          <div className="pt-3 border-t border-gray-100">
            <a href="tel:+73842000000" className="font-bold text-base">+7 (3842) 00-00-00</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
