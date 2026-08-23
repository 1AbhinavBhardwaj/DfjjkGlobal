import React from 'react';
import { SEO } from '../components/SEO';
import { Sparkles, Globe, Target, Award, CheckCircle } from 'lucide-react';

export const About = () => {
  return (
    <div style={{ padding: '60px 0 100px' }}>
      <SEO 
        title="About DFJJK Global | Enterprise Technology & Learning Platform"
        description="Learn about DFJJK Global mission, global engineering footprint, core pillars, and industry-focused technology training masterclasses."
      />
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 60px' }}>
          <div className="badge badge-gradient" style={{ marginBottom: '12px' }}>
            <Sparkles size={14} color="#A5B4FC" /> Who We Are
          </div>
          <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '16px' }}>
            About <span className="gradient-text">DFJJK Global</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.7 }}>
            DFJJK Global is a premier technology institute and consulting organization dedicated to engineering excellence, cloud-native scalability, and enterprise innovation.
          </p>
        </div>

        {/* Mission & Vision grid */}
        <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', marginBottom: '80px' }}>
          <div className="glass-card" style={{ padding: '40px' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(99, 102, 241, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
              <Target size={24} color="#6366F1" />
            </div>
            <h2 style={{ fontSize: '1.6rem', marginBottom: '16px' }}>Our Mission</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.7 }}>
              To bridge the gap between academic theory and real-world enterprise software engineering by empowering developers with battle-tested skills in Java, React, Cloud DevOps, and AI.
            </p>
          </div>

          <div className="glass-card" style={{ padding: '40px' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(6, 182, 212, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
              <Globe size={24} color="#06B6D4" />
            </div>
            <h2 style={{ fontSize: '1.6rem', marginBottom: '16px' }}>Global Footprint</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.7 }}>
              Serving over 15,000 learners and 50+ enterprise partners across 35 countries, fostering a diverse community of high-impact technology innovators.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="glass-card" style={{ padding: '50px', marginBottom: '80px' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '32px', textAlign: 'center' }}>Our Core Pillars</h2>
          <div className="grid-responsive" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '28px' }}>
            <div>
              <div style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '8px', color: 'var(--text-primary)' }}>1. Rigorous Engineering</div>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>No superficial code snippets. Every course delivers production-grade repository practices.</p>
            </div>
            <div>
              <div style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '8px', color: 'var(--text-primary)' }}>2. Security First</div>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Security is baked into every layer—from Spring Security JWT filters to OWASP hardened frontend state.</p>
            </div>
            <div>
              <div style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '8px', color: 'var(--text-primary)' }}>3. Continuous Growth</div>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Our curriculum is updated every quarter to reflect the latest Java LTS releases and modern ecosystem updates.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
