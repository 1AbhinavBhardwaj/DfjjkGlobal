import React, { useContext, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { 
  BookOpen, 
  User as UserIcon, 
  LogOut, 
  ShieldCheck, 
  Menu, 
  X, 
  Sparkles,
  Sun,
  Moon
} from 'lucide-react';

export const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState(document.documentElement.getAttribute('data-theme') || 'dark');

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', nextTheme);
    setTheme(nextTheme);
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: 'var(--bg-glass)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      borderBottom: '1px solid var(--border-glass)'
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '80px'
      }}>
        {/* Brand Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
          <div style={{
            width: '42px',
            height: '42px',
            borderRadius: '12px',
            background: 'var(--gradient-primary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 15px rgba(99, 102, 241, 0.4)'
          }}>
            <Sparkles size={22} color="#FFF" />
          </div>
          <div>
            <span style={{ fontSize: '1.4rem', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text-primary)' }}>
              DFJJK <span className="gradient-text">GLOBAL</span>
            </span>
            <span style={{ display: 'block', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.15em', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
              Enterprise Platform
            </span>
          </div>
        </Link>

        {/* Navigation Links Desktop */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }} className="desktop-links">
          <Link to="/" style={{
            textDecoration: 'none',
            fontSize: '0.95rem',
            fontWeight: 600,
            color: isActive('/') ? 'var(--accent-primary)' : 'var(--text-secondary)',
            transition: 'color 0.2s'
          }}>Home</Link>
          
          <Link to="/courses" style={{
            textDecoration: 'none',
            fontSize: '0.95rem',
            fontWeight: 600,
            color: isActive('/courses') ? 'var(--accent-primary)' : 'var(--text-secondary)',
            transition: 'color 0.2s'
          }}>Courses</Link>

          <Link to="/services" style={{
            textDecoration: 'none',
            fontSize: '0.95rem',
            fontWeight: 600,
            color: isActive('/services') ? 'var(--accent-primary)' : 'var(--text-secondary)',
            transition: 'color 0.2s'
          }}>Services</Link>

          <Link to="/about" style={{
            textDecoration: 'none',
            fontSize: '0.95rem',
            fontWeight: 600,
            color: isActive('/about') ? 'var(--accent-primary)' : 'var(--text-secondary)',
            transition: 'color 0.2s'
          }}>About Us</Link>

          <Link to="/contact" style={{
            textDecoration: 'none',
            fontSize: '0.95rem',
            fontWeight: 600,
            color: isActive('/contact') ? 'var(--accent-primary)' : 'var(--text-secondary)',
            transition: 'color 0.2s'
          }}>Contact</Link>
        </div>

        {/* Right Action Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          {/* Theme Toggle */}
          <button 
            onClick={toggleTheme} 
            title="Toggle theme"
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid var(--border-glass)',
              color: 'var(--text-primary)',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s'
            }}>
            {theme === 'dark' ? <Sun size={18} color="#FBBF24" /> : <Moon size={18} color="#6366F1" />}
          </button>

          {user ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              {user.role === 'ROLE_ADMIN' ? (
                <Link to="/admin" className="btn btn-secondary btn-sm">
                  <ShieldCheck size={16} color="#06B6D4" /> Admin Portal
                </Link>
              ) : (
                <Link to="/dashboard" className="btn btn-secondary btn-sm">
                  <UserIcon size={16} /> My Dashboard
                </Link>
              )}
              
              <button onClick={handleLogout} className="btn btn-outline btn-sm" title="Log Out">
                <LogOut size={16} />
              </button>
            </div>
          ) : (
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Link to="/login" className="btn btn-secondary btn-sm">Log In</Link>
              <Link to="/register" className="btn btn-primary btn-sm">Get Started</Link>
            </div>
          )}

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: 'none',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid var(--border-glass)',
              borderRadius: 'var(--radius-md)',
              padding: '8px',
              color: 'var(--text-primary)',
              cursor: 'pointer'
            }}
            className="mobile-toggle"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div style={{
          position: 'fixed',
          top: '80px',
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(9, 13, 22, 0.95)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          zIndex: 99,
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          animation: 'fadeIn 0.2s ease-in-out'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <Link to="/" onClick={() => setMobileMenuOpen(false)} style={{
              textDecoration: 'none',
              fontSize: '1.2rem',
              fontWeight: 700,
              padding: '12px 16px',
              borderRadius: 'var(--radius-md)',
              background: isActive('/') ? 'rgba(99, 102, 241, 0.15)' : 'transparent',
              color: isActive('/') ? 'var(--accent-primary)' : 'var(--text-primary)',
              border: isActive('/') ? '1px solid rgba(99, 102, 241, 0.3)' : '1px solid transparent'
            }}>Home</Link>

            <Link to="/courses" onClick={() => setMobileMenuOpen(false)} style={{
              textDecoration: 'none',
              fontSize: '1.2rem',
              fontWeight: 700,
              padding: '12px 16px',
              borderRadius: 'var(--radius-md)',
              background: isActive('/courses') ? 'rgba(99, 102, 241, 0.15)' : 'transparent',
              color: isActive('/courses') ? 'var(--accent-primary)' : 'var(--text-primary)',
              border: isActive('/courses') ? '1px solid rgba(99, 102, 241, 0.3)' : '1px solid transparent'
            }}>Courses</Link>

            <Link to="/services" onClick={() => setMobileMenuOpen(false)} style={{
              textDecoration: 'none',
              fontSize: '1.2rem',
              fontWeight: 700,
              padding: '12px 16px',
              borderRadius: 'var(--radius-md)',
              background: isActive('/services') ? 'rgba(99, 102, 241, 0.15)' : 'transparent',
              color: isActive('/services') ? 'var(--accent-primary)' : 'var(--text-primary)',
              border: isActive('/services') ? '1px solid rgba(99, 102, 241, 0.3)' : '1px solid transparent'
            }}>Services</Link>

            <Link to="/about" onClick={() => setMobileMenuOpen(false)} style={{
              textDecoration: 'none',
              fontSize: '1.2rem',
              fontWeight: 700,
              padding: '12px 16px',
              borderRadius: 'var(--radius-md)',
              background: isActive('/about') ? 'rgba(99, 102, 241, 0.15)' : 'transparent',
              color: isActive('/about') ? 'var(--accent-primary)' : 'var(--text-primary)',
              border: isActive('/about') ? '1px solid rgba(99, 102, 241, 0.3)' : '1px solid transparent'
            }}>About Us</Link>

            <Link to="/contact" onClick={() => setMobileMenuOpen(false)} style={{
              textDecoration: 'none',
              fontSize: '1.2rem',
              fontWeight: 700,
              padding: '12px 16px',
              borderRadius: 'var(--radius-md)',
              background: isActive('/contact') ? 'rgba(99, 102, 241, 0.15)' : 'transparent',
              color: isActive('/contact') ? 'var(--accent-primary)' : 'var(--text-primary)',
              border: isActive('/contact') ? '1px solid rgba(99, 102, 241, 0.3)' : '1px solid transparent'
            }}>Contact</Link>
          </div>

          {/* Mobile Footer CTAs */}
          <div style={{ paddingTop: '24px', borderTop: '1px solid var(--border-glass)', display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {user ? (
              <>
                {user.role === 'ROLE_ADMIN' ? (
                  <Link to="/admin" onClick={() => setMobileMenuOpen(false)} className="btn btn-secondary" style={{ width: '100%' }}>
                    <ShieldCheck size={18} color="#06B6D4" /> Admin Portal
                  </Link>
                ) : (
                  <Link to="/dashboard" onClick={() => setMobileMenuOpen(false)} className="btn btn-secondary" style={{ width: '100%' }}>
                    <UserIcon size={18} /> My Student Dashboard
                  </Link>
                )}
                <button onClick={() => { handleLogout(); setMobileMenuOpen(false); }} className="btn btn-outline" style={{ width: '100%' }}>
                  <LogOut size={18} /> Log Out
                </button>
              </>
            ) : (
              <>
                <Link to="/login" onClick={() => setMobileMenuOpen(false)} className="btn btn-secondary" style={{ width: '100%' }}>
                  Log In
                </Link>
                <Link to="/register" onClick={() => setMobileMenuOpen(false)} className="btn btn-primary" style={{ width: '100%' }}>
                  Get Started
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};
