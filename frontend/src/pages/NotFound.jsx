import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { Home, BookOpen, Mail, HelpCircle, ArrowLeft } from 'lucide-react';

export const NotFound = () => {
  return (
    <div style={{ padding: '80px 0 120px', textAlign: 'center' }}>
      <SEO 
        title="404 — Page Not Found | DFJJK Global"
        description="The page you are looking for does not exist or has been moved."
        noindex={true}
      />
      <div className="container" style={{ maxWidth: '650px', margin: '0 auto' }}>
        <div 
          className="badge badge-gradient" 
          style={{ marginBottom: '20px', display: 'inline-flex', padding: '6px 16px', fontSize: '0.85rem' }}
        >
          <HelpCircle size={14} color="#A5B4FC" style={{ marginRight: '6px' }} /> Error 404
        </div>
        
        <h1 style={{ fontSize: '3.2rem', fontWeight: 800, marginBottom: '16px', color: 'var(--text-primary)' }}>
          Page Not Found
        </h1>
        
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '36px' }}>
          Sorry, the page you are looking for doesn't exist, was removed, or had its name changed. Use the navigation below to find what you're looking for.
        </p>

        <div className="glass-card" style={{ padding: '32px', marginBottom: '36px', textAlign: 'left' }}>
          <h2 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '18px', color: 'var(--text-primary)' }}>
            Popular Navigation Links
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
            <Link 
              to="/" 
              style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', color: '#A5B4FC', fontWeight: 600, padding: '10px 14px', background: 'rgba(255, 255, 255, 0.03)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-glass)' }}
            >
              <Home size={18} /> Homepage
            </Link>
            <Link 
              to="/courses" 
              style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', color: '#A5B4FC', fontWeight: 600, padding: '10px 14px', background: 'rgba(255, 255, 255, 0.03)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-glass)' }}
            >
              <BookOpen size={18} /> Explore Courses
            </Link>
            <Link 
              to="/contact" 
              style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', color: '#A5B4FC', fontWeight: 600, padding: '10px 14px', background: 'rgba(255, 255, 255, 0.03)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-glass)' }}
            >
              <Mail size={18} /> Contact Support
            </Link>
          </div>
        </div>

        <Link to="/" className="btn btn-primary" style={{ padding: '14px 28px' }}>
          <ArrowLeft size={18} /> Back to Homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
