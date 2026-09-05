import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Mail, Phone, MapPin, Globe, Shield, Heart } from 'lucide-react';

export const Footer = () => {
  return (
    <footer style={{
      background: 'var(--bg-surface)',
      borderTop: '1px solid var(--border-glass)',
      paddingTop: '64px',
      paddingBottom: '32px',
      marginTop: '80px',
      position: 'relative'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '40px',
          marginBottom: '48px'
        }}>
          {/* Brand Col */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div className="navbar-logo-badge" style={{ width: '48px', height: '48px' }}>
                <img
                  src="/logo.png"
                  alt="DFJJK Global Logo"
                  className="navbar-logo-img"
                />
              </div>
              <span style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                DFJJK <span className="gradient-text">GLOBAL</span>
              </span>
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.7', marginBottom: '20px' }}>
              Empowering global tech leaders through industry-accredited masterclasses, full-stack architecture, and cloud DevOps engineering.
            </p>
            <div style={{ display: 'flex', gap: '12px' }}>
              <div style={{ padding: '8px 12px', background: 'rgba(255,255,255,0.04)', borderRadius: '8px', border: '1px solid var(--border-glass)', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                <Shield size={14} style={{ marginRight: '6px', verticalAlign: 'middle', color: '#34D399' }} /> ISO 27001 Certified
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontSize: '1.05rem', marginBottom: '20px', color: 'var(--text-primary)' }}>Explore Platform</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li><Link to="/courses" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}>Catalog & Masterclasses</Link></li>
              <li><Link to="/services" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}>Enterprise Services</Link></li>
              <li><Link to="/about" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}>About DFJJK Global</Link></li>
              <li><Link to="/contact" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}>Get in Touch</Link></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 style={{ fontSize: '1.05rem', marginBottom: '20px', color: 'var(--text-primary)' }}>Featured Masterclasses</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li><Link to="/courses/DFJJK-DS-POWERBI" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}>Power BI & Data Visualization</Link></li>
              <li><Link to="/courses/DFJJK-DS-SQL" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}>SQL Analytics & Queries</Link></li>
              <li><Link to="/courses/DFJJK-DS-AI" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}>Python AI & Generative AI</Link></li>
              <li><Link to="/courses/DFJJK-CYBER-FULL-28" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}>Cybersecurity 28-Module Program</Link></li>
              <li><Link to="/courses/DFJJK-PM-PROFESSIONAL" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}>Project Management & PMP</Link></li>
              <li><Link to="/courses/DFJJK-FULLSTACK-101" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}>Full-Stack Java & React</Link></li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 style={{ fontSize: '1.05rem', marginBottom: '20px', color: 'var(--text-primary)' }}>Contact Head Office</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Mail size={16} color="var(--accent-secondary)" /> support@dfjjkglobal.com
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Phone size={16} color="var(--accent-secondary)" /> +1 (800) 555-DFJJK
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <MapPin size={16} color="var(--accent-secondary)" /> Tech Innovation Center, Suite 400
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Globe size={16} color="var(--accent-secondary)" /> Worldwide Remote & On-Premises
              </div>
            </div>
          </div>
        </div>

        <div style={{
          borderTop: '1px solid var(--border-glass)',
          paddingTop: '24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
          fontSize: '0.85rem',
          color: 'var(--text-muted)'
        }}>
          <div>
            © {new Date().getFullYear()} DFJJK Global Inc. All rights reserved. Powered by React & Spring Boot.
          </div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Security Compliance</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
