import React from 'react';

const PricingCard = ({ plan, price, features, highlighted }) => (
    <div className="glass pricing-card" style={{
        flex: 1,
        minWidth: '300px',
        border: highlighted ? '1px solid var(--primary)' : '1px solid rgba(255,255,255,0.08)',
        borderRadius: '32px',
        background: highlighted ? 'rgba(255,255,255,0.04)' : 'var(--glass-bg)'
    }}>
        <div className="badge" style={{ marginBottom: '1rem', background: 'transparent', border: 'none', color: '#a1a1aa' }}>{plan}</div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.25rem', marginBottom: '2.5rem' }}>
            <span style={{ fontSize: '3rem', fontWeight: '800' }}>${price}</span>
            <span className="muted" style={{ fontSize: '1rem' }}>/month</span>
        </div>
        <ul style={{ listStyle: 'none', marginBottom: '3rem', flex: 1 }}>
            {features.map((f, i) => (
                <li key={i} style={{ marginBottom: '1.25rem', fontSize: '0.9rem', display: 'flex', gap: '0.75rem', alignItems: 'center', color: '#d1d1d6' }}>
                    <div style={{ width: '18px', height: '18px', borderRadius: '50%', border: '1px solid #444', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: highlighted ? 'var(--primary)' : '#444' }}></div>
                    </div>
                    {f}
                </li>
            ))}
        </ul>
        <button className={`btn ${highlighted ? 'btn-primary' : 'btn-secondary'}`} style={{ width: '100%', borderRadius: '12px', padding: '1rem' }}>
            Get Started
        </button>
    </div>
);

const Pricing = () => {
    return (
        <section id="pricing" className="container" style={{ position: 'relative' }}>
            <div className="bg-glow glow-blue" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '800px', opacity: 0.1 }}></div>

            <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
                <div className="badge">PRICING</div>
                <h2 className="gradient-text">Unlock Your<br />Endless Possibilities</h2>
            </div>

            <div style={{
                display: 'flex',
                gap: '2rem',
                alignItems: 'stretch',
                flexWrap: 'wrap',
                maxWidth: '1100px',
                margin: '0 auto'
            }}>
                <PricingCard
                    plan="Basic Plan"
                    price="15"
                    features={['24/7 cell calendar views', '5 active projects', 'Up to 3 team members', 'Basic reporting and analytics', 'Email support']}
                />
                <PricingCard
                    plan="Pro Plan"
                    price="35"
                    highlighted
                    features={['All Basic Plan features', 'List, calendar, and Kanban views', '15 active projects', 'Priority email and chat support', 'Integrations with third-party tools']}
                />
                <PricingCard
                    plan="Enterprise Plan"
                    price="50"
                    features={['All Pro Plan features', 'Unlimited active projects', 'Unlimited team members', 'Custom workflows', 'AI-powered task automation']}
                />
            </div>
        </section>
    );
};

export default Pricing;
