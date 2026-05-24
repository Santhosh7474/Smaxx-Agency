import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Send, Mail, MapPin, Clock } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const contactInfo = [
  { icon: Mail,    label: 'Email',         value: 'hello@smaxxagency.com' },
  { icon: MapPin,  label: 'Location',      value: 'India' },
  { icon: Clock,   label: 'Response Time', value: 'Within 24 hours' },
];

const inputStyle = {
  background: 'rgba(255,255,255,0.03)',
  border: '1px solid rgba(255,255,255,0.08)',
  color: '#F8FAFC',
  borderRadius: '12px',
  padding: '13px 16px',
  fontSize: '14px',
  fontFamily: "'Inter', sans-serif",
  width: '100%',
  outline: 'none',
  transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
  boxSizing: 'border-box',
};

export default function Contact() {
  const sectionRef = useRef(null);
  const infoRef    = useRef(null);
  const formRef    = useRef(null);

  const [formData, setFormData] = useState({ name: '', email: '', service: '', message: '' });
  const [sending,  setSending]  = useState(false);
  const [sent,     setSent]     = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const trigger = { trigger: sectionRef.current, start: 'top 82%', toggleActions: 'play none none reverse' };

      gsap.from(infoRef.current, {
        opacity: 0, y: 40, duration: 0.9, ease: 'power3.out', scrollTrigger: trigger,
      });
      gsap.from(formRef.current, {
        opacity: 0, y: 40, duration: 0.9, ease: 'power3.out', delay: 0.1, scrollTrigger: trigger,
      });
    });
    return () => ctx.revert();
  }, []);

  const handleChange  = e => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleFocus   = e => { e.target.style.borderColor = 'rgba(0,212,255,0.45)'; e.target.style.boxShadow = '0 0 0 3px rgba(0,212,255,0.08)'; };
  const handleBlur    = e => { e.target.style.borderColor = 'rgba(255,255,255,0.08)'; e.target.style.boxShadow = 'none'; };

  const handleSubmit = async e => {
    e.preventDefault();
    setSending(true);
    await new Promise(r => setTimeout(r, 1500));
    setSending(false);
    setSent(true);
    setFormData({ name: '', email: '', service: '', message: '' });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      style={{
        width: '100%',
        padding: '120px 0 100px',
        background: '#0A0F1E',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Ambient glow */}
      <div style={{
        position: 'absolute', bottom: '15%', right: '10%',
        width: '500px', height: '500px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,212,255,0.04) 0%, transparent 70%)',
        filter: 'blur(70px)', pointerEvents: 'none',
      }} />

      {/* Container */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 32px' }}>

        {/* ── Heading ── */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <span style={{
            display: 'block',
            fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase',
            fontWeight: 600, color: '#00D4FF', fontFamily: "'Inter', sans-serif",
            marginBottom: '14px',
          }}>
            Let's Connect
          </span>
          <h2 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
            fontWeight: 700, color: '#F8FAFC',
            letterSpacing: '-0.02em', lineHeight: 1.1, margin: '0 0 16px',
          }}>
            Start a{' '}
            <span style={{
              background: 'linear-gradient(135deg, #00D4FF, #3B82F6)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>
              Conversation
            </span>
          </h2>
          <p style={{
            fontFamily: "'Inter', sans-serif", fontSize: '1rem', color: '#64748B',
            maxWidth: '420px', margin: '0 auto', lineHeight: 1.7,
          }}>
            Have a project in mind? We'd love to hear about it.
          </p>
        </div>

        {/* ── Two-column layout (inline flex) ── */}
        <div style={{
          display: 'flex',
          gap: '32px',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
        }}>

          {/* Left — Info panel */}
          <div
            ref={infoRef}
            style={{ flex: '0 0 min(360px, 100%)', width: 'min(360px, 100%)' }}
          >
            <div style={{
              borderRadius: '20px',
              padding: '32px',
              background: 'linear-gradient(135deg, rgba(0,212,255,0.06), rgba(59,130,246,0.06))',
              border: '1px solid rgba(0,212,255,0.14)',
              height: '100%',
            }}>
              <h3 style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '1.25rem', fontWeight: 700, color: '#F8FAFC',
                marginBottom: '8px',
              }}>
                Ready to build something great?
              </h3>
              <p style={{
                fontFamily: "'Inter', sans-serif", fontSize: '0.875rem',
                color: '#64748B', lineHeight: 1.65, marginBottom: '32px',
              }}>
                Tell us about your idea and we'll help you turn it into reality. No commitment required.
              </p>

              {/* Contact info items */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {contactInfo.map(({ icon: Icon, label, value }) => (
                  <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <div style={{
                      width: '42px', height: '42px', borderRadius: '12px', flexShrink: 0,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      background: 'rgba(0,212,255,0.1)', border: '1px solid rgba(0,212,255,0.2)',
                    }}>
                      <Icon size={16} style={{ color: '#00D4FF' }} strokeWidth={1.5} />
                    </div>
                    <div>
                      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', color: '#64748B', marginBottom: '2px' }}>
                        {label}
                      </p>
                      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 500, color: '#F8FAFC' }}>
                        {value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Decorative accent line */}
              <div style={{
                marginTop: '32px', height: '1px',
                background: 'linear-gradient(90deg, rgba(0,212,255,0.3), transparent)',
              }} />
            </div>
          </div>

          {/* Right — Form */}
          <div ref={formRef} style={{ flex: 1, minWidth: '280px' }}>
            <form
              onSubmit={handleSubmit}
              style={{
                borderRadius: '20px', padding: '32px',
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.07)',
                display: 'flex', flexDirection: 'column', gap: '20px',
              }}
            >
              {/* Name + Email row */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
                  <label style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', fontWeight: 500, color: '#94A3B8' }}>
                    Your Name
                  </label>
                  <input
                    type="text" name="name" placeholder="John Smith"
                    value={formData.name} onChange={handleChange}
                    onFocus={handleFocus} onBlur={handleBlur}
                    style={inputStyle} required
                  />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
                  <label style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', fontWeight: 500, color: '#94A3B8' }}>
                    Email Address
                  </label>
                  <input
                    type="email" name="email" placeholder="john@company.com"
                    value={formData.email} onChange={handleChange}
                    onFocus={handleFocus} onBlur={handleBlur}
                    style={inputStyle} required
                  />
                </div>
              </div>

              {/* Service */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
                <label style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', fontWeight: 500, color: '#94A3B8' }}>
                  Service Interested In
                </label>
                <select
                  name="service" value={formData.service}
                  onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur}
                  style={{ ...inputStyle, cursor: 'pointer' }}
                >
                  <option value="" style={{ background: '#0D1428' }}>Select a service...</option>
                  <option value="web"      style={{ background: '#0D1428' }}>Web Development</option>
                  <option value="mobile"   style={{ background: '#0D1428' }}>Mobile App</option>
                  <option value="design"   style={{ background: '#0D1428' }}>UI/UX Design</option>
                  <option value="backend"  style={{ background: '#0D1428' }}>Backend System</option>
                  <option value="brand"    style={{ background: '#0D1428' }}>Brand Identity</option>
                  <option value="strategy" style={{ background: '#0D1428' }}>Digital Strategy</option>
                </select>
              </div>

              {/* Message */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
                <label style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', fontWeight: 500, color: '#94A3B8' }}>
                  Message
                </label>
                <textarea
                  name="message"
                  placeholder="Tell us about your project, goals, and timeline..."
                  value={formData.message} onChange={handleChange}
                  onFocus={handleFocus} onBlur={handleBlur}
                  style={{ ...inputStyle, minHeight: '140px', resize: 'vertical' }}
                  required
                />
              </div>

              {/* Submit */}
              <div>
                <button
                  type="submit"
                  disabled={sending || sent}
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '8px',
                    padding: '13px 28px', borderRadius: '12px',
                    fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 600,
                    border: 'none', cursor: sending ? 'not-allowed' : 'pointer',
                    background: sent
                      ? 'linear-gradient(135deg, #10B981, #059669)'
                      : 'linear-gradient(135deg, #00D4FF, #3B82F6)',
                    color: '#0A0F1E',
                    opacity: sending ? 0.7 : 1,
                    boxShadow: '0 0 30px rgba(0,212,255,0.25)',
                    transition: 'box-shadow 0.2s ease, opacity 0.2s ease',
                  }}
                  onMouseEnter={e => { if (!sending && !sent) e.currentTarget.style.boxShadow = '0 0 50px rgba(0,212,255,0.45)'; }}
                  onMouseLeave={e => { if (!sending && !sent) e.currentTarget.style.boxShadow = '0 0 30px rgba(0,212,255,0.25)'; }}
                >
                  {sent ? (
                    <>✓ Message Sent!</>
                  ) : sending ? (
                    <>
                      <div style={{
                        width: '14px', height: '14px', borderRadius: '50%',
                        border: '2px solid #0A0F1E', borderTopColor: 'transparent',
                        animation: 'spin 0.7s linear infinite',
                      }} />
                      Sending...
                    </>
                  ) : (
                    <><Send size={14} /> Send Message</>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </section>
  );
}
