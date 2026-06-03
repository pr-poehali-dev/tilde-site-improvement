import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';

interface NavBarProps {
  onBooking: () => void;
}

export default function NavBar({ onBooking }: NavBarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-[var(--dark)] shadow-2xl py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <div
          className="font-cormorant text-white cursor-pointer"
          onClick={() => scrollTo('hero')}
        >
          <div className="text-xl font-semibold tracking-widest uppercase text-gold-500">Юрист</div>
          <div className="text-xs tracking-[0.3em] text-white/50 uppercase">Тюмень</div>
        </div>

        <nav className="hidden md:flex items-center gap-8">
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
              className="text-white/70 hover:text-[var(--gold)] transition-colors duration-300 text-sm tracking-widest uppercase font-golos"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button
          onClick={onBooking}
          className="hidden md:block bg-[var(--gold)] text-[var(--dark)] px-6 py-2 text-xs tracking-widest uppercase font-semibold font-golos hover:bg-gold-400 transition-colors duration-300"
        >
          Записаться
        </button>

        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Icon name={menuOpen ? 'X' : 'Menu'} size={24} />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[var(--dark)] border-t border-white/10 px-6 py-4 flex flex-col gap-4">
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
              className="text-white/70 hover:text-[var(--gold)] text-left text-sm tracking-widest uppercase font-golos py-1"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => { onBooking(); setMenuOpen(false); }}
            className="bg-[var(--gold)] text-[var(--dark)] px-6 py-3 text-xs tracking-widest uppercase font-semibold font-golos mt-2"
          >
            Записаться на приём
          </button>
        </div>
      )}
    </header>
  );
}
