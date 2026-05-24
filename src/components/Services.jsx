import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Globe, Smartphone, Palette, Server, Zap, TrendingUp } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    Icon: Globe,
    title: 'Web Development',
    description: 'High-performance websites and web apps built with modern frameworks. From landing pages to complex SaaS platforms.',
    color: '#00D4FF',
    features: ['React / Next.js', 'Performance Optimized', 'SEO Ready', 'Responsive Design'],
  },
  {
    Icon: Smartphone,
    title: 'Mobile Apps',
    description: 'Cross-platform Flutter applications that deliver native performance and stunning UX on iOS and Android.',
    color: '#3B82F6',
    features: ['Flutter / Dart', 'iOS & Android', 'Firebase Integration', 'Offline Support'],
  },
  {
    Icon: Palette,
    title: 'UI/UX Design',
    description: 'Human-centered design systems, prototypes, and interfaces crafted with Figma that users love.',
    color: '#A855F7',
    features: ['Figma Prototypes', 'Design Systems', 'User Research', 'Motion Design'],
  },
  {
    Icon: Server,
    title: 'Backend Systems',
    description: 'Scalable APIs, microservices, and database architecture designed for reliability and growth.',
    color: '#10B981',
    features: ['REST / GraphQL APIs', 'PostgreSQL / MongoDB', 'Docker & K8s', 'Cloud Deployment'],
  },
  {
    Icon: Zap,
    title: 'Brand Identity',
    description: 'Compelling visual identities — logos, typography, color systems — that make your brand unforgettable.',
    color: '#F59E0B',
    features: ['Logo Design', 'Brand Guidelines', 'Typography', 'Color Systems'],
  },
  {
    Icon: TrendingUp,
    title: 'Digital Strategy',
    description: 'Data-driven strategy and consultation to help you build the right product for the right audience.',
    color: '#EC4899',
    features: ['Market Research', 'Product Strategy', 'Growth Planning', 'Analytics Setup'],
  },
];

function ServiceCard({ service, index }) {
  const cardRef = useRef(null);
  const { Icon } = service;

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cardRef.current, {
        opacity: 0,
        y: 40,
        scale: 0.96,
        duration: 0.7,
        ease: 'power3.out',
        delay: (index % 3) * 0.08,
        scrollTrigger: { trigger: cardRef.current, start: 'top 90%', toggleActions: 'play none none reverse' },
      });
    });
    return () => ctx.revert();
  }, [index]);

  return (
    <div
      ref={cardRef}
      style={{
        borderRadius: '20px',
        padding: '30px',
        background: 'rgba(255,255,255,0.02)',
        border: '1px solid rgba(255,255,255,0.06)',
        transition: 'transform 0.35s ease, box-shadow 0.35s ease, background 0.35s ease, border-color 0.35s ease',
        cursor: 'default',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        gap: '0',
        height: '100%',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.background = `${service.color}08`;
        e.currentTarget.style.borderColor = `${service.color}30`;
        e.currentTarget.style.transform = 'translateY(-5px)';
        e.currentTarget.style.boxShadow = `0 20px 50px ${service.color}12`;
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = 'rgba(255,255,255,0.02)';
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      {/* Hover glow */}
      <div style={{
        position: 'absolute', top: 0, right: 0,
        width: '140px', height: '140px', borderRadius: '50%',
        background: `radial-gradient(circle, ${service.color}10 0%, transparent 70%)`,
        transform: 'translate(35%, -35%)',
        pointerEvents: 'none',
      }} />

      {/* Icon box */}
      <div style={{
        width: '48px', height: '48px', borderRadius: '14px',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: `${service.color}15`,
        border: `1px solid ${service.color}30`,
        marginBottom: '20px',
        flexShrink: 0,
      }}>
        <Icon size={22} style={{ color: service.color }} strokeWidth={1.5} />
      </div>

      {/* Title */}
      <h3 style={{
        fontFamily: "'Space Grotesk', sans-serif",
        fontSize: '1.1rem',
        fontWeight: 700,
        color: '#F8FAFC',
        marginBottom: '10px',
      }}>
        {service.title}
      </h3>

      {/* Description */}
      <p style={{
        fontFamily: "'Inter', sans-serif",
        fontSize: '0.875rem',
        color: '#64748B',
        lineHeight: 1.65,
        marginBottom: '20px',
        flex: 1,
      }}>
        {service.description}
      </p>

      {/* Features */}
      <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {service.features.map(feat => (
          <li key={feat} style={{
            display: 'flex', alignItems: 'center', gap: '8px',
            fontFamily: "'Inter', sans-serif",
            fontSize: '12px',
            color: '#94A3B8',
          }}>
            <span style={{
              width: '5px', height: '5px', borderRadius: '50%',
              background: service.color, flexShrink: 0,
            }} />
            {feat}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Services() {
  const headRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('[data-services-head]', {
        opacity: 0, y: 35, duration: 0.9, ease: 'power3.out', stagger: 0.1,
        scrollTrigger: { trigger: headRef.current, start: 'top 85%', toggleActions: 'play none none reverse' },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="services"
      style={{
        width: '100%',
        padding: '120px 0 100px',
        background: 'linear-gradient(180deg, #0D1428 0%, #0A0F1E 100%)',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Ambient glow bottom-left */}
      <div style={{
        position: 'absolute', bottom: '10%', left: '10%', width: '450px', height: '450px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(59,130,246,0.05) 0%, transparent 70%)',
        filter: 'blur(60px)', pointerEvents: 'none',
      }} />

      {/* Container */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 32px' }}>

        {/* Heading */}
        <div ref={headRef} style={{ textAlign: 'center', marginBottom: '64px' }}>
          <span data-services-head style={{
            display: 'block',
            fontSize: '11px',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            fontWeight: 600,
            color: '#00D4FF',
            fontFamily: "'Inter', sans-serif",
            marginBottom: '14px',
          }}>
            What We Do
          </span>

          <h2 data-services-head style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
            fontWeight: 700,
            color: '#F8FAFC',
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
            margin: '0 0 16px',
          }}>
            Our{' '}
            <span style={{
              background: 'linear-gradient(135deg, #00D4FF, #3B82F6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Services
            </span>
          </h2>

          <p data-services-head style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '1rem',
            color: '#64748B',
            maxWidth: '420px',
            margin: '0 auto',
            lineHeight: 1.7,
          }}>
            Full-spectrum digital services to build, design, and grow your brand.
          </p>
        </div>

        {/* Cards grid — pure CSS, no Tailwind */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '20px',
          alignItems: 'stretch',
        }}>
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
