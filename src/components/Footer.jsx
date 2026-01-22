import React from 'react';

const Footer = () => {
    return (
        <footer style={{ padding: '6rem 0', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1.5fr 1fr 1fr 1fr',
                    gap: '4rem',
                    marginBottom: '4rem'
                }}>
                    <div>
                        <div style={{ fontSize: '1.25rem', fontWeight: '800', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
                            <div style={{
                                width: '20px',
                                height: '20px',
                                background: 'linear-gradient(135deg, #20B2FF, #FF3F8E)',
                                borderRadius: '4px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <svg width="10" height="8" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 5L5 9L13 1" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            todo
                        </div>
                        <p className="muted" style={{ fontSize: '0.9rem' }}>
                            All right reserved by @todo 2024
                        </p>
                    </div>

                    <div>
                        <h4 style={{ marginBottom: '1.5rem', fontSize: '0.9rem' }}>COMPANY</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.85rem' }} className="muted">
                            <span>Updates</span>
                            <span>Status</span>
                            <span>About</span>
                        </div>
                    </div>

                    <div>
                        <h4 style={{ marginBottom: '1.5rem', fontSize: '0.9rem' }}>LEGAL</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.85rem' }} className="muted">
                            <span>Privacy Policy</span>
                            <span>Terms of Service</span>
                        </div>
                    </div>

                    <div>
                        <h4 style={{ marginBottom: '1.5rem', fontSize: '0.9rem' }}>SOCIAL</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.85rem' }} className="muted">
                            <span>Discord</span>
                            <span>Instagram</span>
                            <span>Twitter (X)</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
