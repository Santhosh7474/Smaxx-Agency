import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/* ── Team photos ──────────────────────────────────────────────── */
import santhoshImg  from '../assets/team/Me.png';
import rishwanthImg from '../assets/team/rishi.png';
import ganeshImg    from '../assets/team/ganesh.png';
import yashwanthImg from '../assets/team/yashwanth.png';
import shashankImg  from '../assets/team/Shashank.png';
import deekshithImg from '../assets/team/deekshith.png';

/* ── Tech Icons ───────────────────────────────────────────────── */
import flutterIcon    from '../assets/Icons/flutter-original.svg';
import reactIcon      from '../assets/Icons/react-original.svg';
import androidIcon    from '../assets/Icons/android-plain.svg';
import pythonIcon     from '../assets/Icons/python-original.svg';
import firebaseIcon   from '../assets/Icons/firebase-original.svg';
import figmaIcon      from '../assets/Icons/figma-original.svg';
import behanceIcon    from '../assets/Icons/behance-original.svg';
import nodejsIcon     from '../assets/Icons/nodejs-original.svg';
import mysqlIcon      from '../assets/Icons/mysql-original.svg';
import kotlinIcon     from '../assets/Icons/kotlin-original.svg';
import javascriptIcon from '../assets/Icons/javascript-original.svg';
import html5Icon      from '../assets/Icons/html5-original.svg';
import css3Icon       from '../assets/Icons/css3-original.svg';
import gitIcon        from '../assets/Icons/git-original.svg';

gsap.registerPlugin(ScrollTrigger);

