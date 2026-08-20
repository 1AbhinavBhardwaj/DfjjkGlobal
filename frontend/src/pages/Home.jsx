import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import API from '../api';
import { CATALOG_COURSES } from '../data/coursesData';
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle, 
  Users, 
  Award, 
  BookOpen, 
  Zap, 
  Shield, 
  Star,
  Globe2,
  Clock,
  ChevronRight
} from 'lucide-react';

export const Home = () => {
  const [courses, setCourses] = useState(CATALOG_COURSES.slice(0, 3));

  useEffect(() => {
    API.get('/courses')
      .then((res) => {
        if (res && res.data && Array.isArray(res.data) && res.data.length > 0) {
          const merged = res.data.map((apiCourse) => {
            const apiSku = (apiCourse.sku || '').toUpperCase();
            const local = CATALOG_COURSES.find(c => (c.sku || '').toUpperCase() === apiSku);
            return {
              ...apiCourse,
              sku: apiCourse.sku || local?.sku || `CRS-${apiCourse.id}`,
              name: apiCourse.name || local?.name || 'Untitled Course',
              summary: apiCourse.summary || local?.summary || '',
              category: apiCourse.category || local?.category || 'General',
              duration: apiCourse.duration || local?.duration || 'Self-Paced',
              price: apiCourse.price != null ? apiCourse.price : (local?.price || '0.00'),
              imageUrl: apiCourse.imageUrl || local?.imageUrl || '',
            };
          });

          CATALOG_COURSES.forEach(localCourse => {
            const localSku = (localCourse.sku || '').toUpperCase();
            if (!merged.some(m => (m.sku || '').toUpperCase() === localSku)) {
              merged.push(localCourse);
            }
          });
          setCourses(merged.slice(0, 6));
        }
      })
      .catch((err) => {
        console.warn('Backend API connection offline/unreachable. Displaying catalog store:', err);
      });
  }, []);

  return (
    <div>
      {/* Glow Background Effects */}
      <div className="glow-bg" style={{ top: '-100px', left: '15%', width: '500px', height: '500px', background: 'rgba(99, 102, 241, 0.15)' }} />
      <div className="glow-bg" style={{ top: '400px', right: '10%', width: '400px', height: '400px', background: 'rgba(6, 182, 212, 0.12)' }} />

      {/* Hero Section */}
      <section style={{ padding: '80px 0 100px', position: 'relative', zIndex: 1 }}>
        <div className="container hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
          <div>
            <div className="badge badge-gradient" style={{ marginBottom: '24px' }}>
              <Sparkles size={14} color="#A5B4FC" /> Enterprise Technology & Data Science
            </div>

            <h1 style={{ fontSize: '3.6rem', lineHeight: 1.1, marginBottom: '24px', fontWeight: 800 }}>
              Master <span className="gradient-text">Data Science</span>, AI & Architecture
            </h1>

            <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', marginBottom: '36px', lineHeight: 1.7 }}>
              Accelerate your engineering career with world-class masterclasses in Power BI, SQL Analytics, Python to Generative AI, Java Spring Boot, and Cloud Architecture.
            </p>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '40px' }}>
              <Link to="/courses" className="btn btn-primary" style={{ padding: '16px 32px', fontSize: '1rem' }}>
                Explore Courses <ArrowRight size={18} />
              </Link>
              <Link to="/services" className="btn btn-secondary" style={{ padding: '16px 32px', fontSize: '1rem' }}>
                Enterprise Services
              </Link>
            </div>

            {/* Quick Badges */}
            <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', alignItems: 'center', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle size={18} color="#34D399" /> Verified Certificates
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle size={18} color="#34D399" /> Hands-on Projects
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle size={18} color="#34D399" /> 1-on-1 Mentorship
              </div>
            </div>
          </div>

          {/* Hero Visual Card */}
          <div style={{ position: 'relative' }}>
            <div className="glass-card" style={{ padding: '16px', overflow: 'hidden', position: 'relative' }}>
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80" 
                alt="Engineering Team Collaboration" 
                style={{ width: '100%', height: '380px', objectFit: 'cover', borderRadius: 'var(--radius-md)' }}
              />
              
              {/* Floating Stat Card 1 */}
              <div className="glass-card animate-float" style={{
                position: 'absolute',
                bottom: '10px',
                left: '10px',
                padding: '12px 20px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                background: 'rgba(17, 23, 38, 0.95)'
              }}>
                <div style={{ padding: '10px', background: 'rgba(99, 102, 241, 0.2)', borderRadius: '10px' }}>
                  <Award size={20} color="#6366F1" />
                </div>
                <div>
                  <div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-primary)' }}>99.4%</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Graduation Rate</div>
                </div>
              </div>

              {/* Floating Stat Card 2 */}
              <div className="glass-card animate-float" style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                padding: '12px 18px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                background: 'rgba(17, 23, 38, 0.95)',
                animationDelay: '3s'
              }}>
                <div style={{ padding: '8px', background: 'rgba(6, 182, 212, 0.2)', borderRadius: '8px' }}>
                  <Users size={18} color="#06B6D4" />
                </div>
                <div>
                  <div style={{ fontSize: '1.05rem', fontWeight: 800 }}>15,000+</div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)' }}>Engineers Trained</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Stats Section */}
      <section style={{ padding: '40px 0', borderTop: '1px solid var(--border-glass)', borderBottom: '1px solid var(--border-glass)', background: 'rgba(255,255,255,0.01)' }}>
        <div className="container stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', textAlign: 'center' }}>
          <div>
            <div style={{ fontSize: '2.5rem', fontWeight: 800 }} className="gradient-text">15K+</div>
            <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Students Trained</div>
          </div>
          <div>
            <div style={{ fontSize: '2.5rem', fontWeight: 800 }} className="gradient-text">50+</div>
            <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Enterprise Partners</div>
          </div>
          <div>
            <div style={{ fontSize: '2.5rem', fontWeight: 800 }} className="gradient-text">4.9 / 5</div>
            <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Average Instructor Rating</div>
          </div>
          <div>
            <div style={{ fontSize: '2.5rem', fontWeight: 800 }} className="gradient-text">98%</div>
            <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Placement Support</div>
          </div>
        </div>
      </section>

      {/* Featured Courses Showcase */}
      <section style={{ padding: '100px 0' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '48px' }}>
            <div>
              <div className="badge badge-gradient" style={{ marginBottom: '12px' }}>
                <BookOpen size={14} color="#A5B4FC" /> Featured Catalog
              </div>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 800 }}>
                Explore Premier <span className="gradient-text">Masterclasses</span>
              </h2>
            </div>
            <Link to="/courses" className="btn btn-secondary">
              View All Courses <ChevronRight size={16} />
            </Link>
          </div>

          <div className="grid-responsive">
            {courses.map((course) => (
              <div key={course.id || course.sku} className="glass-card" style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                  <img 
                    src={course.imageUrl} 
                    alt={course.name} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                  />
                  <div style={{ position: 'absolute', top: '12px', left: '12px' }} className="badge badge-gradient">
                    {course.category}
                  </div>
                </div>

                <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <h3 style={{ fontSize: '1.25rem', marginBottom: '10px', color: 'var(--text-primary)' }}>{course.name}</h3>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '20px' }}>
                      {course.summary}
                    </p>
                  </div>

                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '16px', borderTop: '1px solid var(--border-glass)', marginBottom: '18px' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                        <Clock size={14} /> {course.duration}
                      </span>
                      <span style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--accent-secondary)' }}>
                        ${course.price}
                      </span>
                    </div>

                    <Link to={`/courses/${course.sku}`} className="btn btn-primary" style={{ width: '100%' }}>
                      Enroll Now <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose DFJJK Global */}
      <section style={{ padding: '80px 0', background: 'var(--bg-surface)', borderTop: '1px solid var(--border-glass)', borderBottom: '1px solid var(--border-glass)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 60px' }}>
            <div className="badge badge-gradient" style={{ marginBottom: '12px' }}>
              <Zap size={14} color="#A5B4FC" /> Why Choose Us
            </div>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '16px' }}>
              Designed for Enterprise Excellence
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem' }}>
              We combine deep theoretical foundations with practical production-grade labs used by Fortune 500 tech teams.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
            <div className="glass-card" style={{ padding: '32px' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '14px', background: 'rgba(99, 102, 241, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <Zap size={26} color="#6366F1" />
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '12px' }}>Production-Ready Tech Stack</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                Learn Java 21, Spring Boot 3, React 18, Docker, Kubernetes, and PostgreSQL with high-concurrency design patterns.
              </p>
            </div>

            <div className="glass-card" style={{ padding: '32px' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '14px', background: 'rgba(6, 182, 212, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <Shield size={26} color="#06B6D4" />
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '12px' }}>Enterprise-Grade Security</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                Understand OAuth2, JWT token architecture, zero-trust network policy, and OWASP top 10 security mitigation.
              </p>
            </div>

            <div className="glass-card" style={{ padding: '32px' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '14px', background: 'rgba(236, 72, 153, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <Globe2 size={26} color="#EC4899" />
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '12px' }}>Global Community & Mentors</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                Direct access to principal architects and senior engineers offering continuous code reviews and career support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section style={{ padding: '100px 0' }}>
        <div className="container">
          <div className="glass-card" style={{
            padding: '60px',
            background: 'var(--gradient-primary)',
            borderRadius: 'var(--radius-lg)',
            textAlign: 'center',
            color: '#FFFFFF'
          }}>
            <h2 style={{ fontSize: '2.8rem', fontWeight: 800, marginBottom: '20px', color: '#FFF' }}>
              Ready to Upgrade Your Tech Capabilities?
            </h2>
            <p style={{ fontSize: '1.15rem', opacity: 0.9, maxWidth: '650px', margin: '0 auto 36px' }}>
              Join thousands of developers and engineering leaders enrolled in DFJJK Global masterclasses today.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
              <Link to="/register" className="btn btn-secondary" style={{ background: '#FFF', color: '#090D16', padding: '16px 36px', fontSize: '1rem', fontWeight: 700 }}>
                Get Started Free
              </Link>
              <Link to="/contact" className="btn btn-outline" style={{ borderColor: '#FFF', color: '#FFF', padding: '16px 36px', fontSize: '1rem' }}>
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
