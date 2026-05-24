import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: 'PunyaDaan Platform',
    description: 'A community-driven donation and volunteering platform connecting donors with verified NGOs through QR-based transactions.',
    tags: ['Flutter', 'Firebase', 'Node.js'],
    accent: '#00D4FF',
    category: 'Mobile App',
  },
  {
    id: 2,
    title: 'E-Commerce Suite',
    description: 'Full-featured multi-vendor marketplace with real-time inventory, analytics dashboard, and AI-powered product recommendations.',
    tags: ['React', 'Django', 'PostgreSQL'],
    accent: '#A855F7',
    category: 'Web App',
  },
  {
    id: 3,
    title: 'SaaS Dashboard',
    description: 'Enterprise analytics platform with live data visualization, role-based access control, and exportable PDF/Excel reports.',
    tags: ['Next.js', 'TypeScript', 'AWS'],
    accent: '#10B981',
    category: 'SaaS',
  },
  {
    id: 4,
    title: 'Brand Identity System',
    description: 'End-to-end brand design including logo, typography, color system, and responsive component library for a fintech startup.',
    tags: ['Figma', 'Design System', 'Motion'],
    accent: '#F59E0B',
    category: 'Design',
  },
  {
    id: 5,
    title: 'Real-Time Chat App',
    description: 'Scalable messaging application supporting group chats, file sharing, and end-to-end encryption built for 100k+ concurrent users.',
    tags: ['Socket.io', 'React', 'Redis'],
    accent: '#3B82F6',
    category: 'Web App',
  },
  {
    id: 6,
    title: 'Fitness Tracker',
    description: 'Cross-platform mobile app with workout plans, calorie tracking, and Bluetooth heart rate monitor integration.',
    tags: ['Flutter', 'Dart', 'BLE'],
    accent: '#EC4899',
    category: 'Mobile App',
  },
];

function ProjectCard({ project, index }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cardRef.current, {
        opacity: 0,
        y: 40,
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
        padding: '28px',
        cursor: 'pointer',
        transition: 'transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease',
        background: `linear-gradient(145deg, ${project.accent}10 0%, rgba(255,255,255,0.015) 100%)`,
        border: `1px solid ${project.accent}20`,
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        height: '100%',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-6px)';
        e.currentTarget.style.boxShadow = `0 24px 60px ${project.accent}18, 0 0 0 1px ${project.accent}35`;
        e.currentTarget.style.borderColor = `${project.accent}40`;
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
        e.currentTarget.style.borderColor = `${project.accent}20`;
      }}
    >
      {/* Top row: category + arrow */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{
          padding: '3px 12px',
          borderRadius: '999px',
          fontSize: '11px',
          fontWeight: 600,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          fontFamily: "'Inter', sans-serif",
          color: project.accent,
          background: `${project.accent}18`,
          border: `1px solid ${project.accent}30`,
        }}>
          {project.category}
        </span>
        <ArrowUpRight size={16} style={{ color: project.accent, opacity: 0.7 }} />
      </div>

      {/* Title */}
      <h3 style={{
        fontFamily: "'Space Grotesk', sans-serif",
        fontSize: '1.125rem',
        fontWeight: 700,
        color: '#F8FAFC',
        lineHeight: 1.3,
        margin: 0,
      }}>
        {project.title}
      </h3>

      {/* Description */}
      <p style={{
        fontFamily: "'Inter', sans-serif",
        fontSize: '0.875rem',
        color: '#64748B',
        lineHeight: 1.65,
        margin: 0,
        flex: 1,
      }}>
        {project.description}
      </p>

      {/* Tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '4px' }}>
        {project.tags.map(tag => (
          <span key={tag} style={{
            padding: '3px 10px',
            borderRadius: '6px',
            fontSize: '11px',
            fontWeight: 500,
            fontFamily: "'Inter', sans-serif",
            color: '#94A3B8',
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.07)',
          }}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Works() {
  const headRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('[data-works-head]', {
        opacity: 0, y: 35, duration: 0.9, ease: 'power3.out', stagger: 0.1,
        scrollTrigger: { trigger: headRef.current, start: 'top 85%', toggleActions: 'play none none reverse' },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="works"
      style={{
        width: '100%',
        padding: '120px 0 100px',
        background: '#0A0F1E',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Ambient glow top-right */}
      <div style={{
        position: 'absolute', top: 0, right: '15%', width: '400px', height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,212,255,0.04) 0%, transparent 70%)',
        filter: 'blur(60px)', pointerEvents: 'none',
      }} />

      {/* Container */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 32px' }}>

        {/* Heading */}
        <div ref={headRef} style={{ textAlign: 'center', marginBottom: '64px' }}>
          <span data-works-head style={{
            display: 'block',
            fontSize: '11px',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            fontWeight: 600,
            color: '#00D4FF',
            fontFamily: "'Inter', sans-serif",
            marginBottom: '14px',
          }}>
            Portfolio
          </span>

          <h2 data-works-head style={{
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
              Works
            </span>
          </h2>

          <p data-works-head style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '1rem',
            color: '#64748B',
            maxWidth: '420px',
            margin: '0 auto',
            lineHeight: 1.7,
          }}>
            A curated selection of projects we've built with passion and precision.
          </p>
        </div>

        {/* Cards grid — pure CSS grid, no Tailwind */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '20px',
          alignItems: 'stretch',
        }}>
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
