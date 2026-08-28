import React, { useContext, useState, useRef, useEffect } from 'react';
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
  Moon,
  ChevronDown,
  ChevronRight
} from 'lucide-react';
import { getCoursesByCategory } from '../data/coursesData';

const MEGA_CATEGORIES = [
  'AI & Machine Learning',
  'Data Science & Analytics',
  'Software Development',
  'Cloud & DevOps',
  'Cybersecurity',
  'Management & Agile',
  'Computer Skills'
];

export const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileCourseOpen, setMobileCourseOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    return document.documentElement.getAttribute('data-theme') || 'light';
  });
  const megaRef = useRef(null);

  // Initialise to light on mount
  useEffect(() => {
    const current = document.documentElement.getAttribute('data-theme');
    if (!current) {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, []);

  // Close mega menu on outside click
  useEffect(() => {
    const handler = (e) => {
      if (megaRef.current && !megaRef.current.contains(e.target)) {
        setMegaOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

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

  const navLinkStyle = (path) => ({
    textDecoration: 'none',
    fontSize: '0.95rem',
    fontWeight: 600,
    color: isActive(path) ? 'var(--accent-primary)' : 'var(--text-secondary)',
    transition: 'color 0.2s',
    padding: '6px 0'
  });

  const mobileNavLinkStyle = (active) => ({
    textDecoration: 'none',
    fontSize: '1.1rem',
    fontWeight: 700,
    padding: '12px 16px',
    borderRadius: 'var(--radius-md)',
    background: active ? 'rgba(79, 70, 229, 0.12)' : 'transparent',
    color: active ? 'var(--accent-primary)' : 'var(--text-primary)',
    border: active ? '1px solid rgba(79, 70, 229, 0.3)' : '1px solid transparent',
    display: 'block'
  });

  const mobileBg = theme === 'dark'
    ? 'rgba(9, 13, 22, 0.97)'
    : 'rgba(248, 250, 252, 0.97)';

  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: 'var(--bg-glass)',
      backdropFilter: 'blur(18px)',
      WebkitBackdropFilter: 'blur(18px)',
      borderBottom: '1px solid var(--border-glass)'
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '72px'
      }}>
        {/* Brand Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none', flexShrink: 0 }}>
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '12px',
            background: 'var(--gradient-primary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 15px rgba(79, 70, 229, 0.4)'
          }}>
            <Sparkles size={20} color="#FFF" />
          </div>
          <div>
            <span style={{ fontSize: '1.35rem', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text-primary)' }}>
              DFJJK <span className="gradient-text">GLOBAL</span>
            </span>
            <span style={{ display: 'block', fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.15em', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
              Enterprise Platform
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '28px' }} className="desktop-links">
          <Link to="/" style={navLinkStyle('/')}>Home</Link>

          {/* All Courses Mega Menu Trigger */}
          <div ref={megaRef} style={{ position: 'relative' }}>
            <button
              id="all-courses-menu-btn"
              aria-haspopup="true"
              aria-expanded={megaOpen}
              onClick={() => setMegaOpen(o => !o)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                background: 'transparent',
                border: 'none',
                fontSize: '0.95rem',
                fontWeight: 600,
                color: isActive('/courses') ? 'var(--accent-primary)' : 'var(--text-secondary)',
                cursor: 'pointer',
                padding: '6px 0',
                fontFamily: 'var(--font-body)',
                transition: 'color 0.2s'
              }}
            >
              All Courses <ChevronDown size={15} style={{ transition: 'transform 0.2s', transform: megaOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} />
            </button>

            {megaOpen && (
              <div className="mega-menu-dropdown" style={{ minWidth: '900px' }}>
                <div className="mega-menu-grid">
                  {MEGA_CATEGORIES.map(cat => {
                    const catCourses = getCoursesByCategory(cat);
                    if (catCourses.length === 0) return null;
                    return (
                      <div key={cat}>
                        <div className="mega-category-title">{cat}</div>
                        {catCourses.map(course => (
                          <Link
                            key={course.sku}
                            to={`/courses/${course.sku}`}
                            className="mega-course-item"
                            onClick={() => setMegaOpen(false)}
                          >
                            <span style={{ flex: 1, lineHeight: 1.3 }}>{course.title}</span>
                            <span className="mega-price-tag">{course.price}</span>
                          </Link>
                        ))}
                      </div>
                    );
                  })}
                </div>
                <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid var(--border-glass)', display: 'flex', justifyContent: 'center' }}>
                  <Link
                    to="/courses"
                    className="btn btn-primary btn-sm"
                    onClick={() => setMegaOpen(false)}
                    style={{ width: 'auto', minWidth: '180px' }}
                  >
                    <BookOpen size={15} /> View All Courses
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link to="/services" style={navLinkStyle('/services')}>Services</Link>
          <Link to="/about" style={navLinkStyle('/about')}>About Us</Link>
          <Link to="/contact" style={navLinkStyle('/contact')}>Contact</Link>
        </div>

        {/* Right Action Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            aria-label="Toggle colour theme"
            style={{
              background: 'var(--bg-surface-elevated)',
              border: '1px solid var(--border-glass)',
              color: 'var(--text-primary)',
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s'
            }}
          >
            {theme === 'dark' ? <Sun size={17} color="#FBBF24" /> : <Moon size={17} color="#6366F1" />}
          </button>

          {user ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }} className="desktop-links">
              {user.role === 'ROLE_ADMIN' ? (
                <Link to="/admin" className="btn btn-secondary btn-sm">
                  <ShieldCheck size={15} color="#0284C7" /> Admin
                </Link>
              ) : (
                <Link to="/dashboard" className="btn btn-secondary btn-sm">
                  <UserIcon size={15} /> Dashboard
                </Link>
              )}
              <button onClick={handleLogout} className="btn btn-outline btn-sm" title="Log Out">
                <LogOut size={15} />
              </button>
            </div>
          ) : (
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }} className="desktop-links">
              <Link to="/login" className="btn btn-secondary btn-sm">Log In</Link>
              <Link to="/register" className="btn btn-primary btn-sm">Get Started</Link>
            </div>
          )}

          {/* Mobile Menu Button */}
          <button
            id="mobile-nav-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: 'none',
              background: 'var(--bg-surface-elevated)',
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

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div style={{
          position: 'fixed',
          top: '72px',
          left: 0,
          right: 0,
          bottom: 0,
          background: mobileBg,
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          zIndex: 99,
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          overflowY: 'auto',
          animation: 'fadeIn 0.2s ease-in-out'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <Link to="/" onClick={() => setMobileMenuOpen(false)} style={mobileNavLinkStyle(isActive('/'))}>Home</Link>

            {/* Mobile All Courses Accordion */}
            <div>
              <button
                id="mobile-courses-accordion-btn"
                onClick={() => setMobileCourseOpen(o => !o)}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '12px 16px',
                  background: isActive('/courses') ? 'rgba(79, 70, 229, 0.12)' : 'transparent',
                  border: isActive('/courses') ? '1px solid rgba(79, 70, 229, 0.3)' : '1px solid transparent',
                  borderRadius: 'var(--radius-md)',
                  color: isActive('/courses') ? 'var(--accent-primary)' : 'var(--text-primary)',
                  fontFamily: 'var(--font-body)',
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  textAlign: 'left'
                }}
              >
                All Courses
                <ChevronDown size={18} style={{ transform: mobileCourseOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }} />
              </button>

              {mobileCourseOpen && (
                <div style={{ marginTop: '6px', paddingLeft: '12px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  {MEGA_CATEGORIES.map(cat => {
                    const catCourses = getCoursesByCategory(cat);
                    if (catCourses.length === 0) return null;
                    return (
                      <div key={cat} style={{ marginBottom: '10px' }}>
                        <div style={{ fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--accent-primary)', padding: '4px 8px', marginBottom: '4px' }}>
                          {cat}
                        </div>
                        {catCourses.map(course => (
                          <Link
                            key={course.sku}
                            to={`/courses/${course.sku}`}
                            onClick={() => setMobileMenuOpen(false)}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              padding: '8px 12px',
                              borderRadius: 'var(--radius-sm)',
                              color: 'var(--text-secondary)',
                              textDecoration: 'none',
                              fontSize: '0.88rem',
                              fontWeight: 500,
                              transition: 'all 0.2s'
                            }}
                          >
                            <span>{course.title}</span>
                            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent-orange)', background: 'rgba(234, 88, 12, 0.1)', padding: '1px 7px', borderRadius: 'var(--radius-full)' }}>
                              {course.price}
                            </span>
                          </Link>
                        ))}
                      </div>
                    );
                  })}
                  <Link
                    to="/courses"
                    onClick={() => setMobileMenuOpen(false)}
                    className="btn btn-primary"
                    style={{ marginTop: '8px', width: '100%', justifyContent: 'center' }}
                  >
                    <BookOpen size={15} /> View All Courses
                  </Link>
                </div>
              )}
            </div>

            <Link to="/services" onClick={() => setMobileMenuOpen(false)} style={mobileNavLinkStyle(isActive('/services'))}>Services</Link>
            <Link to="/about" onClick={() => setMobileMenuOpen(false)} style={mobileNavLinkStyle(isActive('/about'))}>About Us</Link>
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)} style={mobileNavLinkStyle(isActive('/contact'))}>Contact</Link>
          </div>

          {/* Mobile Footer CTAs */}
          <div style={{ paddingTop: '24px', borderTop: '1px solid var(--border-glass)', display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '24px' }}>
            {user ? (
              <>
                {user.role === 'ROLE_ADMIN' ? (
                  <Link to="/admin" onClick={() => setMobileMenuOpen(false)} className="btn btn-secondary" style={{ width: '100%' }}>
                    <ShieldCheck size={17} color="#0284C7" /> Admin Portal
                  </Link>
                ) : (
                  <Link to="/dashboard" onClick={() => setMobileMenuOpen(false)} className="btn btn-secondary" style={{ width: '100%' }}>
                    <UserIcon size={17} /> My Student Dashboard
                  </Link>
                )}
                <button onClick={() => { handleLogout(); setMobileMenuOpen(false); }} className="btn btn-outline" style={{ width: '100%' }}>
                  <LogOut size={17} /> Log Out
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
