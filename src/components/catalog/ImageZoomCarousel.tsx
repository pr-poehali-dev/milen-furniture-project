import { useState, useRef, useCallback, useEffect } from 'react';
import Icon from '@/components/ui/icon';

interface Props {
  images: { url: string; alt: string }[];
}

const ImageZoomCarousel = ({ images }: Props) => {
  const [current, setCurrent] = useState(0);
  const [zoomed, setZoomed] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [animDir, setAnimDir] = useState<'left' | 'right' | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const goTo = useCallback((idx: number, dir: 'left' | 'right') => {
    if (isAnimating) return;
    setAnimDir(dir);
    setIsAnimating(true);
    setZoomed(false);
    setZoomLevel(1);
    setOffset({ x: 0, y: 0 });
    setTimeout(() => {
      setCurrent(idx);
      setAnimDir(null);
      setIsAnimating(false);
    }, 320);
  }, [isAnimating]);

  const prev = useCallback(() => goTo(current === 0 ? images.length - 1 : current - 1, 'right'), [current, images.length, goTo]);
  const next = useCallback(() => goTo(current === images.length - 1 ? 0 : current + 1, 'left'), [current, images.length, goTo]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'Escape') { setZoomed(false); setZoomLevel(1); setOffset({ x: 0, y: 0 }); }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [prev, next]);

  const handleWheel = useCallback((e: React.WheelEvent) => {
    e.preventDefault();
    setZoomLevel(prev => {
      const next = prev - e.deltaY * 0.005;
      const clamped = Math.max(1, Math.min(4, next));
      if (clamped === 1) { setOffset({ x: 0, y: 0 }); setZoomed(false); }
      else setZoomed(true);
      return clamped;
    });
  }, []);

  const handleDoubleClick = useCallback((e: React.MouseEvent) => {
    if (zoomLevel > 1) {
      setZoomLevel(1);
      setOffset({ x: 0, y: 0 });
      setZoomed(false);
    } else {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      const cx = e.clientX - rect.left - rect.width / 2;
      const cy = e.clientY - rect.top - rect.height / 2;
      setOffset({ x: -cx, y: -cy });
      setZoomLevel(2.5);
      setZoomed(true);
    }
  }, [zoomLevel]);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (!zoomed) return;
    setIsDragging(true);
    setDragStart({ x: e.clientX - offset.x, y: e.clientY - offset.y });
  }, [zoomed, offset]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging) return;
    setOffset({ x: e.clientX - dragStart.x, y: e.clientY - dragStart.y });
  }, [isDragging, dragStart]);

  const handleMouseUp = useCallback(() => setIsDragging(false), []);

  const touchStart = useRef<number | null>(null);
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStart.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart.current === null || zoomed) return;
    const diff = touchStart.current - e.changedTouches[0].clientX;
    if (diff > 50) next();
    else if (diff < -50) prev();
    touchStart.current = null;
  };

  const slideStyle: React.CSSProperties = {
    transform: `translateX(${animDir === 'left' ? '-8%' : animDir === 'right' ? '8%' : '0'})`,
    opacity: animDir ? 0 : 1,
    transition: 'transform 0.32s cubic-bezier(0.4,0,0.2,1), opacity 0.32s ease',
  };

  const imgStyle: React.CSSProperties = {
    transform: `scale(${zoomLevel}) translate(${offset.x / zoomLevel}px, ${offset.y / zoomLevel}px)`,
    transition: isDragging ? 'none' : 'transform 0.25s cubic-bezier(0.4,0,0.2,1)',
    cursor: zoomed ? (isDragging ? 'grabbing' : 'grab') : 'zoom-in',
  };

  return (
    <div className="select-none">
      <div
        ref={containerRef}
        className="relative overflow-hidden bg-[#f5f5f5] aspect-[4/3]"
        onWheel={handleWheel}
        onDoubleClick={handleDoubleClick}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="w-full h-full" style={slideStyle}>
          <img
            ref={imgRef}
            src={images[current].url}
            alt={images[current].alt}
            className="w-full h-full object-cover"
            style={imgStyle}
            draggable={false}
          />
        </div>

        {!zoomed && (
          <div className="absolute bottom-3 right-3 bg-black/50 text-white text-[10px] px-2.5 py-1.5 uppercase tracking-wide font-semibold pointer-events-none">
            ⊕ Дважды кликни для зума
          </div>
        )}
        {zoomed && (
          <div className="absolute bottom-3 right-3 bg-green-brand text-white text-[10px] px-2.5 py-1.5 uppercase tracking-wide font-semibold pointer-events-none">
            {Math.round(zoomLevel * 100)}%
          </div>
        )}

        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white flex items-center justify-center transition-all hover:scale-110 shadow-md z-10"
            >
              <Icon name="ChevronLeft" size={20} />
            </button>
            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white flex items-center justify-center transition-all hover:scale-110 shadow-md z-10"
            >
              <Icon name="ChevronRight" size={20} />
            </button>
          </>
        )}

        <div className="absolute top-3 left-3 bg-black/60 text-white text-xs px-2.5 py-1 font-semibold">
          {current + 1} / {images.length}
        </div>
      </div>

      {images.length > 1 && (
        <div className="flex gap-2 mt-3">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => goTo(i, i > current ? 'left' : 'right')}
              className={`flex-1 aspect-square overflow-hidden transition-all duration-200 ${
                i === current
                  ? 'ring-2 ring-black ring-offset-1 opacity-100'
                  : 'opacity-45 hover:opacity-75'
              }`}
            >
              <img src={img.url} alt={img.alt} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageZoomCarousel;
