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
      style={{ background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(4px)' }}
      onClick={(e) => e.target === e.currentTarget && reset()}
    >
      <div
        className="w-full max-w-lg relative overflow-hidden"
        style={{ maxHeight: '90vh', overflowY: 'auto' }}
      >
        <div style={{ backgroundColor: 'var(--brand)', padding: '2rem' }}>
          <div className="flex items-start justify-between mb-4">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span style={{ width: '30px', height: '2px', backgroundColor: 'rgba(255,255,255,0.5)', display: 'inline-block' }} />
                <span className="text-white/70 text-xs tracking-[0.4em] uppercase font-golos">
                  Онлайн
                </span>
              </div>
              <h2 className="font-cormorant text-white text-3xl font-light">
                Консультация юриста
              </h2>
              <p className="font-golos text-white/60 text-xs mt-2">
                Ответим в течение 2 часов в рабочее время
              </p>
            </div>
            <button onClick={reset} className="text-white/40 hover:text-white transition-colors mt-1">
              <Icon name="X" size={20} />
            </button>
          </div>
        </div>

        {submitted ? (
          <div className="p-10 text-center" style={{ backgroundColor: '#f0f2f5' }}>
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
              style={{ backgroundColor: 'rgba(27,79,138,0.1)', border: '1px solid rgba(27,79,138,0.25)' }}
            >
              <Icon name="MessageSquare" size={28} style={{ color: 'var(--brand)' }} />
            </div>
            <h3 className="font-cormorant text-2xl mb-3" style={{ color: '#1a1a1a' }}>Вопрос отправлен!</h3>
            <p className="font-golos text-sm leading-relaxed mb-8" style={{ color: '#808080' }}>
              Мы изучим ваш вопрос и свяжемся с вами по телефону{' '}
              <strong style={{ color: '#1a1a1a' }}>{form.phone}</strong> или email{' '}
              <strong style={{ color: '#1a1a1a' }}>{form.email}</strong> в ближайшее время.
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
          <form onSubmit={handleSubmit} className="p-8 space-y-5" style={{ backgroundColor: '#f0f2f5' }}>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="font-golos text-xs tracking-widest uppercase block mb-2" style={{ color: '#808080' }}>
                  Имя *
                </label>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full font-golos text-sm px-4 py-3 focus:outline-none transition-colors"
                  style={{
                    backgroundColor: '#ffffff',
                    border: '1px solid #d0d4da',
                    color: '#1a1a1a',
                  }}
                  placeholder="Ваше имя"
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
                    backgroundColor: '#ffffff',
                    border: '1px solid #d0d4da',
                    color: '#1a1a1a',
                  }}
                  placeholder="+7 (999) 000-00-00"
                />
              </div>
            </div>

            <div>
              <label className="font-golos text-xs tracking-widest uppercase block mb-2" style={{ color: '#808080' }}>
                Email
              </label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full font-golos text-sm px-4 py-3 focus:outline-none transition-colors"
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #d0d4da',
                  color: '#1a1a1a',
                }}
                placeholder="your@email.ru"
              />
            </div>

            <div>
              <label className="font-golos text-xs tracking-widest uppercase block mb-2" style={{ color: '#808080' }}>
                Ваш вопрос *
              </label>
              <textarea
                required
                rows={5}
                value={form.question}
                onChange={(e) => setForm({ ...form, question: e.target.value })}
                className="w-full font-golos text-sm px-4 py-3 focus:outline-none transition-colors resize-none"
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #d0d4da',
                  color: '#1a1a1a',
                }}
                placeholder="Опишите вашу ситуацию подробнее — это поможет юристу подготовить точный ответ..."
              />
            </div>

            <p className="font-golos text-xs leading-relaxed" style={{ color: '#aaaaaa' }}>
              Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности и даёте согласие на
              обработку персональных данных
            </p>

            <button
              type="submit"
              className="w-full py-4 text-xs tracking-widest uppercase font-semibold font-golos text-white transition-opacity flex items-center justify-center gap-2"
              style={{ backgroundColor: 'var(--brand)' }}
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