/* ────────────────────────────────────────────────────────────────
   TEAM DATA
   Each icon: { src, size, pos, layer }
   layer: 'back' = behind person (z:2), 'front' = in front (z:20)
   pos: CSS object with top/bottom/left/right
────────────────────────────────────────────────────────────────── */
const team = [
  {
    id: 1,
    name: 'Santhosh',
    fullName: 'Buchala Santhosh',
    image: santhoshImg,
    role: 'Full-stack & Mobile Developer',
    accent: '#00D4FF',
    description:
      "I'm a web and mobile developer focused on building responsive, user-friendly applications using modern technologies. I create fast, scalable websites and mobile apps with clean UI/UX, reliable performance, and seamless functionality across devices. Passionate about problem-solving and continuous learning, I enjoy turning ideas into practical digital solutions.",
    icons: [
      { src: androidIcon, size: 62, layer: 'back',  pos: { top: '18%', left: '20%' } },
      { src: reactIcon,   size: 78, layer: 'back',  pos: { top: '16%', right: '20%' } },
      { src: flutterIcon, size: 132,layer: 'front', pos: { top: '44%', left: '16%', transform: 'translateY(-50%)' } },
      { src: firebaseIcon,size: 110,layer: 'front', pos: { top: '46%', right: '17%', transform: 'translateY(-50%)' } },
      { src: pythonIcon,  size: 74, layer: 'front', pos: { bottom: '24%', right: '20%' } },
    ],
  },
  {
    id: 2,
    name: 'Rishwanth',
    fullName: 'Rishwanth',
    image: rishwanthImg,
    role: 'UI/UX Designer',
    accent: '#A855F7',
    description:
      'Transforms complex problems into intuitive, beautiful interfaces. Obsessed with micro-interactions, motion design, and human-centered design principles that make users smile. Crafts experiences that are as delightful to use as they are to look at.',
    icons: [
      { src: gitIcon,     size: 65, layer: 'back',  pos: { top: '20%', right: '21%' } },
      { src: figmaIcon,   size: 128,layer: 'front', pos: { top: '42%', left: '16%',  transform: 'translateY(-50%)' } },
      { src: behanceIcon, size: 108,layer: 'front', pos: { top: '44%', right: '17%', transform: 'translateY(-50%)' } },
    ],
  },
  {
    id: 3,
    name: 'Sai Ganesh',
    fullName: 'Sai Ganesh',
    image: ganeshImg,
    role: 'Backend Developer',
    accent: '#10B981',
    description:
      'Engineers the invisible backbone that powers great products. Specialises in scalable APIs, database optimisation, and cloud infrastructure that handles millions of requests. Turns complex data challenges into elegant, high-performance solutions.',
    icons: [
      { src: pythonIcon,  size: 68, layer: 'back',  pos: { top: '18%', left: '21%' } },
      { src: gitIcon,     size: 62, layer: 'back',  pos: { top: '20%', right: '21%' } },
      { src: nodejsIcon,  size: 128,layer: 'front', pos: { top: '43%', left: '16%',  transform: 'translateY(-50%)' } },
      { src: mysqlIcon,   size: 108,layer: 'front', pos: { top: '45%', right: '17%', transform: 'translateY(-50%)' } },
    ],
  },
  {
    id: 4,
    name: 'Yashwanth',
    fullName: 'Yashwanth',
    image: yashwanthImg,
    role: 'Flutter Developer',
    accent: '#3B82F6',
    description:
      'Builds stunning cross-platform mobile applications with Flutter that look and feel native on both iOS and Android. Turns complex UX into fluid, performant apps with beautiful animations and seamless state management.',
    icons: [
      { src: kotlinIcon,  size: 68, layer: 'back',  pos: { top: '19%', right: '21%' } },
      { src: flutterIcon, size: 132,layer: 'front', pos: { top: '42%', left: '16%',  transform: 'translateY(-50%)' } },
      { src: firebaseIcon,size: 110,layer: 'front', pos: { top: '44%', right: '17%', transform: 'translateY(-50%)' } },
    ],
  },
  {
    id: 5,
    name: 'Sai Shashank',
    fullName: 'Sai Shashank',
    image: shashankImg,
    role: 'Web Developer',
    accent: '#F59E0B',
    description:
      'Creates fast, accessible, and visually stunning websites. Passionate about performance optimisation, modern CSS, and building experiences that work flawlessly across all browsers and devices. Every pixel crafted with care.',
    icons: [
      { src: html5Icon,      size: 68, layer: 'back',  pos: { top: '18%', left: '21%' } },
      { src: css3Icon,       size: 62, layer: 'back',  pos: { top: '20%', right: '21%' } },
      { src: reactIcon,      size: 128,layer: 'front', pos: { top: '43%', left: '16%',  transform: 'translateY(-50%)' } },
      { src: javascriptIcon, size: 104,layer: 'front', pos: { top: '45%', right: '17%', transform: 'translateY(-50%)' } },
    ],
  },
  {
    id: 6,
    name: 'Deekshith',
    fullName: 'Deekshith',
    image: deekshithImg,
    role: 'Web Developer',
    accent: '#EC4899',
    description:
      'Builds interactive and dynamic web experiences with a focus on clean code and great performance. Brings creative ideas to life through modern JavaScript and cutting-edge frameworks. Loves crafting animations that feel alive.',
    icons: [
      { src: html5Icon,      size: 65, layer: 'back',  pos: { top: '17%', left: '21%' } },
      { src: gitIcon,        size: 62, layer: 'back',  pos: { top: '19%', right: '21%' } },
      { src: javascriptIcon, size: 128,layer: 'front', pos: { top: '43%', left: '16%',  transform: 'translateY(-50%)' } },
      { src: reactIcon,      size: 108,layer: 'front', pos: { top: '45%', right: '17%', transform: 'translateY(-50%)' } },
      { src: css3Icon,       size: 78, layer: 'front', pos: { bottom: '26%', left: '21%' } },
    ],
  },
];

/* ── Subtle background panel texture (like in the reference image) ─ */
function BackgroundPanels({ accent }) {
  const panels = [
    { top: '8%',  left: '18%', w: 110, h: 72 },
    { top: '15%', left: '3%',  w: 82,  h: 54 },
    { top: '30%', right: '22%',w: 94,  h: 64 },
    { top: '55%', left: '22%', w: 78,  h: 50 },
    { top: '20%', right: '3%', w: 100, h: 68 },
    { top: '65%', right: '18%',w: 86,  h: 58 },
    { top: '72%', left: '5%',  w: 70,  h: 46 },
    { top: '42%', left: '38%', w: 60,  h: 40 },
  ];
  return (
    <>
      {panels.map((p, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            top: p.top,
            left: p.left,
            right: p.right,
            width: `${p.w}px`,
            height: `${p.h}px`,
            borderRadius: '8px',
            background: 'rgba(255,255,255,0.015)',
            border: '1px solid rgba(255,255,255,0.025)',
            zIndex: 0,
            pointerEvents: 'none',
          }}
        />
      ))}
      {/* Large ambient glow behind person */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '500px',
        height: '600px',
        borderRadius: '50%',
        background: `radial-gradient(ellipse, ${accent}10 0%, transparent 70%)`,
        zIndex: 0,
        pointerEvents: 'none',
        filter: 'blur(40px)',
      }} />
    </>
  );
}

