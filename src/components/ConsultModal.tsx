import { useState } from 'react';
import Icon from '@/components/ui/icon';

interface ConsultModalProps {
  open: boolean;
  onClose: () => void;
}

export default function ConsultModal({ open, onClose }: ConsultModalProps) {
  const [form, setForm] = useState({ name: '', phone: '', email: '', question: '' });
  const [submitted, setSubmitted] = useState(false);

  if (!open) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const reset = () => {
    setForm({ name: '', phone: '', email: '', question: '' });
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(4px)' }}
      onClick={(e) => e.target === e.currentTarget && reset()}
    >
      <div className="bg-cream w-full max-w-lg relative overflow-hidden" style={{ maxHeight: '90vh', overflowY: 'auto' }}>
        <div
          className="p-8 text-white"
          style={{ background: 'var(--dark)' }}
        >
          <div className="flex items-start justify-between mb-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="gold-divider inline-block" style={{ width: '30px' }} />
                <span className="text-[var(--gold)] text-xs tracking-[0.4em] uppercase font-golos">
                  Онлайн
                </span>
              </div>
              <h2 className="font-cormorant text-white text-3xl font-light">
                Консультация юриста
              </h2>
              <p className="font-golos text-white/40 text-xs mt-2">
                Ответим в течение 2 часов в рабочее время
              </p>
            </div>
            <button onClick={reset} className="text-white/30 hover:text-white transition-colors mt-1">
              <Icon name="X" size={20} />
            </button>
          </div>
        </div>

        {submitted ? (
          <div className="p-10 text-center bg-cream">
            <div className="w-16 h-16 rounded-full bg-[var(--gold)]/15 border border-[var(--gold)]/30 flex items-center justify-center mx-auto mb-6">
              <Icon name="MessageSquare" size={28} className="text-[var(--gold)]" />
            </div>
            <h3 className="font-cormorant text-[var(--dark)] text-2xl mb-3">Вопрос отправлен!</h3>
            <p className="font-golos text-[var(--dark)]/50 text-sm leading-relaxed mb-8">
              Мы изучим ваш вопрос и свяжемся с вами по телефону{' '}
              <strong className="text-[var(--dark)]/80">{form.phone}</strong> или email{' '}
              <strong className="text-[var(--dark)]/80">{form.email}</strong> в ближайшее время.
            </p>
            <button
              onClick={reset}
              className="bg-[var(--dark)] text-[var(--gold)] px-8 py-3 text-xs tracking-widest uppercase font-semibold font-golos"
            >
              Закрыть
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-8 bg-cream space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="font-golos text-[var(--dark)]/50 text-xs tracking-widest uppercase block mb-2">
                  Имя *
                </label>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-white border border-[var(--dark)]/15 text-[var(--dark)] font-golos text-sm px-4 py-3 focus:border-[var(--gold)] focus:outline-none transition-colors placeholder:text-[var(--dark)]/25"
                  placeholder="Ваше имя"
                />
              </div>
              <div>
                <label className="font-golos text-[var(--dark)]/50 text-xs tracking-widest uppercase block mb-2">
                  Телефон *
                </label>
                <input
                  required
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full bg-white border border-[var(--dark)]/15 text-[var(--dark)] font-golos text-sm px-4 py-3 focus:border-[var(--gold)] focus:outline-none transition-colors placeholder:text-[var(--dark)]/25"
                  placeholder="+7 (999) 000-00-00"
                />
              </div>
            </div>

            <div>
              <label className="font-golos text-[var(--dark)]/50 text-xs tracking-widest uppercase block mb-2">
                Email
              </label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-white border border-[var(--dark)]/15 text-[var(--dark)] font-golos text-sm px-4 py-3 focus:border-[var(--gold)] focus:outline-none transition-colors placeholder:text-[var(--dark)]/25"
                placeholder="your@email.ru"
              />
            </div>

            <div>
              <label className="font-golos text-[var(--dark)]/50 text-xs tracking-widest uppercase block mb-2">
                Ваш вопрос *
              </label>
              <textarea
                required
                rows={5}
                value={form.question}
                onChange={(e) => setForm({ ...form, question: e.target.value })}
                className="w-full bg-white border border-[var(--dark)]/15 text-[var(--dark)] font-golos text-sm px-4 py-3 focus:border-[var(--gold)] focus:outline-none transition-colors placeholder:text-[var(--dark)]/25 resize-none"
                placeholder="Опишите вашу ситуацию подробнее — это поможет юристу подготовить точный ответ..."
              />
            </div>

            <p className="font-golos text-[var(--dark)]/35 text-xs leading-relaxed">
              Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности и даёте согласие на
              обработку персональных данных
            </p>

            <button
              type="submit"
              className="w-full bg-[var(--dark)] text-[var(--gold)] py-4 text-xs tracking-widest uppercase font-semibold font-golos hover:bg-[var(--dark-2)] transition-colors flex items-center justify-center gap-2"
            >
              <Icon name="Send" size={14} />
              Отправить вопрос
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
