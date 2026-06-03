import Icon from '@/components/ui/icon';

const practices = [
  {
    icon: 'Scale',
    title: 'Гражданское право',
    desc: 'Защита интересов граждан в имущественных, семейных, наследственных спорах. Признание сделок недействительными, взыскание долгов, возмещение ущерба.',
    items: ['Имущественные споры', 'Семейное право', 'Наследование', 'Защита прав потребителей'],
  },
  {
    icon: 'Briefcase',
    title: 'Уголовное право',
    desc: 'Профессиональная защита по уголовным делам на всех стадиях процесса — от предварительного следствия до апелляции и кассации.',
    items: ['Защита на следствии', 'Представительство в суде', 'Апелляция и кассация', 'Реабилитация'],
  },
  {
    icon: 'Building2',
    title: 'Арбитраж и бизнес',
    desc: 'Правовое сопровождение бизнеса: корпоративные споры, договорная работа, защита интересов в арбитражных судах.',
    items: ['Корпоративные споры', 'Договорная работа', 'Банкротство', 'Due diligence'],
  },
  {
    icon: 'Home',
    title: 'Недвижимость',
    desc: 'Полное юридическое сопровождение сделок с недвижимостью. Признание права собственности, раздел имущества, регистрация прав.',
    items: ['Сделки купли-продажи', 'Приватизация', 'Оспаривание кадастра', 'Ипотечные споры'],
  },
  {
    icon: 'Shield',
    title: 'Административное право',
    desc: 'Оспаривание незаконных решений органов власти, защита от административных штрафов, обжалование действий должностных лиц.',
    items: ['Оспаривание штрафов', 'Жалобы в госорганы', 'Лицензирование', 'Земельные споры'],
  },
  {
    icon: 'HeartHandshake',
    title: 'Трудовое право',
    desc: 'Защита прав работников и работодателей: незаконное увольнение, невыплата зарплаты, составление трудовых договоров.',
    items: ['Незаконное увольнение', 'Взыскание зарплаты', 'Трудовые договоры', 'Охрана труда'],
  },
];

export default function PracticeSection() {
  return (
    <section id="practice" className="py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-4">
          <span className="gold-divider" />
          <span className="text-[var(--gold)] text-xs tracking-[0.4em] uppercase font-golos">
            Направления работы
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <h2
            className="font-cormorant text-[var(--dark)]"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 400, lineHeight: 1.1 }}
          >
            Области практики
          </h2>
          <p className="text-[var(--dark)]/50 font-golos text-sm leading-relaxed max-w-xs">
            Комплексная юридическая помощь по всем ключевым отраслям права
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--dark)]/10">
          {practices.map((p, i) => (
            <div
              key={i}
              className="bg-cream p-8 group hover:bg-[var(--dark)] transition-all duration-500 cursor-default"
            >
              <div className="mb-6">
                <div className="w-10 h-10 rounded-full border border-[var(--gold)]/40 flex items-center justify-center mb-4 group-hover:bg-[var(--gold)]/10 group-hover:border-[var(--gold)] transition-all duration-300">
                  <Icon name={p.icon} fallback="Scale" size={18} className="text-[var(--gold)]" />
                </div>
                <h3
                  className="font-cormorant text-[var(--dark)] group-hover:text-white mb-2 transition-colors duration-300"
                  style={{ fontSize: '1.4rem', fontWeight: 500 }}
                >
                  {p.title}
                </h3>
                <p className="text-[var(--dark)]/55 group-hover:text-white/50 font-golos text-sm leading-relaxed transition-colors duration-300">
                  {p.desc}
                </p>
              </div>

              <ul className="space-y-1.5">
                {p.items.map((item, j) => (
                  <li
                    key={j}
                    className="flex items-center gap-2 text-xs font-golos text-[var(--dark)]/40 group-hover:text-white/40 transition-colors duration-300"
                  >
                    <span className="w-1 h-1 rounded-full bg-[var(--gold)] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}