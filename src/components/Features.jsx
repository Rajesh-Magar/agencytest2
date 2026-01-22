import React from 'react';

const Features = () => {
    return (
        <section id="features" className="container">
            {/* Section 1: Metrics */}
            <div style={{ textAlign: 'center', marginBottom: '8rem' }}>
                <div className="badge">METRIX</div>
                <h2 className="gradient-text">Performance Insights<br />for your business</h2>
            </div>

            {/* Section 2: AI Automation Highlight */}
            <div className="glass" style={{
                display: 'grid',
                gridTemplateColumns: '1.2fr 1fr',
                gap: '4rem',
                padding: '4rem',
                marginBottom: '8rem',
                alignItems: 'center',
                borderRadius: '32px'
            }}>
                <div>
                    <h3 style={{ fontSize: '2.5rem', lineHeight: '1.2', marginBottom: '1.5rem' }}>
                        Introducing our <br />
                        <span style={{ color: 'var(--accent)' }}>AI-Powered</span> Task <br />
                        Automation
                    </h3>
                    <p className="muted" style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
                        Automate recurring tasks with AI, saving you time by learning your habits, predicting your needs, and managing routine workflows seamlessly.
                    </p>
                </div>
                <div className="glass" style={{ padding: '2rem', background: 'rgba(255,255,255,0.02)', borderRadius: '20px' }}>
                    <div style={{ opacity: 0.6, fontSize: '0.9rem' }}>
                        <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'space-between' }}>
                            <span>New Task</span>
                            <span>Sep 18, 2024</span>
                        </div>
                        <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'space-between' }}>
                            <span>Finish project report</span>
                            <span>04:00 PM</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <span>Meeting with design team</span>
                            <span>05:30 PM</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Section 3: User Productivity Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '4rem', alignItems: 'center' }}>
                <div>
                    <div className="badge">TESTIMONIAL</div>
                    <h2 style={{ fontSize: '2.8rem', lineHeight: '1.1' }}>How Our Users Enhance Their Productivity</h2>
                </div>
                <div className="glass" style={{ padding: '3rem', position: 'relative' }}>
                    <div style={{ fontSize: '3rem', color: 'var(--primary)', position: 'absolute', top: '1rem', left: '1rem', opacity: 0.3 }}>"</div>
                    <p style={{ fontSize: '1.25rem', lineHeight: '1.6', marginBottom: '2rem', position: 'relative', zIndex: 1 }}>
                        This app has completely transformed how I manage my tasks. With its smart reminders and automated workflows, I'm accomplishing more in less time. It's been a game-changer for my productivity!
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#444' }}></div>
                        <div>
                            <div style={{ fontWeight: 'bold' }}>Emma Johnson</div>
                            <div className="muted" style={{ fontSize: '0.8rem' }}>Project Manager</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Section 4: Seamless Integration */}
            <div style={{ marginTop: '10rem', display: 'grid', gridTemplateColumns: '1.2fr 1.1fr', gap: '6rem', alignItems: 'center' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
                    {[
                        { color: '#F24E1E', path: 'M12 2C9.79 2 8 3.79 8 6C8 8.21 9.79 10 12 10C14.21 10 16 8.21 16 6C16 3.79 14.21 2 12 2ZM6 8C3.79 8 2 9.79 2 12C2 14.21 3.79 16 6 16C8.21 16 10 14.21 10 12C10 9.79 8.21 8 6 8ZM12 10C9.79 10 8 11.79 8 14C8 16.21 9.79 18 12 18C14.21 18 16 16.21 16 14C16 11.79 14.21 10 12 10ZM12 22C14.21 22 16 20.21 16 18V22H12Z' },
                        { color: '#181717', path: 'M12 2C6.477 2 2 6.477 2 12C2 16.42 4.87 20.17 8.84 21.5C9.34 21.58 9.5 21.27 9.5 21V19.31C6.73 19.9 6.14 18.23 6.14 18.23C5.69 17.09 5.03 16.79 5.03 16.79C4.12 16.17 5.1 16.18 5.1 16.18C6.1 16.25 6.63 17.21 6.63 17.21C7.5 18.73 8.97 18.29 9.55 18.03C9.64 17.4 9.89 16.97 10.17 16.72C7.96 16.47 5.64 15.61 5.64 11.81C5.64 10.73 6.03 9.84 6.67 9.15C6.57 8.9 6.23 7.89 6.77 6.54C6.77 6.54 7.59 6.28 9.5 7.55C10.28 7.33 11.12 7.22 11.96 7.22C12.8 7.22 13.64 7.33 14.42 7.55C16.33 6.28 17.15 6.54 17.15 6.54C17.69 7.89 17.35 8.9 17.25 9.15C17.89 9.84 18.28 10.73 18.28 11.81C18.28 15.62 15.96 16.47 13.74 16.71C14.1 17.02 14.42 17.63 14.42 18.57V21C14.42 21.27 14.58 21.58 15.12 21.5C19.09 20.17 21.96 16.42 21.96 12C21.96 6.477 17.48 2 11.96 2H12Z' },
                        { color: '#000000', path: 'M16.03 3H7.97C4.12 3 1 6.12 1 9.97V18.03C1 21.88 4.12 25 7.97 25H16.03C19.88 25 23 21.88 23 18.03V9.97C23 6.12 19.88 3 16.03 3ZM19 19H5V9H19V19Z' },
                        { color: '#4A154B', path: 'M6 15C6 16.65 4.65 18 3 18C1.35 18 0 16.65 0 15C0 13.35 1.35 12 3 12H6V15ZM7.5 15C7.5 13.35 8.85 12 10.5 12C12.15 12 13.5 13.35 13.5 15V22.5C13.5 24.15 12.15 25.5 10.5 25.5C8.85 25.5 7.5 24.15 7.5 22.5V15Z' },
                        { color: '#0070F3', path: 'M24 7.6L12 0L0 7.6V22.4L12 30L24 22.4V7.6ZM12 26.5L3.6 21.2V8.8L12 14.1L20.4 8.8V21.2L12 26.5Z' },
                        { color: '#FF3366', path: 'M12 0L1.3 6.1V18.3L12 24.4L22.7 18.3V6.1L12 0ZM12 21L4.3 16.6V7.8L12 3.4L19.7 7.8V16.6L12 21Z' },
                        { color: '#3178C6', path: 'M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM11 16.5V7.5L16 12L11 16.5Z' },
                        { color: '#61DAFB', path: 'M12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22Z' },
                        { color: '#F7DF1E', path: 'M0 0H24V24H0V0ZM21.5 18.5H19.5V17H21.5V18.5Z' }
                    ].map((icon, i) => (
                        <div key={i} className="glass" style={{
                            aspectRatio: '1',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: '24px',
                            background: 'rgba(255,255,255,0.03)',
                            transition: 'all 0.3s ease',
                            cursor: 'pointer'
                        }}>
                            <svg width="32" height="32" viewBox="0 0 24 24" fill={icon.color} style={{ opacity: 0.8 }}>
                                <path d={icon.path} />
                            </svg>
                        </div>
                    ))}
                </div>
                <div>
                    <h2 style={{ fontSize: '3.5rem', lineHeight: '1', fontWeight: '800' }}>Seamless <br />Integration <br /><span className="muted" style={{ fontSize: '2.5rem' }}>with All Tools</span></h2>
                </div>
            </div>

            {/* Background Glows for Features */}
            <div className="bg-glow glow-blue" style={{ top: '20%', right: '-10%', opacity: 0.2 }}></div>
            <div className="bg-glow glow-pink" style={{ bottom: '10%', left: '-10%', opacity: 0.2 }}></div>
        </section>
    );
};

export default Features;
