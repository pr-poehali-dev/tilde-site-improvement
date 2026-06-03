interface HeroProps {
  onBooking: () => void;
  onConsult: () => void;
}

export default function HeroSection({ onBooking, onConsult }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0d0b08 0%, #1a1510 50%, #0f0d0a 100%)',
      }}
    >
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url('https://cdn.poehali.dev/projects/7346caa0-9817-444d-a549-c129db9917d2/files/06b35072-eef7-467d-a18a-47401ee73d04.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center right',
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(90deg, rgba(13,11,8,0.97) 40%, rgba(13,11,8,0.5) 70%, rgba(13,11,8,0.2) 100%)',
        }}
      />

      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 60px,
            rgba(201,168,76,0.3) 60px,
            rgba(201,168,76,0.3) 61px
          ), repeating-linear-gradient(
            90deg,
            transparent,
            transparent 60px,
            rgba(201,168,76,0.3) 60px,
            rgba(201,168,76,0.3) 61px
          )`,
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-16">
        <div className="max-w-2xl">
          <div
            className="inline-flex items-center gap-3 mb-8 animate-fade-in opacity-0-init"
            style={{ animationFillMode: 'forwards' }}
          >
            <span className="gold-divider inline-block" />
            <span className="text-[var(--gold)] text-xs tracking-[0.4em] uppercase font-golos">
              Профессиональная юридическая помощь
            </span>
          </div>

          <h1
            className="font-cormorant text-white mb-6 animate-fade-in opacity-0-init animate-delay-200"
            style={{
              fontSize: 'clamp(3rem, 7vw, 5.5rem)',
              lineHeight: '1.05',
              fontWeight: 300,
              letterSpacing: '-0.01em',
              animationFillMode: 'forwards',
            }}
          >
            Защита ваших прав —<br />
            <span style={{ color: 'var(--gold)', fontStyle: 'italic' }}>
              наша миссия
            </span>
          </h1>

          <p
            className="text-white/60 text-lg leading-relaxed mb-10 font-golos max-w-xl animate-fade-in opacity-0-init animate-delay-300"
            style={{ animationFillMode: 'forwards' }}
          >
            Более 15 лет практики в гражданском, уголовном и административном праве.
            Индивидуальный подход к каждому делу. Работаем в Тюмени и Тюменской области.
          </p>

          <div
            className="flex flex-wrap gap-4 mb-16 animate-fade-in opacity-0-init animate-delay-400"
            style={{ animationFillMode: 'forwards' }}
          >
            <button
              onClick={onBooking}
              className="bg-[var(--gold)] text-[var(--dark)] px-8 py-4 text-sm tracking-widest uppercase font-semibold font-golos hover:bg-gold-400 transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/20 hover:-translate-y-0.5"
            >
              Записаться на приём
            </button>
            <button
              onClick={onConsult}
              className="border border-white/30 text-white px-8 py-4 text-sm tracking-widest uppercase font-semibold font-golos hover:border-[var(--gold)] hover:text-[var(--gold)] transition-all duration-300"
            >
              Онлайн-консультация
            </button>
          </div>

          <div
            className="grid grid-cols-3 gap-8 border-t border-white/10 pt-10 animate-fade-in opacity-0-init animate-delay-500"
            style={{ animationFillMode: 'forwards' }}
          >
            {[
              { num: '15+', label: 'лет практики' },
              { num: '800+', label: 'выигранных дел' },
              { num: '98%', label: 'довольных клиентов' },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  className="font-cormorant text-white mb-1"
                  style={{ fontSize: '2.5rem', fontWeight: 300, color: 'var(--gold)' }}
                >
                  {stat.num}
                </div>
                <div className="text-white/40 text-xs tracking-widest uppercase font-golos">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-px h-12 bg-gradient-to-b from-[var(--gold)] to-transparent mx-auto" />
      </div>
    </section>
  );
}
