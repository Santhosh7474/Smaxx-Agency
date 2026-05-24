import { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const screenRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    // 1. Lock body scroll instantly
    document.body.style.overflow = 'hidden';

    // 2. Animate logo entry
    gsap.fromTo(
      logoRef.current,
      { opacity: 0, y: 30, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: 'power3.out' }
    );

    // 3. Smooth counter progress simulation
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += Math.floor(Math.random() * 8) + 2;
      if (currentProgress >= 100) {
        currentProgress = 100;
        clearInterval(interval);
        
        // Let it rest at 100% for a brief moment, then fade out
        setTimeout(() => {
          gsap.to(screenRef.current, {
            opacity: 0,
            duration: 0.6,
            ease: 'power2.inOut',
            onComplete: () => {
              document.body.style.overflow = '';
              onComplete();
            },
          });
        }, 300);
      }
      setProgress(currentProgress);
    }, 80);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = '';
    };
  }, [onComplete]);

  return (
    <div
      ref={screenRef}
      className="fixed inset-0 w-full h-full flex flex-col items-center justify-center"
      style={{
        backgroundColor: '#0A0F1E',
        zIndex: 99999, // extremely high z-index to overlay everything
      }}
    >
      {/* Premium ambient radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(0, 212, 255, 0.08) 0%, transparent 70%)',
        }}
      />

      {/* Centered Content */}
      <div className="flex flex-col items-center justify-center text-center px-6 relative z-10">
        {/* Logo Text */}
        <div
          ref={logoRef}
          className="text-6xl md:text-8xl font-bold tracking-[0.15em] mb-4 flex items-center justify-center"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          <span style={{ color: '#F8FAFC' }}>SM</span>
          <span
            style={{
              color: '#00D4FF',
              textShadow: '0 0 30px rgba(0,212,255,0.8), 0 0 60px rgba(0,212,255,0.4)',
            }}
          >
            AXX
          </span>
        </div>

        {/* Agency Tagline */}
        <p
          className="text-xs md:text-sm tracking-[0.4em] uppercase mb-10 font-semibold"
          style={{ color: '#64748B', fontFamily: "'Inter', sans-serif" }}
        >
          Agency
        </p>

        {/* Progress Bar Container */}
        <div className="w-64 md:w-80">
          {/* Progress bar track */}
          <div
            className="h-[2px] w-full rounded-full overflow-hidden mb-3"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.08)' }}
          >
            <div
              className="h-full rounded-full transition-all duration-150 ease-out"
              style={{
                width: `${progress}%`,
                background: 'linear-gradient(90deg, #3B82F6, #00D4FF)',
                boxShadow: '0 0 12px rgba(0, 212, 255, 0.6)',
              }}
            />
          </div>

          {/* Progress Percent Text */}
          <div className="flex justify-end">
            <span
              className="text-xs font-bold font-mono tracking-wider"
              style={{ color: '#00D4FF' }}
            >
              {progress}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
