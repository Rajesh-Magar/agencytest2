import React from 'react';

const Navbar = () => {
  return (
    <nav className="glass" style={{
      position: 'fixed',
      top: '2rem',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '95%',
      maxWidth: '1200px',
      zIndex: 1000,
      padding: '0.75rem 1.5rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderRadius: '100px',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      background: 'rgba(3, 3, 3, 0.7)',
    }}>
      <div style={{ fontSize: '1.25rem', fontWeight: '800', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <div style={{
          width: '24px',
          height: '24px',
          background: 'linear-gradient(135deg, #20B2FF, #FF3F8E)',
          borderRadius: '6px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 5L5 9L13 1" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        todo
      </div>

      <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center', position: 'absolute', left: '50%', transform: 'translateX(-50%)' }} className="nav-links">
        <a href="#solutions" style={{ color: '#a1a1aa', fontSize: '0.9rem', textDecoration: 'none', fontWeight: '500' }}>Solutions</a>
        <a href="#resources" style={{ color: '#a1a1aa', fontSize: '0.9rem', textDecoration: 'none', fontWeight: '500' }}>Resources</a>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', cursor: 'pointer' }}>
          <span style={{ color: '#a1a1aa', fontSize: '0.9rem', fontWeight: '500' }}>Download</span>
          <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L5 5L9 1" stroke="#a1a1aa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <a href="#pricing" style={{ color: '#a1a1aa', fontSize: '0.9rem', textDecoration: 'none', fontWeight: '500' }}>Pricing</a>
      </div>

      <a href="#" className="btn btn-primary" style={{ padding: '0.6rem 1.5rem', fontSize: '0.85rem' }}>Get Started</a>

      <style jsx>{`
        @media (max-width: 900px) {
          .nav-links { display: none !important; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
