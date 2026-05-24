import { useState } from 'react';
import { ArrowUp, Github, Linkedin, Twitter, Instagram } from 'lucide-react';

/* ── Interactive Navigation Link with electric underline ── */
function FooterNavLink({ href, children }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontSize: '13px',
        fontWeight: 600,
        color: hovered ? '#FFFFFF' : '#94A3B8',
        fontFamily: "'Inter', sans-serif",
        textDecoration: 'none',
        transition: 'all 0.3s ease',
        position: 'relative',
        paddingBottom: '4px',
      }}
    >
      {children}
      <span
        style={{
          position: 'absolute',
          bottom: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: hovered ? '100%' : '0%',
          height: '2px',
          background: '#00D4FF',
          transition: 'width 0.3s ease',
          boxShadow: '0 0 10px rgba(0,212,255,0.6)',
        }}
      />
    </a>
  );
}

/* ── Interactive Social Button with hover scale/glow ── */
function SocialButton({ icon: Icon, href, label }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: hovered ? 'rgba(0,212,255,0.08)' : 'rgba(255,255,255,0.02)',
        border: hovered ? '1px solid rgba(0,212,255,0.35)' : '1px solid rgba(255,255,255,0.06)',
        color: hovered ? '#00D4FF' : '#94A3B8',
        transition: 'all 0.3s ease',
        transform: hovered ? 'translateY(-3px)' : 'none',
        boxShadow: hovered ? '0 5px 15px rgba(0,212,255,0.15)' : 'none',
        cursor: 'pointer',
      }}
    >
      <Icon size={18} />
    </a>
  );
}

export default function Footer() {
  const [logoHovered, setLogoHovered] = useState(false);
  const [scrollBtnHovered, setScrollBtnHovered] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  ];

  return (
    <footer
      style={{
        position: 'relative',
        padding: '60px 0 40px 0',
        overflow: 'hidden',
        background: '#070C14',
      }}
    >
      {/* Premium gradient top line separator */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background:
            'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.03) 15%, rgba(0,212,255,0.2) 50%, rgba(255,255,255,0.03) 85%, transparent 100%)',
          zIndex: 1,
        }}
      />

      {/* Ambient background glow */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '700px',
          height: '180px',
          borderRadius: '50% 50% 0 0',
          background: 'radial-gradient(ellipse at bottom, rgba(0,212,255,0.05) 0%, transparent 70%)',
          zIndex: 0,
          pointerEvents: 'none',
          filter: 'blur(35px)',
        }}
      />

      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px',
          position: 'relative',
          zIndex: 10,
        }}
      >
        {/* Main Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '40px',
            alignItems: 'center',
            borderBottom: '1px solid rgba(255,255,255,0.04)',
            paddingBottom: '40px',
            marginBottom: '30px',
          }}
        >
          {/* Logo & Tagline */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
            }}
          >
            <a
              href="#hero"
              onMouseEnter={() => setLogoHovered(true)}
              onMouseLeave={() => setLogoHovered(false)}
              style={{
                textDecoration: 'none',
                fontSize: '24px',
                fontWeight: 'bold',
                trackingWidest: '0.15em',
                fontFamily: "'Space Grotesk', sans-serif",
                transition: 'all 0.3s ease',
                transform: logoHovered ? 'scale(1.05)' : 'none',
                display: 'inline-block',
              }}
            >
              <span style={{ color: '#F8FAFC' }}>SM</span>
              <span
                style={{
                  color: '#00D4FF',
                  textShadow: logoHovered
                    ? '0 0 25px rgba(0,212,255,0.85)'
                    : '0 0 15px rgba(0,212,255,0.4)',
                  transition: 'all 0.3s ease',
                }}
              >
                AXX
              </span>
            </a>
            <p
              style={{
                color: '#64748B',
                fontFamily: "'Inter', sans-serif",
                fontSize: '13px',
                marginTop: '12px',
                maxWidth: '260px',
                lineHeight: 1.5,
              }}
            >
              We build your presence, online and beyond. Beautiful web and mobile masterpieces.
            </p>
          </div>

          {/* Center Links */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '16px',
            }}
          >
            <span
              style={{
                fontSize: '11px',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#475569',
                fontFamily: "'Inter', sans-serif",
                fontWeight: 700,
              }}
            >
              Navigation
            </span>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '24px',
              }}
            >
              {['Home', 'Team', 'Works', 'Services', 'Contact'].map((link) => (
                <FooterNavLink key={link} href={`#${link.toLowerCase()}`}>
                  {link}
                </FooterNavLink>
              ))}
            </div>
          </div>

          {/* Social Links Panel */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '16px',
            }}
          >
            <span
              style={{
                fontSize: '11px',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#475569',
                fontFamily: "'Inter', sans-serif",
                fontWeight: 700,
              }}
            >
              Social Media
            </span>
            <div
              style={{
                display: 'flex',
                gap: '12px',
                justifyContent: 'center',
              }}
            >
              {socialLinks.map((social) => (
                <SocialButton
                  key={social.label}
                  icon={social.icon}
                  href={social.href}
                  label={social.label}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom copyright & Scroll to Top */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            smDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '20px',
            flexWrap: 'wrap',
          }}
        >
          {/* Copyright */}
          <p
            style={{
              color: '#475569',
              fontFamily: "'Inter', sans-serif",
              fontSize: '12px',
              margin: 0,
              textAlign: 'center',
            }}
          >
            &copy; {new Date().getFullYear()} Smaxx Agency. All rights reserved. Made for leaders.
          </p>

          {/* Scroll to top button */}
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            onMouseEnter={() => setScrollBtnHovered(true)}
            onMouseLeave={() => setScrollBtnHovered(false)}
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: scrollBtnHovered ? '#00D4FF' : 'rgba(255,255,255,0.02)',
              border: scrollBtnHovered ? '1px solid #00D4FF' : '1px solid rgba(255,255,255,0.08)',
              color: scrollBtnHovered ? '#070C14' : '#00D4FF',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              transform: scrollBtnHovered ? 'translateY(-4px)' : 'none',
              boxShadow: scrollBtnHovered ? '0 0 20px rgba(0,212,255,0.45)' : 'none',
              cursor: 'pointer',
              outline: 'none',
            }}
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
}
