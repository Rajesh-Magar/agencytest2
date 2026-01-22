import React from 'react';

const CTASection = () => {
    return (
        <section className="container" style={{ padding: '10rem 0' }}>
            <div style={{ textAlign: 'center', position: 'relative' }}>
                {/* Background Glows for CTA */}
                <div className="bg-glow glow-pink" style={{ top: '50%', left: '10%', opacity: 0.3 }}></div>
                <div className="bg-glow glow-blue" style={{ top: '50%', right: '10%', opacity: 0.3 }}></div>

                <h2 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', fontWeight: '800' }}>
                    Master Your Workflow
                </h2>
                <p className="muted" style={{ marginBottom: '3.5rem', maxWidth: '600px', margin: '0 auto 3.5rem' }}>
                    Take charge and effortlessly manage tasks to keep you on track.
                </p>

                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <button className="btn btn-primary" style={{ padding: '1.25rem 3rem', fontSize: '1.1rem' }}>
                        Start now- its free!
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
