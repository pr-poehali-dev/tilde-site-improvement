import { useState } from 'react';
import Icon from '@/components/ui/icon';

interface BookingModalProps {
  open: boolean;
  onClose: () => void;
}

const timeSlots = [
  '09:00', '10:00', '11:00', '12:00',
  '14:00', '15:00', '16:00', '17:00', '18:00',
];

const practiceAreas = [
  'Гражданское право',
  'Уголовное право',
  'Арбитраж и бизнес',
  'Недвижимость',
  'Административное право',
  'Трудовое право',
  'Другое',
];

export default function BookingModal({ open, onClose }: BookingModalProps) {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    area: '',
    date: '',
    time: '',
    comment: '',
  });
  const [submitted, setSubmitted] = useState(false);

  if (!open) return null;

  const today = new Date().toISOString().split('T')[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const reset = () => {
    setStep(1);
    setForm({ name: '', phone: '', area: '', date: '', time: '', comment: '' });
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(4px)' }}
      onClick={(e) => e.target === e.currentTarget && reset()}
    >
      <div
        className="bg-[var(--dark)] w-full max-w-lg relative overflow-hidden"
        style={{ maxHeight: '90vh', overflowY: 'auto' }}
      >
        <div className="border-b border-white/10 p-6 flex items-center justify-between">
          <div>
            <h2 className="font-cormorant text-white text-2xl font-light">Запись на приём</h2>
            {!submitted && (
              <p className="font-golos text-white/40 text-xs mt-1">
                Шаг {step} из 2
              </p>
            )}
          </div>
          <button onClick={reset} className="text-white/40 hover:text-white transition-colors">
            <Icon name="X" size={20} />
          </button>
        </div>

        {submitted ? (
          <div className="p-10 text-center">
            <div className="w-16 h-16 rounded-full bg-[var(--gold)]/10 border border-[var(--gold)]/30 flex items-center justify-center mx-auto mb-6">
              <Icon name="Check" size={28} className="text-[var(--gold)]" />
            </div>
            <h3 className="font-cormorant text-white text-2xl mb-3">Заявка принята!</h3>
            <p className="font-golos text-white/50 text-sm leading-relaxed mb-8">
              Мы свяжемся с вами по номеру <strong className="text-white/70">{form.phone}</strong> для
              подтверждения записи на <strong className="text-white/70">{form.date}</strong> в{' '}
              <strong className="text-white/70">{form.time}</strong>.
            </p>
            <button
              onClick={reset}
              className="bg-[var(--gold)] text-[var(--dark)] px-8 py-3 text-xs tracking-widest uppercase font-semibold font-golos"
            >
              Закрыть
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            {step === 1 && (
              <>
                <div>
                  <label className="font-golos text-white/50 text-xs tracking-widest uppercase block mb-2">
                    Ваше имя *
                  </label>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 text-white font-golos text-sm px-4 py-3 focus:border-[var(--gold)]/50 focus:outline-none transition-colors placeholder:text-white/20"
                    placeholder="Иван Иванов"
                  />
                </div>
                <div>
                  <label className="font-golos text-white/50 text-xs tracking-widest uppercase block mb-2">
                    Телефон *
                  </label>
                  <input
                    required
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 text-white font-golos text-sm px-4 py-3 focus:border-[var(--gold)]/50 focus:outline-none transition-colors placeholder:text-white/20"
                    placeholder="+7 (999) 000-00-00"
                  />
                </div>
                <div>
                  <label className="font-golos text-white/50 text-xs tracking-widest uppercase block mb-2">
                    Область права
                  </label>
                  <select
                    value={form.area}
                    onChange={(e) => setForm({ ...form, area: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 text-white font-golos text-sm px-4 py-3 focus:border-[var(--gold)]/50 focus:outline-none transition-colors"
                  >
                    <option value="" className="bg-[var(--dark)]">Выберите направление</option>
                    {practiceAreas.map((a) => (
                      <option key={a} value={a} className="bg-[var(--dark)]">{a}</option>
                    ))}
                  </select>
                </div>
                <button
                  type="button"
                  onClick={() => form.name && form.phone && setStep(2)}
                  className="w-full bg-[var(--gold)] text-[var(--dark)] py-4 text-xs tracking-widest uppercase font-semibold font-golos hover:bg-gold-400 transition-colors mt-2 disabled:opacity-50"
                  disabled={!form.name || !form.phone}
                >
                  Далее — выбор времени
                </button>
              </>
            )}

            {step === 2 && (
              <>
                <div>
                  <label className="font-golos text-white/50 text-xs tracking-widest uppercase block mb-2">
                    Дата приёма *
                  </label>
                  <input
                    required
                    type="date"
                    min={today}
                    value={form.date}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 text-white font-golos text-sm px-4 py-3 focus:border-[var(--gold)]/50 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="font-golos text-white/50 text-xs tracking-widest uppercase block mb-2">
                    Время *
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {timeSlots.map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setForm({ ...form, time: t })}
                        className={`py-2.5 text-sm font-golos border transition-all duration-200 ${
                          form.time === t
                            ? 'bg-[var(--gold)] text-[var(--dark)] border-[var(--gold)]'
                            : 'border-white/10 text-white/60 hover:border-[var(--gold)]/40'
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="font-golos text-white/50 text-xs tracking-widest uppercase block mb-2">
                    Краткое описание вопроса
                  </label>
                  <textarea
                    rows={3}
                    value={form.comment}
                    onChange={(e) => setForm({ ...form, comment: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 text-white font-golos text-sm px-4 py-3 focus:border-[var(--gold)]/50 focus:outline-none transition-colors placeholder:text-white/20 resize-none"
                    placeholder="Опишите кратко вашу ситуацию..."
                  />
                </div>
                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="flex-1 border border-white/20 text-white/60 py-3 text-xs tracking-widest uppercase font-golos hover:border-white/40 transition-colors"
                  >
                    Назад
                  </button>
                  <button
                    type="submit"
                    disabled={!form.date || !form.time}
                    className="flex-[2] bg-[var(--gold)] text-[var(--dark)] py-3 text-xs tracking-widest uppercase font-semibold font-golos hover:bg-gold-400 transition-colors disabled:opacity-50"
                  >
                    Подтвердить запись
                  </button>
                </div>
              </>
            )}
          </form>
        )}
      </div>
    </div>
  );
}
