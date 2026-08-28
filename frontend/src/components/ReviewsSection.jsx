import React from 'react';
import { Star, ShieldCheck, ExternalLink, Award } from 'lucide-react';

export const ReviewsSection = () => {
  const platforms = [
    {
      name: 'Google Reviews',
      rating: '[Google Rating] 4.9',
      reviews: '[Review Count] 420+ Reviews',
      badge: 'Verified Search Reviews',
      tag: '[Google Rating]',
      color: '#4285F4',
      bg: 'rgba(66, 133, 244, 0.08)',
      description: 'Rated for curriculum depth, live project mentoring, and career support.'
    },
    {
      name: 'SmartCustomer',
      rating: '[SmartCustomer Rating] 4.8',
      reviews: '[Review Count] 250+ Reviews',
      badge: 'Customer Satisfaction',
      tag: '[SmartCustomer Rating]',
      color: '#10B981',
      bg: 'rgba(16, 185, 129, 0.08)',
      description: 'Highest rating in enterprise software architecture and AI masterclasses.'
    },
    {
      name: 'Course Report',
      rating: '[Course Report Rating] 4.9',
      reviews: '[Review Count] 310+ Reviews',
      badge: 'Top Tech Bootcamp',
      tag: '[Course Report Rating]',
      color: '#EA580C',
      bg: 'rgba(234, 88, 12, 0.08)',
      description: 'Recognized for hands-on capstone projects and instructor excellence.'
    },
    {
      name: 'Trustpilot',
      rating: '[Trustpilot Rating] 4.9',
      reviews: '[Review Count] 500+ Reviews',
      badge: 'Trust Verified',
      tag: '[Trustpilot Rating]',
      color: '#00B67A',
      bg: 'rgba(0, 182, 122, 0.08)',
      description: 'Endorsed by working engineers across 35+ countries worldwide.'
    }
  ];

  return (
    <section style={{ padding: '80px 0', background: 'var(--bg-surface-elevated)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px' }}>
          <div className="badge badge-gradient" style={{ marginBottom: '12px' }}>
            <ShieldCheck size={14} color="var(--accent-primary)" /> Verified Platforms
          </div>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '16px' }}>
            Trusted by Learners <span className="gradient-text">Worldwide</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7 }}>
            DFJJK Global maintains high standards of quality, hands-on mentoring, and career outcome ratings across global platforms.
          </p>
        </div>

        <div className="grid-responsive" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
          {platforms.map((plat, idx) => (
            <div 
              key={idx} 
              className="glass-card" 
              style={{ 
                padding: '28px', 
                display: 'flex', 
                flexDirection: 'column', 
                justify: 'space-between',
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-glass)'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, padding: '4px 10px', borderRadius: 'var(--radius-full)', background: plat.bg, color: plat.color }}>
                    {plat.badge}
                  </span>
                  <Award size={18} color={plat.color} />
                </div>

                <h3 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>{plat.name}</h3>

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                  <div style={{ display: 'flex', gap: '2px' }}>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} color="#F59E0B" fill="#F59E0B" />
                    ))}
                  </div>
                  <span style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                    {plat.rating}
                  </span>
                </div>

                <div style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--accent-orange)', marginBottom: '14px' }}>
                  {plat.reviews}
                </div>

                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  {plat.description}
                </p>
              </div>

              <div style={{ marginTop: '20px', paddingTop: '14px', borderTop: '1px solid var(--border-glass)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                <span>Placeholder: {plat.tag}</span>
                <ExternalLink size={14} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
