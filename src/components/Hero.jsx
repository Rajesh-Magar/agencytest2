import React from 'react';

const Hero = () => {
    return (
        <section className="container" style={{
            paddingTop: '12rem',
            textAlign: 'center',
            position: 'relative',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            {/* Background Glows */}
            <div className="bg-glow glow-pink" style={{ top: '0', left: '0', opacity: 0.4 }}></div>
            <div className="bg-glow glow-blue" style={{ bottom: '20%', right: '0', opacity: 0.3 }}></div>
            <div className="bg-glow glow-pink" style={{ bottom: '0', left: '50%', transform: 'translateX(-50%)', width: '800px', opacity: 0.2 }}></div>

            <div style={{ maxWidth: '900px', margin: '0 auto', zIndex: 1 }}>
                <h1 className="gradient-text">
                    The Go-To Hub<br />for All Your To-Dos
                </h1>
                <p className="muted" style={{ marginBottom: '3rem' }}>
                    Your essential tool for streamlining task management and achieving greater efficiency in your daily routine.
                </p>

                <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', marginBottom: '6rem' }}>
                    <button className="btn btn-primary">Start now- its free!</button>
                </div>
            </div>

            {/* Dashboard Preview Card */}
            <div className="glass" style={{
                width: '100%',
                maxWidth: '1100px',
                aspectRatio: '16/10',
                margin: '0 auto',
                padding: '2rem',
                position: 'relative',
                boxShadow: '0 40px 80px rgba(0,0,0,0.6)',
                overflow: 'hidden',
                display: 'flex',
                gap: '2rem'
            }}>
                {/* Sidebar Mockup */}
                <div style={{ width: '220px', borderRight: '1px solid rgba(255,255,255,0.05)', paddingRight: '1.5rem', textAlign: 'left' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
                        <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#ccc' }}></div>
                        <span style={{ fontSize: '0.9rem', fontWeight: '600' }}>Mason Mark</span>
                    </div>
                    <div className="btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.8rem', width: '100%', marginBottom: '1.5rem' }}>Add Task +</div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: '#a1a1aa', fontSize: '0.85rem' }}>
                        <span>Inbox</span>
                        <span style={{ color: '#fff' }}>Today</span>
                        <span>Filters & Labels</span>
                    </div>
                    <div style={{ marginTop: '2.5rem', color: '#a1a1aa', fontSize: '0.75rem', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '1rem' }}>Personal Projects</div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', color: '#a1a1aa', fontSize: '0.85rem' }}>
                        <span>Fitness</span>
                        <span>Groceries</span>
                        <span>Appointments</span>
                    </div>
                </div>

                {/* Main Content Mockup */}
                <div style={{ flex: 1, textAlign: 'left' }}>
                    <h2 style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>Panze web design & development</h2>
                    <p style={{ color: '#a1a1aa', fontSize: '0.9rem', marginBottom: '2rem', maxWidth: '500px' }}>
                        Hi Team, Here's a detailed summary of our current progress on the Panze web design and development project.
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                        <div>
                            <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Design Phase:</h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                <label style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.85rem' }}>
                                    <input type="checkbox" checked readOnly style={{ accentColor: 'var(--primary)' }} /> Wireframe Creation
                                </label>
                                <label style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.85rem' }}>
                                    <input type="checkbox" checked readOnly style={{ accentColor: 'var(--primary)' }} /> Mockup Design
                                </label>
                                <label style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.85rem' }}>
                                    <input type="checkbox" readOnly /> Asset Development
                                </label>
                            </div>
                        </div>
                        <div className="glass" style={{ padding: '1.5rem', borderRadius: '16px' }}>
                            <h3 style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>Make your task easier</h3>
                            <div style={{ fontSize: '0.75rem', color: '#a1a1aa' }}>
                                Write your #Prompt in your language
                                <div style={{ marginTop: '1rem', padding: '1rem', background: 'rgba(255,255,255,0.03)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)' }}>
                                    I need a 2-day honeymoon itinerary for Paris...
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Shine Gradient */}
                <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '200px',
                    background: 'linear-gradient(transparent, rgba(255, 63, 142, 0.1))',
                    pointerEvents: 'none'
                }}></div>
            </div>
        </section>
    );
};

export default Hero;