/* ── Sparkle decoration (as seen bottom-right in reference) ──── */
function Sparkle({ color }) {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 0L17.5 13.5L31 16L17.5 18.5L16 32L14.5 18.5L1 16L14.5 13.5L16 0Z" fill={color} opacity="0.6" />
    </svg>
  );
}

/* ── Single member card ──────────────────────────────────────── */
function MemberCard({ member }) {
  const cardRef    = useRef(null);
  const photoRef   = useRef(null);
  const nameRef    = useRef(null);
  const descRef    = useRef(null);
  const backIcons  = useRef([]);
  const frontIcons = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const trigger = {
        trigger: cardRef.current,
        start: 'top 90%',
        toggleActions: 'play none none reverse',
      };

      // Photo drifts up from below
      gsap.from(photoRef.current, {
        y: 60, opacity: 0, duration: 1.1, ease: 'power3.out', scrollTrigger: trigger,
      });

      // Name slides up
      gsap.from(nameRef.current, {
        y: 40, opacity: 0, duration: 0.9, ease: 'power3.out', delay: 0.15, scrollTrigger: trigger,
      });

      // Description fades
      gsap.from(descRef.current, {
        opacity: 0, y: 20, duration: 0.8, ease: 'power2.out', delay: 0.3, scrollTrigger: trigger,
      });

      // Back icons: fly in from outside, then settle + gentle float
      backIcons.current.forEach((el, i) => {
        if (!el) return;
        const isLeft = el.dataset.side === 'left';
        const startX = isLeft ? -280 : 280;
        gsap.fromTo(
          el,
          { x: startX, opacity: 0, scale: 0.5, rotation: isLeft ? -20 : 20 },
          {
            x: 0, opacity: 0.55, scale: 1, rotation: 0,
            duration: 2.2,
            ease: 'back.out(1.5)',
            delay: 0.1 + i * 0.15,
            scrollTrigger: trigger,
            onComplete: () => {
              gsap.to(el, { y: (i % 2 === 0 ? -10 : 10), duration: 6.5 + i * 1.0, ease: 'sine.inOut', repeat: -1, yoyo: true });
            },
          }
        );
      });

      // Front icons: dramatic fly-in from sides, elastic settle, then float
      frontIcons.current.forEach((el, i) => {
        if (!el) return;
        const isLeft = el.dataset.side === 'left';
        const startX = isLeft ? -350 : 350;
        gsap.fromTo(
          el,
          { x: startX, y: 60, opacity: 0, scale: 0.25, rotation: isLeft ? -15 : 15 },
          {
            x: 0, y: 0, opacity: 0.92, scale: 1, rotation: 0,
            duration: 2.6,
            ease: 'back.out(1.2)',
            delay: 0.3 + i * 0.2,
            scrollTrigger: trigger,
            onComplete: () => {
              gsap.to(el, {
                y: (i % 2 === 0 ? -14 : 14),
                rotation: (i % 2 === 0 ? -2 : 2),
                duration: 5.8 + i * 0.8,
                ease: 'sine.inOut',
                repeat: -1,
                yoyo: true,
              });
            },
          }
        );
      });
    });
    return () => ctx.revert();
  }, []);

  const backIconsList  = member.icons.filter(ic => ic.layer === 'back');
  const frontIconsList = member.icons.filter(ic => ic.layer === 'front');

  return (
    <div
      ref={cardRef}
      id={`member-${member.id}`}
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
        background: 'linear-gradient(160deg, #0A0F1E 0%, #060A14 60%, #0A0F1E 100%)',
      }}
    >
      {/* ── 0. Background texture panels ── */}
      <BackgroundPanels accent={member.accent} />

      {/* ── 1. Behind-person icons (z: 2) ── */}
      {backIconsList.map((ic, i) => {
        const isLeft = 'left' in ic.pos;
        return (
          <div
            key={`back-${i}`}
            ref={el => { backIcons.current[i] = el; if (el) el.dataset.side = isLeft ? 'left' : 'right'; }}
            title={ic.label}
            style={{
              position: 'absolute',
              ...ic.pos,
              width: `${ic.size}px`,
              height: `${ic.size}px`,
              zIndex: 2,
              opacity: 0.55,
              filter: 'drop-shadow(0 4px 16px rgba(0,0,0,0.6))',
              pointerEvents: 'none',
            }}
          >
            <img src={ic.src} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          </div>
        );
      })}

      {/* ── 2. Person photo (z: 10) ── */}
      <div
        ref={photoRef}
        style={{
          position: 'absolute',
          bottom: '15%',
          left: '50%',
          transform: 'translateX(-50%)',
          height: '82%',
          maxWidth: '65%',
          zIndex: 10,
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'center',
        }}
      >
        {/* Initials fallback */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '220px',
          height: '280px',
          borderRadius: '50% 50% 40% 40%',
          background: `linear-gradient(180deg, ${member.accent}18 0%, ${member.accent}06 100%)`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '5rem',
          fontWeight: 700,
          color: member.accent,
          fontFamily: "'Space Grotesk', sans-serif",
          border: `1px solid ${member.accent}20`,
        }}>
          {member.name.slice(0, 2).toUpperCase()}
        </div>

        {/* Real photo */}
        {member.image && (
          <img
            src={member.image}
            alt={member.name}
            style={{
              position: 'relative',
              height: '100%',
              width: 'auto',
              maxWidth: '100%',
              objectFit: 'contain',
              objectPosition: 'center bottom',
              zIndex: 1,
              userSelect: 'none',
              pointerEvents: 'none',
            }}
          />
        )}
      </div>

      {/* ── 3. In-front-of-person icons (z: 20) ── */}
      {frontIconsList.map((ic, i) => {
        const isLeft = 'left' in ic.pos;
        return (
          <div
            key={`front-${i}`}
            ref={el => { frontIcons.current[i] = el; if (el) el.dataset.side = isLeft ? 'left' : 'right'; }}
            title={ic.label}
            style={{
              position: 'absolute',
              ...ic.pos,
              width: `${ic.size}px`,
              height: `${ic.size}px`,
              zIndex: 20,
              opacity: 0.92,
              filter: `drop-shadow(0 8px 28px rgba(0,0,0,0.85)) drop-shadow(0 0 24px ${member.accent}35)`,
              pointerEvents: 'none',
            }}
          >
            <img src={ic.src} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          </div>
        );
      })}

      {/* ── 4. Bottom gradient fade (z: 25) ── */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '38%',
        background: 'linear-gradient(to top, #080C14 35%, rgba(8,12,20,0.85) 65%, transparent 100%)',
        zIndex: 25,
        pointerEvents: 'none',
      }} />

      {/* ── 5. Text block at bottom (z: 30) ── */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 30,
          textAlign: 'center',
          padding: '0 5% 3.5% 5%',
        }}
      >
        {/* Role pill */}
        <div style={{ marginBottom: '10px' }}>
          <span style={{
            display: 'inline-block',
            padding: '3px 14px',
            borderRadius: '999px',
            fontSize: '11px',
            fontWeight: 600,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            fontFamily: "'Inter', sans-serif",
            color: member.accent,
            background: `${member.accent}14`,
            border: `1px solid ${member.accent}35`,
          }}>
            {member.role}
          </span>
        </div>

        {/* Full name */}
        <h3
          ref={nameRef}
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 'clamp(2.2rem, 5.5vw, 5rem)',
            fontWeight: 900,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            color: '#FFFFFF',
            lineHeight: 1,
            marginBottom: '12px',
            textShadow: `0 2px 8px rgba(0,0,0,0.8), 0 0 40px ${member.accent}18`,
          }}
        >
          {member.fullName}
        </h3>

        {/* Description */}
        <p
          ref={descRef}
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 'clamp(0.78rem, 1.1vw, 0.92rem)',
            color: 'rgba(255,255,255,0.65)',
            maxWidth: '640px',
            margin: '0 auto',
            lineHeight: 1.65,
          }}
        >
          {member.description}
        </p>
      </div>

      {/* ── Sparkle decoration (bottom-right) ── */}
      <div style={{
        position: 'absolute',
        bottom: '4%',
        right: '4%',
        zIndex: 30,
        opacity: 0.7,
        animation: 'sparkleRotate 6s ease-in-out infinite',
      }}>
        <Sparkle color={member.accent} />
      </div>

      {/* ── Member index top-right ── */}
      <div style={{
        position: 'absolute',
        top: '4%',
        right: '4%',
        zIndex: 30,
        fontSize: '11px',
        fontWeight: 700,
        letterSpacing: '0.2em',
        textTransform: 'uppercase',
        fontFamily: "'Inter', sans-serif",
        color: 'rgba(255,255,255,0.25)',
      }}>
        {String(member.id).padStart(2, '0')} / {String(team.length).padStart(2, '0')}
      </div>

      {/* ── Thin accent line top ── */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '2px',
        background: `linear-gradient(90deg, transparent 0%, ${member.accent}60 50%, transparent 100%)`,
        zIndex: 30,
      }} />

      <style>{`
        @keyframes sparkleRotate {
          0%, 100% { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(15deg) scale(1.1); }
        }
      `}</style>
    </div>
  );
}

