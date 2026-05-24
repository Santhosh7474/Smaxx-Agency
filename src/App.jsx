import { useState } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Team from './components/Team';
import Works from './components/Works';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {/* Loading overlay — always on top */}
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}

      {/* Main site — full width, fade in after load */}
      <div
        style={{
          width: '100%',
          minHeight: '100vh',
          backgroundColor: '#0A0F1E',
          color: '#F8FAFC',
          fontFamily: "'Inter', sans-serif",
          opacity: loading ? 0 : 1,
          pointerEvents: loading ? 'none' : 'auto',
          transition: 'opacity 0.8s ease',
          display: 'flex',
          flexDirection: 'column',
          overflowX: 'hidden',
        }}
      >
        <Navbar />
        <main style={{ width: '100%', flex: 1, display: 'block', overflowX: 'hidden' }}>
          <Hero />
          <Team />
          <Works />
          <Services />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
