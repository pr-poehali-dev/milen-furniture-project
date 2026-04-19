import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProduct } from '@/data/products';
import ImageZoomCarousel from '@/components/catalog/ImageZoomCarousel';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const product = getProduct(id || '');
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({});
  const [activeTab, setActiveTab] = useState<'description' | 'specs'>('description');
  const [visible, setVisible] = useState(false);
  const [stickyPrice, setStickyPrice] = useState(false);
  const priceRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => setVisible(true), 50);
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!product) return;
    const defaults: Record<string, string> = {};
    product.options.forEach(opt => { defaults[opt.label] = opt.values[0]; });
    setSelectedOptions(defaults);
  }, [product]);

  useEffect(() => {
    const handler = () => {
      if (priceRef.current) {
        setStickyPrice(priceRef.current.getBoundingClientRect().top < 0);
      }
    };
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <p className="text-xl font-bold">Товар не найден</p>
        <Link to="/catalog" className="btn-black">← Вернуться в каталог</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Sticky CTA bar */}
      <div className={`fixed bottom-0 left-0 right-0 z-40 bg-black text-white flex items-center justify-between px-5 py-3 transition-all duration-300 md:hidden ${stickyPrice ? 'translate-y-0' : 'translate-y-full'}`}>
        <div>
          <div className="font-black text-lg">{product.priceLabel}</div>
          <div className="text-xs text-white/60">Изготовление от 10 дней</div>
        </div>
        <a href="#order" className="btn-green text-sm px-6 py-2.5">Заказать</a>
      </div>

      <div className="pt-20">
        {/* Breadcrumb */}
        <div
          className={`container-wide py-4 transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3'}`}
        >
          <nav className="flex items-center gap-2 text-xs text-gray-400 uppercase tracking-wide">
            <Link to="/" className="hover:text-black transition-colors">Главная</Link>
            <Icon name="ChevronRight" size={12} />
            <Link to="/catalog" className="hover:text-black transition-colors">Каталог</Link>
            <Icon name="ChevronRight" size={12} />
            <span className="text-black font-semibold">{product.name}</span>
          </nav>
        </div>

        {/* Main product block */}
        <div className="container-wide pb-16">
          <div className="grid lg:grid-cols-2 gap-10 xl:gap-16">

            {/* Left — carousel */}
            <div
              className={`transition-all duration-700 delay-100 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
            >
              <ImageZoomCarousel images={product.images} />
            </div>

            {/* Right — info */}
            <div
              ref={priceRef}
              className={`transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
            >
              {product.badge && (
                <span className="inline-block bg-green-brand text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 mb-4">
                  {product.badge}
                </span>
              )}

              <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-1">{product.category}</p>
              <h1 className="text-4xl md:text-5xl font-black uppercase mb-1">{product.name}</h1>
              <p className="text-gray-500 text-base mb-6">{product.subtitle}</p>

              <div className="text-3xl font-black mb-1">{product.priceLabel}</div>
              <p className="text-xs text-gray-400 mb-8">Цена зависит от выбранной ткани и конфигурации</p>

              {/* Options */}
              <div className="space-y-5 mb-8">
                {product.options.map(opt => (
                  <div key={opt.label}>
                    <p className="text-xs font-bold uppercase tracking-wide mb-2 text-gray-600">
                      {opt.label}: <span className="text-black">{selectedOptions[opt.label]}</span>
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {opt.values.map(val => (
                        <button
                          key={val}
                          onClick={() => setSelectedOptions(prev => ({ ...prev, [opt.label]: val }))}
                          className={`px-3.5 py-2 text-xs font-semibold border transition-all duration-150 ${
                            selectedOptions[opt.label] === val
                              ? 'bg-black text-white border-black'
                              : 'bg-white text-black border-gray-200 hover:border-black'
                          }`}
                        >
                          {val}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div id="order" className="flex flex-col sm:flex-row gap-3 mb-8">
                <a href="#contact-section" className="btn-black flex-1 text-center py-4">
                  Заказать диван
                </a>
                <a href="tel:+73842000000" className="btn-outline-black flex-1 text-center py-4">
                  Позвонить
                </a>
              </div>

              {/* Trust signals */}
              <div className="grid grid-cols-3 gap-3 border-t border-gray-100 pt-6">
                {[
                  { icon: 'Shield', text: 'Гарантия 3 года' },
                  { icon: 'Truck', text: 'Доставка бесплатно' },
                  { icon: 'RotateCcw', text: 'Оплата после сборки' },
                ].map(item => (
                  <div key={item.text} className="flex flex-col items-center gap-1.5 text-center">
                    <Icon name={item.icon} size={20} className="text-green-brand" fallback="Check" />
                    <span className="text-[11px] text-gray-500 leading-tight">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tabs: description / specs */}
          <div
            className={`mt-14 transition-all duration-700 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div className="flex border-b border-gray-200 mb-8">
              {(['description', 'specs'] as const).map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 text-xs font-bold uppercase tracking-widest transition-all border-b-2 -mb-[2px] ${
                    activeTab === tab
                      ? 'border-black text-black'
                      : 'border-transparent text-gray-400 hover:text-black'
                  }`}
                >
                  {tab === 'description' ? 'Описание' : 'Характеристики'}
                </button>
              ))}
            </div>

            {activeTab === 'description' && (
              <div className="grid md:grid-cols-2 gap-10">
                <div>
                  <p className="text-gray-600 leading-relaxed text-sm mb-6">{product.description}</p>
                  <ul className="space-y-3">
                    {product.features.map(f => (
                      <li key={f} className="flex items-start gap-3">
                        <div className="w-4 h-4 border border-green-brand flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Icon name="Check" size={10} className="text-green-brand" />
                        </div>
                        <span className="text-sm text-gray-700">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-blue-light p-8">
                  <h3 className="font-black text-sm uppercase tracking-wide mb-4">Изготовим под вас</h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-6">
                    Этот диван можно заказать в любых размерах, цветах и конфигурациях.
                    Наш мастер-консультант поможет подобрать ткань и механизм под ваш интерьер.
                  </p>
                  <a href="tel:+73842000000" className="btn-green block text-center">
                    Консультация бесплатно
                  </a>
                </div>
              </div>
            )}

            {activeTab === 'specs' && (
              <div className="max-w-2xl">
                <table className="w-full">
                  <tbody>
                    {product.specs.map((spec, i) => (
                      <tr key={spec.label} className={i % 2 === 0 ? 'bg-blue-light' : 'bg-white'}>
                        <td className="py-3 px-4 text-xs font-bold uppercase tracking-wide text-gray-500 w-1/2">{spec.label}</td>
                        <td className="py-3 px-4 text-sm font-semibold">{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>

        {/* Contact section */}
        <div id="contact-section" className="bg-green-brand py-16">
          <div className="container-wide text-center">
            <h2 className="text-3xl md:text-4xl font-black uppercase text-white mb-3">Хотите этот диван?</h2>
            <p className="text-white/70 text-sm mb-8">Оставьте заявку — рассчитаем стоимость и обсудим детали</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <a href="tel:+73842000000" className="btn-black flex-1 text-center py-4">
                +7 (3842) 00-00-00
              </a>
              <Link to="/#contact" className="btn-outline-black flex-1 text-center py-4 border-white/40 text-white hover:bg-white hover:text-black" style={{ borderColor: 'rgba(255,255,255,0.4)' }}>
                Написать
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductPage;
