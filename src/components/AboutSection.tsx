import Icon from '@/components/ui/icon';

const achievements = [
  { icon: 'GraduationCap', text: 'Тюменский государственный университет, юридический факультет' },
  { icon: 'Award', text: 'Член Адвокатской палаты Тюменской области' },
  { icon: 'Star', text: 'Специализация: гражданское и уголовное право' },
  { icon: 'Users', text: 'Более 800 успешно завершённых дел' },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-cream overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div
              className="absolute -top-8 -left-8 w-64 h-64 border border-[var(--gold)]/20 -z-0"
              style={{ transform: 'rotate(6deg)' }}
            />
            <img
              src="https://cdn.poehali.dev/projects/7346caa0-9817-444d-a549-c129db9917d2/files/fb96eed6-c148-49c3-9d49-b55b9478e900.jpg"
              alt="Юрист"
              className="relative z-10 w-full object-cover"
              style={{ maxHeight: '580px', objectPosition: 'top' }}
            />
            <div
              className="absolute -bottom-6 -right-6 bg-[var(--dark)] p-6 z-20"
              style={{ minWidth: '180px' }}
            >
              <div className="font-cormorant text-[var(--gold)] text-4xl font-light">15+</div>
              <div className="font-golos text-white/60 text-xs tracking-widest uppercase mt-1">
                лет практики
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="gold-divider" />
              <span className="text-[var(--gold)] text-xs tracking-[0.4em] uppercase font-golos">
                Обо мне
              </span>
            </div>

            <h2
              className="font-cormorant text-[var(--dark)] mb-6"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, lineHeight: 1.1 }}
            >
              Ваш надёжный<br />
              <span style={{ fontStyle: 'italic' }}>защитник в суде</span>
            </h2>

            <p className="font-golos text-[var(--dark)]/60 text-sm leading-relaxed mb-4">
              Более 15 лет я помогаю жителям Тюмени и Тюменской области защищать свои права.
              За это время накоплен богатый опыт в ведении сложных гражданских, уголовных и
              административных дел.
            </p>
            <p className="font-golos text-[var(--dark)]/60 text-sm leading-relaxed mb-8">
              Мой подход — это глубокий анализ каждого дела, честность с клиентом и максимальная
              самоотдача в защите ваших интересов. Я верю, что право есть у каждого, и готов
              помочь вам его отстоять.
            </p>

            <div className="space-y-4 mb-8">
              {achievements.map((a, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full border border-[var(--gold)]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name={a.icon} fallback="Star" size={14} className="text-[var(--gold)]" />
                  </div>
                  <span className="font-golos text-[var(--dark)]/70 text-sm leading-relaxed">
                    {a.text}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-6 pt-6 border-t border-[var(--dark)]/10">
              <div>
                <div className="font-cormorant text-[var(--dark)] text-3xl text-[var(--gold)]" style={{ color: 'var(--gold)' }}>98%</div>
                <div className="font-golos text-[var(--dark)]/40 text-xs tracking-widest uppercase">
                  успешных дел
                </div>
              </div>
              <div className="w-px h-10 bg-[var(--dark)]/15" />
              <div>
                <div className="font-cormorant text-3xl" style={{ color: 'var(--gold)' }}>800+</div>
                <div className="font-golos text-[var(--dark)]/40 text-xs tracking-widest uppercase">
                  клиентов
                </div>
              </div>
              <div className="w-px h-10 bg-[var(--dark)]/15" />
              <div>
                <div className="font-cormorant text-3xl" style={{ color: 'var(--gold)' }}>2009</div>
                <div className="font-golos text-[var(--dark)]/40 text-xs tracking-widest uppercase">
                  год основания
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
