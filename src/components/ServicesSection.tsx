import { useState } from 'react';
import Icon from '@/components/ui/icon';

const services = [
  {
    category: 'Консультации',
    items: [
      { name: 'Устная консультация (30 мин)', price: 'от 1 500 ₽', popular: false },
      { name: 'Письменное заключение по делу', price: 'от 3 000 ₽', popular: false },
      { name: 'Анализ документов и договоров', price: 'от 2 500 ₽', popular: true },
      { name: 'Онлайн-консультация', price: 'от 1 000 ₽', popular: false },
    ],
  },
  {
    category: 'Представительство',
    items: [
      { name: 'Представительство в суде первой инстанции', price: 'от 25 000 ₽', popular: true },
      { name: 'Апелляционное обжалование', price: 'от 20 000 ₽', popular: false },
      { name: 'Переговоры и медиация', price: 'от 15 000 ₽', popular: false },
      { name: 'Исполнительное производство', price: 'от 10 000 ₽', popular: false },
    ],
  },
  {
    category: 'Документы',
    items: [
      { name: 'Составление иска или жалобы', price: 'от 5 000 ₽', popular: false },
      { name: 'Составление договора', price: 'от 4 000 ₽', popular: true },
      { name: 'Претензионное письмо', price: 'от 2 000 ₽', popular: false },
      { name: 'Юридический аудит документов', price: 'от 8 000 ₽', popular: false },
    ],
  },
];

interface ServicesProps {
  onBooking: () => void;
}

export default function ServicesSection({ onBooking }: ServicesProps) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="services" className="py-24" style={{ backgroundColor: 'var(--dark)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-4">
          <span style={{ width: '60px', height: '2px', background: 'var(--brand)', display: 'block' }} />
          <span className="text-xs tracking-[0.4em] uppercase font-golos" style={{ color: 'var(--brand)' }}>
            Прайс-лист
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6">
          <h2
            className="font-cormorant text-white"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 400, lineHeight: 1.1 }}
          >
            Услуги и стоимость
          </h2>
          <p className="font-golos text-sm leading-relaxed max-w-xs" style={{ color: '#808080' }}>
            Итоговая стоимость определяется после первичной консультации и оценки дела
          </p>
        </div>

        <div className="flex gap-2 mb-10 flex-wrap">
          {services.map((s, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className="px-6 py-2.5 text-xs tracking-widest uppercase font-golos font-semibold transition-all duration-300"
              style={
                activeTab === i
                  ? { backgroundColor: 'var(--brand)', color: '#ffffff' }
                  : { border: '1px solid rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.5)' }
              }
            >
              {s.category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {services[activeTab].items.map((item, i) => (
            <div
              key={i}
              className="flex items-center justify-between p-6 border transition-all duration-300 cursor-default"
              style={
                item.popular
                  ? { borderColor: 'rgba(27,79,138,0.5)', backgroundColor: 'rgba(27,79,138,0.08)' }
                  : { borderColor: 'rgba(255,255,255,0.1)' }
              }
            >
              <div className="flex items-center gap-3">
                {item.popular && (
                  <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: 'var(--brand)' }} />
                )}
                <span className="font-golos text-sm" style={{ color: 'rgba(255,255,255,0.8)' }}>{item.name}</span>
                {item.popular && (
                  <span
                    className="text-[0.6rem] tracking-widest uppercase px-2 py-0.5 font-golos border"
                    style={{ color: 'var(--brand)', borderColor: 'rgba(27,79,138,0.4)' }}
                  >
                    Популярно
                  </span>
                )}
              </div>
              <span className="font-cormorant text-xl ml-4 whitespace-nowrap" style={{ color: 'var(--brand)' }}>
                {item.price}
              </span>
            </div>
          ))}
        </div>

        <div
          className="mt-12 p-8 border"
          style={{ borderColor: 'rgba(27,79,138,0.3)', backgroundColor: 'rgba(27,79,138,0.06)' }}
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="font-cormorant text-white text-2xl mb-2">
                Не знаете, с чего начать?
              </h3>
              <p className="font-golos text-sm" style={{ color: '#808080' }}>
                Запишитесь на первичную консультацию — оценим ситуацию и предложим оптимальное решение
              </p>
            </div>
            <button
              onClick={onBooking}
              className="flex-shrink-0 px-8 py-4 text-sm tracking-widest uppercase font-semibold font-golos text-white transition-colors duration-300 flex items-center gap-2"
              style={{ backgroundColor: 'var(--brand)' }}
            >
              Записаться
              <Icon name="ArrowRight" size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
