export default function FooterSection() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer style={{ backgroundColor: '#0a0e14', borderTop: '1px solid rgba(255,255,255,0.05)' }} className="py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div
            className="font-cormorant text-white cursor-pointer"
            onClick={() => scrollTo('hero')}
          >
            <div className="text-lg font-semibold tracking-widest uppercase" style={{ color: 'var(--brand)' }}>
              РЕСПЕКТ
            </div>
            <div className="text-xs tracking-[0.2em] uppercase mt-0.5" style={{ color: 'rgba(255,255,255,0.25)' }}>
              ООО «Юридическая Финансовая Компания»
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
                className="text-xs tracking-widest uppercase font-golos transition-colors"
                style={{ color: 'rgba(255,255,255,0.25)' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.color = 'var(--brand)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.color = 'rgba(255,255,255,0.25)'; }}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="text-xs font-golos text-center md:text-right" style={{ color: 'rgba(255,255,255,0.2)' }}>
            <div>© 2024 ООО «ЮФК РЕСПЕКТ»</div>
            <div className="mt-1">Все права защищены</div>
          </div>
        </div>
      </div>
    </footer>
  );
}