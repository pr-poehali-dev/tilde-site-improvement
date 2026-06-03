import Icon from '@/components/ui/icon';

const achievements = [
  { icon: 'GraduationCap', text: 'Тюменский государственный университет, юридический факультет' },
  { icon: 'Award', text: 'Член Адвокатской палаты Тюменской области' },
  { icon: 'Star', text: 'Специализация: гражданское и уголовное право' },
  { icon: 'Users', text: 'Более 800 успешно завершённых дел' },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 overflow-hidden" style={{ backgroundColor: '#ffffff' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div
              className="absolute -top-8 -left-8 w-64 h-64 -z-0"
              style={{ border: '1px solid rgba(27,79,138,0.15)', transform: 'rotate(6deg)' }}
            />
            <img
              src="https://cdn.poehali.dev/projects/7346caa0-9817-444d-a549-c129db9917d2/files/fb96eed6-c148-49c3-9d49-b55b9478e900.jpg"
              alt="Юрист"
              className="relative z-10 w-full object-cover"
              style={{ maxHeight: '580px', objectPosition: 'top' }}
            />
            <div
              className="absolute -bottom-6 -right-6 p-6 z-20"
              style={{ backgroundColor: 'var(--brand)', minWidth: '180px' }}
            >
              <div className="font-cormorant text-white text-4xl font-light">15+</div>
              <div className="font-golos text-white/70 text-xs tracking-widest uppercase mt-1">
                лет практики
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-4 mb-4">
              <span style={{ width: '60px', height: '2px', background: 'var(--brand)', display: 'block' }} />
              <span className="text-xs tracking-[0.4em] uppercase font-golos" style={{ color: 'var(--brand)' }}>
                Обо мне
              </span>
            </div>

            <h2
              className="font-cormorant mb-6"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, lineHeight: 1.1, color: '#1a1a1a' }}
            >
              Ваш надёжный<br />
              <span style={{ fontStyle: 'italic', color: 'var(--brand)' }}>защитник в суде</span>
            </h2>

            <p className="font-golos text-sm leading-relaxed mb-4" style={{ color: '#808080' }}>
              Более 15 лет я помогаю жителям Тюмени и Тюменской области защищать свои права.
              За это время накоплен богатый опыт в ведении сложных гражданских, уголовных и
              административных дел.
            </p>
            <p className="font-golos text-sm leading-relaxed mb-8" style={{ color: '#808080' }}>
              Мой подход — это глубокий анализ каждого дела, честность с клиентом и максимальная
              самоотдача в защите ваших интересов. Я верю, что право есть у каждого, и готов
              помочь вам его отстоять.
            </p>

            <div className="space-y-4 mb-8">
              {achievements.map((a, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ border: '1px solid rgba(27,79,138,0.25)' }}
                  >
                    <Icon name={a.icon} fallback="Star" size={14} style={{ color: 'var(--brand)' }} />
                  </div>
                  <span className="font-golos text-sm leading-relaxed" style={{ color: '#555555' }}>
                    {a.text}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-6 pt-6" style={{ borderTop: '1px solid #e6e6e6' }}>
              <div>
                <div className="font-cormorant text-3xl" style={{ color: 'var(--brand)' }}>98%</div>
                <div className="font-golos text-xs tracking-widest uppercase" style={{ color: '#808080' }}>
                  успешных дел
                </div>
              </div>
              <div className="w-px h-10" style={{ backgroundColor: '#e6e6e6' }} />
              <div>
                <div className="font-cormorant text-3xl" style={{ color: 'var(--brand)' }}>800+</div>
                <div className="font-golos text-xs tracking-widest uppercase" style={{ color: '#808080' }}>
                  клиентов
                </div>
              </div>
              <div className="w-px h-10" style={{ backgroundColor: '#e6e6e6' }} />
              <div>
                <div className="font-cormorant text-3xl" style={{ color: 'var(--brand)' }}>2009</div>
                <div className="font-golos text-xs tracking-widest uppercase" style={{ color: '#808080' }}>
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
