const photos = [
  'https://cdn.poehali.dev/projects/0f55b065-18d0-4e34-b9d4-06970c3f84ce/files/a1bee713-f30a-4550-991e-cef8a3d7aea0.jpg',
  'https://cdn.poehali.dev/projects/0f55b065-18d0-4e34-b9d4-06970c3f84ce/files/33a0d342-c13f-4536-8c8d-96840ef38d2f.jpg',
  'https://cdn.poehali.dev/projects/0f55b065-18d0-4e34-b9d4-06970c3f84ce/files/ac6dcd3b-6f29-4a61-bfa7-8d2a6e8a2778.jpg',
  'https://cdn.poehali.dev/projects/0f55b065-18d0-4e34-b9d4-06970c3f84ce/files/a1bee713-f30a-4550-991e-cef8a3d7aea0.jpg',
  'https://cdn.poehali.dev/projects/0f55b065-18d0-4e34-b9d4-06970c3f84ce/files/33a0d342-c13f-4536-8c8d-96840ef38d2f.jpg',
  'https://cdn.poehali.dev/projects/0f55b065-18d0-4e34-b9d4-06970c3f84ce/files/ac6dcd3b-6f29-4a61-bfa7-8d2a6e8a2778.jpg',
  'https://cdn.poehali.dev/projects/0f55b065-18d0-4e34-b9d4-06970c3f84ce/files/a1bee713-f30a-4550-991e-cef8a3d7aea0.jpg',
  'https://cdn.poehali.dev/projects/0f55b065-18d0-4e34-b9d4-06970c3f84ce/files/33a0d342-c13f-4536-8c8d-96840ef38d2f.jpg',
  'https://cdn.poehali.dev/projects/0f55b065-18d0-4e34-b9d4-06970c3f84ce/files/ac6dcd3b-6f29-4a61-bfa7-8d2a6e8a2778.jpg',
  'https://cdn.poehali.dev/projects/0f55b065-18d0-4e34-b9d4-06970c3f84ce/files/a1bee713-f30a-4550-991e-cef8a3d7aea0.jpg',
  'https://cdn.poehali.dev/projects/0f55b065-18d0-4e34-b9d4-06970c3f84ce/files/33a0d342-c13f-4536-8c8d-96840ef38d2f.jpg',
  'https://cdn.poehali.dev/projects/0f55b065-18d0-4e34-b9d4-06970c3f84ce/files/ac6dcd3b-6f29-4a61-bfa7-8d2a6e8a2778.jpg',
];

const Works = () => {
  return (
    <section className="section-padding bg-white" id="works">
      <div className="container-wide mb-12">
        <div className="text-center">
          <div className="section-heading justify-center">
            <div className="bracket-deco" />
            <div>
              <div className="text-4xl md:text-5xl font-black uppercase">ПОРТФОЛИО</div>
              <div className="text-base font-semibold uppercase tracking-widest text-gray-500 mt-1">
                ИЗГОТОВЛЕННЫХ ДИВАНОВ И КРОВАТЕЙ НА ЗАКАЗ
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pure photo grid — 4 cols, minimal gap, like the reference */}
      <div className="portfolio-grid px-2 md:px-4">
        {photos.map((src, i) => (
          <div key={i} className="portfolio-item">
            <img src={src} alt={`Работа ${i + 1}`} />
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <a href="#contact" className="btn-black">Хочу такую же мебель</a>
      </div>
    </section>
  );
};

export default Works;
