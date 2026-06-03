export default function FooterSection() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-black border-t border-white/5 py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div
            className="font-cormorant text-white cursor-pointer"
            onClick={() => scrollTo('hero')}
          >
            <div className="text-lg font-semibold tracking-widest uppercase" style={{ color: 'var(--gold)' }}>
              Юрист в Тюмени
            </div>
            <div className="text-xs tracking-[0.3em] text-white/30 uppercase">
              Профессиональная защита прав
            </div>
          </div>

          <nav className="flex flex-wrap justify-center gap-6">
            {[
              { label: 'Главная', id: 'hero' },
              { label: 'Практика', id: 'practice' },
              { label: 'Услуги', id: 'services' },
              { label: 'Обо мне', id: 'about' },
              { label: 'Контакты', id: 'contacts' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-white/30 hover:text-[var(--gold)] transition-colors text-xs tracking-widest uppercase font-golos"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="text-white/20 text-xs font-golos text-center md:text-right">
            <div>© 2024 Юрист в Тюмени</div>
            <div className="mt-1">Все права защищены</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
