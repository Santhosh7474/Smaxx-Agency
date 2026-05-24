import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowRight, ChevronDown } from 'lucide-react';

export default function Hero() {
  const heroRef = useRef(null);
  const headlineRef = useRef(null);
  const taglineRef = useRef(null);
  const ctaRef = useRef(null);
  const scrollRef = useRef(null);
  const orb1Ref = useRef(null);
  const orb2Ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 });

      tl.from(headlineRef.current.children, {
        y: 80,
        opacity: 0,
        stagger: 0.12,
        duration: 1,
        ease: 'power4.out',
      })
        .from(taglineRef.current, {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
        }, '-=0.4')
        .from(ctaRef.current.children, {
          y: 20,
          opacity: 0,
          stagger: 0.15,
          duration: 0.7,
          ease: 'power3.out',
        }, '-=0.4')
        .from(scrollRef.current, {
          opacity: 0,
          y: 10,
          duration: 0.5,
        }, '-=0.2');

      // Floating orbs
      gsap.to(orb1Ref.current, { x: 30, y: -20, duration: 6, ease: 'sine.inOut', repeat: -1, yoyo: true });
      gsap.to(orb2Ref.current, { x: -25, y: 25, duration: 8, ease: 'sine.inOut', repeat: -1, yoyo: true, delay: 1 });
    });

    // Mouse parallax — keep outside context since it references window
    const handleMouse = (e) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const dx = (e.clientX - cx) / cx;
      const dy = (e.clientY - cy) / cy;
      gsap.to(orb1Ref.current, { x: dx * 40, y: dy * 30, duration: 1.5, ease: 'power2.out' });
      gsap.to(orb2Ref.current, { x: -dx * 30, y: -dy * 20, duration: 2, ease: 'power2.out' });
    };
    window.addEventListener('mousemove', handleMouse);

    return () => {
      ctx.revert();                               // ← kills all GSAP tweens on unmount
      window.removeEventListener('mousemove', handleMouse);
    };
  }, []);


  const scrollToTeam = () => {
    document.querySelector('#team')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden grid-bg"
    >
      {/* Ambient orbs */}
      <div
        ref={orb1Ref}
        className="absolute pointer-events-none"
        style={{
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,212,255,0.10) 0%, transparent 70%)',
          top: '-10%',
          right: '-5%',
          filter: 'blur(40px)',
        }}
      />
      <div
        ref={orb2Ref}
        className="absolute pointer-events-none"
        style={{
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(59,130,246,0.10) 0%, transparent 70%)',
          bottom: '-10%',
          left: '-5%',
          filter: 'blur(40px)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8 text-xs font-medium tracking-widest uppercase"
          style={{
            background: 'rgba(0,212,255,0.06)',
            border: '1px solid rgba(0,212,255,0.2)',
            color: '#00D4FF',
            fontFamily: "'Inter', sans-serif",
          }}>
          <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#00D4FF' }} />
          Available for Projects
        </div>

        {/* Headline */}
        <div
          ref={headlineRef}
          className="overflow-hidden"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          <h1
            className="text-5xl sm:text-7xl md:text-8xl font-bold leading-none tracking-tight mb-2"
            style={{ display: 'block' }}
          >
            <span
              style={{
                background: 'linear-gradient(135deg, #F8FAFC 30%, #94A3B8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              SMAXX
            </span>
          </h1>
          <h2
            className="text-5xl sm:text-7xl md:text-8xl font-bold leading-none tracking-tight"
            style={{ display: 'block' }}
          >
            <span
              style={{
                background: 'linear-gradient(135deg, #00D4FF 0%, #3B82F6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 0 30px rgba(0,212,255,0.4))',
              }}
            >
              Agency
            </span>
          </h2>
        </div>

        {/* Tagline */}
        <p
          ref={taglineRef}
          className="mt-8 text-lg md:text-xl max-w-xl mx-auto leading-relaxed"
          style={{ color: '#94A3B8', fontFamily: "'Inter', sans-serif" }}
        >
          We build your presence,{' '}
          <span style={{ color: '#F8FAFC' }}>online and beyond.</span>
        </p>

        {/* CTA Buttons */}
        <div
          ref={ctaRef}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => document.querySelector('#works')?.scrollIntoView({ behavior: 'smooth' })}
            className="group flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm transition-all duration-300"
            style={{
              background: 'linear-gradient(135deg, #00D4FF, #3B82F6)',
              color: '#0A0F1E',
              fontFamily: "'Inter', sans-serif",
              boxShadow: '0 0 30px rgba(0,212,255,0.3)',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 0 50px rgba(0,212,255,0.5)'; e.currentTarget.style.transform = 'scale(1.04)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '0 0 30px rgba(0,212,255,0.3)'; e.currentTarget.style.transform = 'scale(1)'; }}
          >
            Our Work
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
          </button>

          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm transition-all duration-300"
            style={{
              background: 'transparent',
              border: '1px solid rgba(248,250,252,0.15)',
              color: '#F8FAFC',
              fontFamily: "'Inter', sans-serif",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(0,212,255,0.4)'; e.currentTarget.style.color = '#00D4FF'; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(248,250,252,0.15)'; e.currentTarget.style.color = '#F8FAFC'; }}
          >
            Get in Touch
          </button>
        </div>

        {/* Stats row */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-10">
          {[
            { value: '6+', label: 'Experts' },
            { value: '20+', label: 'Projects' },
            { value: '100%', label: 'Dedication' },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1">
              <span
                className="text-3xl font-bold"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  background: 'linear-gradient(135deg, #00D4FF, #3B82F6)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {stat.value}
              </span>
              <span className="text-xs tracking-widest uppercase" style={{ color: '#64748B', fontFamily: "'Inter', sans-serif" }}>
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        ref={scrollRef}
        onClick={scrollToTeam}
        className="absolute bottom-8 flex flex-col items-center gap-2 group cursor-pointer"
        style={{ color: '#64748B' }}
        aria-label="Scroll down"
      >
        <span className="text-xs tracking-widest uppercase" style={{ fontFamily: "'Inter', sans-serif" }}>
          Scroll
        </span>
        <ChevronDown size={16} className="animate-bounce" />
      </button>
    </section>
  );
}
