import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Диваны', href: '#categories' },
    { label: 'Кровати', href: '#categories' },
    { label: 'На заказ', href: '#custom' },
    { label: 'Примеры работ', href: '#works' },
    { label: 'Салоны', href: '#salons' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-sm border-b border-beige-dark/30'
          : 'bg-transparent'
      }`}
    >
      <div className="container-wide">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex flex-col leading-none group">
            <span className="font-display text-2xl md:text-3xl font-semibold text-graphite tracking-wide">
              Милена
            </span>
            <span className="text-[10px] text-warm-gray tracking-[0.15em] uppercase font-body">
              Мягкая мебель
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="nav-link text-sm font-medium font-body">
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA + Phone */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+73842000000"
              className="flex items-center gap-2 text-sm font-medium text-graphite-light hover:text-graphite transition-colors"
            >
              <Icon name="Phone" size={15} />
              <span>+7 (3842) 00-00-00</span>
            </a>
            <a
              href="#contact"
              className="btn-sand px-5 py-2.5 rounded-lg text-sm font-semibold font-body"
            >
              Рассчитать стоимость
            </a>
          </div>

          {/* Mobile burger */}
          <button
            className="lg:hidden p-2 text-graphite"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Меню"
          >
            <Icon name={menuOpen ? 'X' : 'Menu'} size={22} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-beige-dark/30 px-4 py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block text-base font-medium text-graphite-light py-1"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4 border-t border-beige space-y-3">
            <a href="tel:+73842000000" className="flex items-center gap-2 text-graphite font-medium">
              <Icon name="Phone" size={16} />
              +7 (3842) 00-00-00
            </a>
            <a href="#contact" className="btn-sand block text-center px-5 py-3 rounded-lg text-sm font-semibold">
              Рассчитать стоимость
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
