import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import gsap from 'gsap';

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Team', href: '#team' },
  { label: 'Works', href: '#works' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    gsap.from(navRef.current, {
      y: -60,
      opacity: 0,
      duration: 0.8,
      delay: 0.2,
      ease: 'power3.out',
    });

    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled
          ? 'rgba(10, 15, 30, 0.92)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(0,212,255,0.08)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNav(e, '#hero')}
          className="text-xl font-bold tracking-widest"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          <span style={{ color: '#F8FAFC' }}>SM</span>
          <span
            style={{
              color: '#00D4FF',
              textShadow: '0 0 15px rgba(0,212,255,0.5)',
            }}
          >
            AXX
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleNav(e, link.href)}
                className="text-sm font-medium transition-colors duration-200 relative group"
                style={{
                  color: '#94A3B8',
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                <span className="group-hover:text-white transition-colors duration-200"
                  style={{ display: 'inline-block' }}>
                  {link.label}
                </span>
                <span
                  className="absolute -bottom-0.5 left-0 h-px w-0 group-hover:w-full transition-all duration-300"
                  style={{ background: 'linear-gradient(90deg, #00D4FF, #3B82F6)' }}
                />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          onClick={(e) => handleNav(e, '#contact')}
          className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-all duration-300"
          style={{
            background: 'linear-gradient(135deg, #00D4FF22, #3B82F622)',
            border: '1px solid rgba(0,212,255,0.3)',
            color: '#00D4FF',
            fontFamily: "'Inter', sans-serif",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'linear-gradient(135deg, #00D4FF33, #3B82F633)';
            e.currentTarget.style.boxShadow = '0 0 20px rgba(0,212,255,0.2)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'linear-gradient(135deg, #00D4FF22, #3B82F622)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          Let's Talk
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-lg"
          style={{ color: '#F8FAFC' }}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden px-6 pb-6 pt-2 flex flex-col gap-4"
          style={{
            background: 'rgba(10,15,30,0.98)',
            borderBottom: '1px solid rgba(0,212,255,0.08)',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNav(e, link.href)}
              className="text-sm font-medium py-2"
              style={{ color: '#94A3B8', fontFamily: "'Inter', sans-serif" }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
