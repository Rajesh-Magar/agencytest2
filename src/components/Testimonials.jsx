import React from 'react';

const TestimonialCard = ({ content, author, role, avatar }) => (
    <div className="glass" style={{ padding: '2.5rem' }}>
        <p style={{ fontSize: '1.125rem', marginBottom: '2rem', fontStyle: 'italic', color: 'var(--text-main)' }}>
            "{content}"
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{
                width: '3rem',
                height: '3rem',
                borderRadius: '50%',
                background: 'var(--glass-border)',
                overflow: 'hidden'
            }}>
                <div style={{ width: '100%', height: '100%', background: 'linear-gradient(45deg, var(--primary), var(--accent-purple))' }}></div>
            </div>
            <div>
                <h4 style={{ fontSize: '1rem', fontWeight: '600' }}>{author}</h4>
                <p className="muted" style={{ fontSize: '0.875rem' }}>{role}</p>
            </div>
        </div>
    </div>
);

const Testimonials = () => {
    const reviews = [
        {
            content: "SkyScale has completely transformed how our engineering team operates. The speed and reliability are unmatched.",
            author: "Sarah Jenkins",
            role: "CTO at NexusFlow"
        },
        {
            content: "The easiest setup I've ever experienced. We migrated 50 services in under a week with zero downtime.",
            author: "Michael Chen",
            role: "VP Engineering at Orbit"
        }
    ];

    return (
        <section id="testimonials" className="container">
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <h2 className="gradient-text">Trusted by industry leaders.</h2>
            </div>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                gap: '2rem',
                maxWidth: '1000px',
                margin: '0 auto'
            }}>
                {reviews.map((r, i) => <TestimonialCard key={i} {...r} />)}
            </div>
        </section>
    );
};

export default Testimonials;
