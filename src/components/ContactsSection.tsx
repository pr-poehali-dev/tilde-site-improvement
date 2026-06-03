import Icon from '@/components/ui/icon';

interface ContactsProps {
  onBooking: () => void;
  onConsult: () => void;
}

export default function ContactsSection({ onBooking, onConsult }: ContactsProps) {
  return (
    <section id="contacts" className="py-24" style={{ backgroundColor: 'var(--dark)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span style={{ width: '60px', height: '2px', background: 'var(--brand)', display: 'block' }} />
              <span className="text-xs tracking-[0.4em] uppercase font-golos" style={{ color: 'var(--brand)' }}>
                Контакты
              </span>
            </div>

            <h2
              className="font-cormorant text-white mb-2"
              style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.5rem)', fontWeight: 400, lineHeight: 1.1 }}
            >
              ООО «Юридическая<br />Финансовая Компания<br />
              <span style={{ fontStyle: 'italic', color: 'var(--brand)' }}>РЕСПЕКТ»</span>
            </h2>
            <p className="font-golos text-sm mb-8" style={{ color: '#808080' }}>
              Приходите или звоните — поможем разобраться в любой ситуации
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: 'MapPin',
                  label: 'Адрес',
                  value: 'г. Тюмень, ул. Республики, 143, офис 305',
                  sub: 'Приём ведётся только по предварительной записи',
                },
                {
                  icon: 'Phone',
                  label: 'Телефон',
                  value: '+7 904 492-42-14',
                  sub: 'Звоните — расскажем, чем поможем',
                },
                {
                  icon: 'Mail',
                  label: 'Email',
                  value: 'tyumenjurist@yandex.ru',
                  sub: 'Ответим в течение часа',
                },
              ].map((c, i) => (
                <div key={i} className="flex items-start gap-5">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ border: '1px solid rgba(27,79,138,0.35)' }}
                  >
                    <Icon name={c.icon} fallback="MapPin" size={16} style={{ color: 'var(--brand)' }} />
                  </div>
                  <div>
                    <div className="font-golos text-xs tracking-widest uppercase mb-1" style={{ color: '#808080' }}>
                      {c.label}
                    </div>
                    <div className="font-cormorant text-white text-xl">{c.value}</div>
                    <div className="font-golos text-xs mt-0.5" style={{ color: '#808080' }}>{c.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div
              className="p-8 border cursor-pointer group transition-colors"
              style={{ borderColor: 'rgba(27,79,138,0.3)' }}
              onClick={onBooking}
            >
              <div className="flex items-center justify-between mb-4">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(27,79,138,0.15)', border: '1px solid rgba(27,79,138,0.3)' }}
                >
                  <Icon name="CalendarDays" size={18} style={{ color: 'var(--brand)' }} />
                </div>
                <Icon name="ArrowUpRight" size={20} className="text-white/20 group-hover:text-white/60 transition-colors" />
              </div>
              <h3 className="font-cormorant text-white text-2xl mb-2">Запись на приём</h3>
              <p className="font-golos text-sm leading-relaxed" style={{ color: '#808080' }}>
                Выберите удобное время и запишитесь к юристу. Подтверждение в течение 15 минут.
              </p>
            </div>

            <div
              className="p-8 border cursor-pointer group transition-colors"
              style={{ borderColor: 'rgba(255,255,255,0.1)' }}
              onClick={onConsult}
            >
              <div className="flex items-center justify-between mb-4">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.15)' }}
                >
                  <Icon name="MessageSquare" size={18} className="text-white/40 group-hover:text-white/70 transition-colors" />
                </div>
                <Icon name="ArrowUpRight" size={20} className="text-white/20 group-hover:text-white/60 transition-colors" />
              </div>
              <h3 className="font-cormorant text-white text-2xl mb-2">Онлайн-консультация</h3>
              <p className="font-golos text-sm leading-relaxed" style={{ color: '#808080' }}>
                Задайте вопрос юристу онлайн. Опишите ситуацию — получите развёрнутый ответ.
              </p>
            </div>

            <div
              className="p-5"
              style={{ backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}
            >
              <p className="font-golos text-xs leading-relaxed text-center" style={{ color: '#555555' }}>
                Все консультации конфиденциальны. Ваши данные защищены и не передаются третьим лицам.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}