/* ── Section wrapper ─────────────────────────────────────────── */
export default function Team() {
  const headRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('[data-team-intro]', {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: headRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section id="team" style={{ width: '100%', background: '#080C14' }}>
      {/* ── Intro slide ── */}
      <div
        ref={headRef}
        style={{
          width: '100%',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
          background: 'linear-gradient(160deg, #0A0F1E 0%, #060A14 60%, #0A0F1E 100%)',
        }}
      >
        {/* Background ambient */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse 60% 50% at 50% 40%, rgba(0,212,255,0.05) 0%, transparent 70%)',
        }} />

        <span
          data-team-intro
          style={{
            fontSize: '11px', letterSpacing: '0.35em', textTransform: 'uppercase',
            fontWeight: 600, color: '#00D4FF', fontFamily: "'Inter', sans-serif", marginBottom: '20px',
          }}
        >
          The People Behind Smaxx
        </span>

        <h2
          data-team-intro
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 'clamp(3.5rem, 9vw, 7rem)',
            fontWeight: 700,
            color: '#F8FAFC',
            lineHeight: 1.02,
            letterSpacing: '-0.03em',
            textAlign: 'center',
            marginBottom: '24px',
          }}
        >
          Meet the{' '}
          <span style={{
            background: 'linear-gradient(135deg, #00D4FF, #3B82F6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Team
          </span>
        </h2>

        <p
          data-team-intro
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '1.1rem',
            color: '#64748B',
            maxWidth: '460px',
            textAlign: 'center',
            lineHeight: 1.7,
            marginBottom: '52px',
          }}
        >
          Six passionate builders turning concepts into digital masterpieces.
        </p>

        {/* Dot grid scroll hint */}
        <div data-team-intro style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontSize: '10px', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#334155', fontFamily: "'Inter', sans-serif" }}>
            Scroll to meet them
          </span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {[0, 1, 2].map(i => (
              <div key={i} style={{
                width: '4px', height: '4px', borderRadius: '50%',
                background: i === 0 ? '#00D4FF' : '#1E3A5F',
                animation: `dotPulse ${1.2 + i * 0.3}s ease-in-out infinite`,
                animationDelay: `${i * 0.2}s`,
              }} />
            ))}
          </div>
        </div>

        {/* Member name preview pills */}
        <div
          data-team-intro
          style={{
            position: 'absolute',
            bottom: '6%',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: '10px',
            flexWrap: 'wrap',
            justifyContent: 'center',
            maxWidth: '700px',
          }}
        >
          {team.map(m => (
            <a
              key={m.id}
              href={`#member-${m.id}`}
              onClick={e => {
                e.preventDefault();
                document.getElementById(`member-${m.id}`)?.scrollIntoView({ behavior: 'smooth' });
              }}
              style={{
                padding: '5px 16px',
                borderRadius: '999px',
                fontSize: '12px',
                fontWeight: 500,
                fontFamily: "'Inter', sans-serif",
                color: m.accent,
                background: `${m.accent}0F`,
                border: `1px solid ${m.accent}28`,
                cursor: 'pointer',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = `${m.accent}22`;
                e.currentTarget.style.borderColor = `${m.accent}55`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = `${m.accent}0F`;
                e.currentTarget.style.borderColor = `${m.accent}28`;
              }}
            >
              {m.name}
            </a>
          ))}
        </div>

        <style>{`
          @keyframes dotPulse {
            0%, 100% { opacity: 0.3; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.3); }
          }
        `}</style>
      </div>

      {/* ── Member slides ── */}
      {team.map(member => (
        <MemberCard key={member.id} member={member} />
      ))}
    </section>
  );
}
