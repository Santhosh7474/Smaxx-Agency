import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Linkedin, Github, ExternalLink } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const members = [
  {
    name: 'Santhosh',
    role: 'Full-stack & Mobile Developer',
    initials: 'SA',
    color: '#00D4FF',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
  },
  {
    name: 'Rishwanth',
    role: 'UI/UX Designer',
    initials: 'RI',
    color: '#A855F7',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
  },
  {
    name: 'Sai Ganesh',
    role: 'Backend Developer',
    initials: 'SG',
    color: '#10B981',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
  },
  {
    name: 'Yashwanth',
    role: 'Flutter Developer',
    initials: 'YA',
    color: '#3B82F6',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
  },
  {
    name: 'Sai Shashank',
    role: 'Web Developer',
    initials: 'SS',
    color: '#F59E0B',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
  },
  {
    name: 'Deekshith',
    role: 'Web Developer',
    initials: 'DE',
    color: '#EC4899',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
  },
];

export default function ProfileCards() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title fade in
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      });

      // Cards stagger reveal
      gsap.from('.profile-card', {
        opacity: 0,
        y: 40,
        scale: 0.95,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="profiles"
      ref={containerRef}
      className="py-28 relative overflow-hidden"
      style={{ background: '#0A0F1E' }}
    >
      {/* Background glow lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(0, 212, 255, 0.15) 0%, transparent 50%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div ref={titleRef} className="text-center mb-20">
          <span
            className="text-xs tracking-[0.3em] uppercase font-medium block mb-4"
            style={{ color: '#00D4FF', fontFamily: "'Inter', sans-serif" }}
          >
            Connect
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold"
            style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#F8FAFC' }}
          >
            Member{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #00D4FF, #3B82F6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Profiles
            </span>
          </h2>
          <p
            className="mt-4 text-base max-w-md mx-auto"
            style={{ color: '#64748B', fontFamily: "'Inter', sans-serif" }}
          >
            Check out our code repositories and professional connections.
          </p>
        </div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {members.map((member) => (
            <div
              key={member.name}
              className="profile-card group relative rounded-2xl p-6 transition-all duration-300"
              style={{
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.06)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)';
                e.currentTarget.style.borderColor = `${member.color}40`;
                e.currentTarget.style.boxShadow = `0 15px 35px ${member.color}15`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.02)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.06)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Outer Card Glow */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 50% 10%, ${member.color}12 0%, transparent 60%)`,
                }}
              />

              <div className="flex items-center gap-4 relative z-10">
                {/* Initials Avatar */}
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center font-bold text-lg"
                  style={{
                    background: `${member.color}15`,
                    border: `1px solid ${member.color}30`,
                    color: member.color,
                    fontFamily: "'Space Grotesk', sans-serif",
                    textShadow: `0 0 10px ${member.color}40`,
                  }}
                >
                  {member.initials}
                </div>

                {/* Name & Role */}
                <div>
                  <h3
                    className="text-lg font-bold"
                    style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#F8FAFC' }}
                  >
                    {member.name}
                  </h3>
                  <p
                    className="text-xs"
                    style={{ color: '#64748B', fontFamily: "'Inter', sans-serif" }}
                  >
                    {member.role}
                  </p>
                </div>
              </div>

              {/* Action Links */}
              <div className="mt-8 flex gap-3 relative z-10">
                {/* LinkedIn Card Link */}
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs font-semibold transition-all duration-300"
                  style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.06)',
                    color: '#94A3B8',
                    fontFamily: "'Inter', sans-serif",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#F8FAFC';
                    e.currentTarget.style.background = 'rgba(59, 130, 246, 0.15)';
                    e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#94A3B8';
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.06)';
                  }}
                >
                  <Linkedin size={14} />
                  LinkedIn
                  <ExternalLink size={10} className="opacity-60" />
                </a>

                {/* GitHub Card Link */}
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs font-semibold transition-all duration-300"
                  style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.06)',
                    color: '#94A3B8',
                    fontFamily: "'Inter', sans-serif",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#F8FAFC';
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#94A3B8';
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.06)';
                  }}
                >
                  <Github size={14} />
                  GitHub
                  <ExternalLink size={10} className="opacity-60" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
