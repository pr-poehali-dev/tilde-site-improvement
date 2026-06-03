import Icon from '@/components/ui/icon';

interface ContactsProps {
  onBooking: () => void;
  onConsult: () => void;
}

export default function ContactsSection({ onBooking, onConsult }: ContactsProps) {
  return (
    <section id="contacts" className="py-24 bg-[var(--dark)]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="gold-divider" />
              <span className="text-[var(--gold)] text-xs tracking-[0.4em] uppercase font-golos">
                Контакты
              </span>
            </div>

            <h2
              className="font-cormorant text-white mb-8"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, lineHeight: 1.1 }}
            >
              Приходите или<br />
              <span style={{ fontStyle: 'italic', color: 'var(--gold)' }}>звоните нам</span>
            </h2>

            <div className="space-y-6">
              {[
                {
                  icon: 'MapPin',
                  label: 'Адрес',
                  value: 'г. Тюмень, ул. Республики, 143, офис 305',
                  sub: 'Пн–Пт: 9:00–19:00 | Сб: 10:00–15:00',
                },
                {
                  icon: 'Phone',
                  label: 'Телефон',
                  value: '+7 (3452) 55-00-00',
                  sub: 'Работаем с 9:00 до 19:00',
                },
                {
                  icon: 'Mail',
                  label: 'Email',
                  value: 'info@tyumenjurist72.ru',
                  sub: 'Ответим в течение часа',
                },
                {
                  icon: 'MessageCircle',
                  label: 'WhatsApp / Telegram',
                  value: '+7 (999) 555-00-00',
                  sub: 'Удобный способ связи 24/7',
                },
              ].map((c, i) => (
                <div key={i} className="flex items-start gap-5">
                  <div className="w-10 h-10 rounded-full border border-[var(--gold)]/25 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name={c.icon} fallback="MapPin" size={16} className="text-[var(--gold)]" />
                  </div>
                  <div>
                    <div className="font-golos text-white/35 text-xs tracking-widest uppercase mb-1">
                      {c.label}
                    </div>
                    <div className="font-cormorant text-white text-xl">{c.value}</div>
                    <div className="font-golos text-white/40 text-xs mt-0.5">{c.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div
              className="p-8 border border-[var(--gold)]/15 hover:border-[var(--gold)]/30 transition-colors cursor-pointer group"
              onClick={onBooking}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-full bg-[var(--gold)]/10 border border-[var(--gold)]/25 flex items-center justify-center">
                  <Icon name="CalendarDays" size={18} className="text-[var(--gold)]" />
                </div>
                <Icon name="ArrowUpRight" size={20} className="text-white/20 group-hover:text-[var(--gold)] transition-colors" />
              </div>
              <h3 className="font-cormorant text-white text-2xl mb-2">Запись на приём</h3>
              <p className="font-golos text-white/40 text-sm leading-relaxed">
                Выберите удобное время и запишитесь к юристу. Подтверждение в течение 15 минут.
              </p>
            </div>

            <div
              className="p-8 border border-white/10 hover:border-[var(--gold)]/30 transition-colors cursor-pointer group"
              onClick={onConsult}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/15 flex items-center justify-center">
                  <Icon name="MessageSquare" size={18} className="text-white/50 group-hover:text-[var(--gold)] transition-colors" />
                </div>
                <Icon name="ArrowUpRight" size={20} className="text-white/20 group-hover:text-[var(--gold)] transition-colors" />
              </div>
              <h3 className="font-cormorant text-white text-2xl mb-2">Онлайн-консультация</h3>
              <p className="font-golos text-white/40 text-sm leading-relaxed">
                Задайте вопрос юристу онлайн. Опишите ситуацию — получите развёрнутый ответ.
              </p>
            </div>

            <div className="p-6 bg-white/3 border border-white/5">
              <p className="font-golos text-white/30 text-xs leading-relaxed text-center">
                Все консультации конфиденциальны. Ваши данные защищены и не передаются третьим лицам.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
