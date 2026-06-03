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
  'Арбитраж и бизнес',
  'Недвижимость',
  'Трудовое право',
  'Финансовые споры',
  'Договорная работа',
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
      style={{ background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(4px)' }}
      onClick={(e) => e.target === e.currentTarget && reset()}
    >
      <div
        className="w-full max-w-lg relative overflow-hidden"
        style={{ backgroundColor: 'var(--dark)', maxHeight: '90vh', overflowY: 'auto' }}
      >
        <div
          className="p-6 flex items-center justify-between"
          style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}
        >
          <div>
            <h2 className="font-cormorant text-white text-2xl font-light">Запись на приём</h2>
            {!submitted && (
              <p className="font-golos text-xs mt-1" style={{ color: '#808080' }}>
                Шаг {step} из 2
              </p>
            )}
          </div>
          <button onClick={reset} className="transition-colors" style={{ color: 'rgba(255,255,255,0.4)' }}>
            <Icon name="X" size={20} />
          </button>
        </div>

        {submitted ? (
          <div className="p-10 text-center">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
              style={{ backgroundColor: 'rgba(27,79,138,0.1)', border: '1px solid rgba(27,79,138,0.3)' }}
            >
              <Icon name="Check" size={28} style={{ color: 'var(--brand)' }} />
            </div>
            <h3 className="font-cormorant text-white text-2xl mb-3">Заявка принята!</h3>
            <p className="font-golos text-sm leading-relaxed mb-8" style={{ color: '#808080' }}>
              Мы свяжемся с вами по номеру <strong className="text-white/70">{form.phone}</strong> для
              подтверждения записи на <strong className="text-white/70">{form.date}</strong> в{' '}
              <strong className="text-white/70">{form.time}</strong>.
            </p>
            <button
              onClick={reset}
              className="px-8 py-3 text-xs tracking-widest uppercase font-semibold font-golos text-white"
              style={{ backgroundColor: 'var(--brand)' }}
            >
              Закрыть
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            {step === 1 && (
              <>
                <div>
                  <label className="font-golos text-xs tracking-widest uppercase block mb-2" style={{ color: '#808080' }}>
                    Ваше имя *
                  </label>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full font-golos text-sm px-4 py-3 focus:outline-none transition-colors"
                    style={{
                      backgroundColor: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      color: '#ffffff',
                    }}
                    placeholder="Иван Иванов"
                  />
                </div>
                <div>
                  <label className="font-golos text-xs tracking-widest uppercase block mb-2" style={{ color: '#808080' }}>
                    Телефон *
                  </label>
                  <input
                    required
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full font-golos text-sm px-4 py-3 focus:outline-none transition-colors"
                    style={{
                      backgroundColor: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      color: '#ffffff',
                    }}
                    placeholder="+7 (999) 000-00-00"
                  />
                </div>
                <div>
                  <label className="font-golos text-xs tracking-widest uppercase block mb-2" style={{ color: '#808080' }}>
                    Область права
                  </label>
                  <select
                    value={form.area}
                    onChange={(e) => setForm({ ...form, area: e.target.value })}
                    className="w-full font-golos text-sm px-4 py-3 focus:outline-none transition-colors"
                    style={{
                      backgroundColor: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      color: form.area ? '#ffffff' : '#808080',
                    }}
                  >
                    <option value="" style={{ backgroundColor: '#1a1a1a' }}>Выберите направление</option>
                    {practiceAreas.map((a) => (
                      <option key={a} value={a} style={{ backgroundColor: '#1a1a1a' }}>{a}</option>
                    ))}
                  </select>
                </div>
                <button
                  type="button"
                  onClick={() => form.name && form.phone && setStep(2)}
                  disabled={!form.name || !form.phone}
                  className="w-full py-4 text-xs tracking-widest uppercase font-semibold font-golos mt-2 text-white transition-opacity disabled:opacity-40"
                  style={{ backgroundColor: 'var(--brand)' }}
                >
                  Далее — выбор времени
                </button>
              </>
            )}

            {step === 2 && (
              <>
                <div>
                  <label className="font-golos text-xs tracking-widest uppercase block mb-2" style={{ color: '#808080' }}>
                    Дата приёма *
                  </label>
                  <input
                    required
                    type="date"
                    min={today}
                    value={form.date}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                    className="w-full font-golos text-sm px-4 py-3 focus:outline-none text-white"
                    style={{
                      backgroundColor: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.1)',
                    }}
                  />
                </div>
                <div>
                  <label className="font-golos text-xs tracking-widest uppercase block mb-2" style={{ color: '#808080' }}>
                    Время *
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {timeSlots.map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setForm({ ...form, time: t })}
                        className="py-2.5 text-sm font-golos border transition-all duration-200"
                        style={
                          form.time === t
                            ? { backgroundColor: 'var(--brand)', color: '#ffffff', borderColor: 'var(--brand)' }
                            : { borderColor: 'rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.6)' }
                        }
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="font-golos text-xs tracking-widest uppercase block mb-2" style={{ color: '#808080' }}>
                    Краткое описание вопроса
                  </label>
                  <textarea
                    rows={3}
                    value={form.comment}
                    onChange={(e) => setForm({ ...form, comment: e.target.value })}
                    className="w-full font-golos text-sm px-4 py-3 focus:outline-none transition-colors resize-none text-white"
                    style={{
                      backgroundColor: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.1)',
                    }}
                    placeholder="Опишите кратко вашу ситуацию..."
                  />
                </div>
                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="flex-1 py-3 text-xs tracking-widest uppercase font-golos transition-colors"
                    style={{ border: '1px solid rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.5)' }}
                  >
                    Назад
                  </button>
                  <button
                    type="submit"
                    disabled={!form.date || !form.time}
                    className="flex-[2] py-3 text-xs tracking-widest uppercase font-semibold font-golos text-white transition-opacity disabled:opacity-40"
                    style={{ backgroundColor: 'var(--brand)' }}
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