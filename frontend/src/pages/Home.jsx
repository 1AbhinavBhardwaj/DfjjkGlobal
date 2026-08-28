import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import API from '../api';
import { CATALOG_COURSES, getFlagshipCourses, getFeaturedCourses } from '../data/coursesData';
import { SEO } from '../components/SEO';
import { ReviewsSection } from '../components/ReviewsSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
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
  ChevronRight,
  Flame,
  TrendingUp,
  Layers
} from 'lucide-react';

export const Home = () => {
  const [featuredCourses, setFeaturedCourses] = useState(() => getFeaturedCourses());
  const flagshipCourses = getFlagshipCourses();

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
              price: local?.price ?? (apiCourse.price != null ? `$${apiCourse.price}` : '$0'),
              imageUrl: local?.imageUrl || apiCourse.imageUrl || '',
              featured: local?.featured || false,
              isFlagship: local?.isFlagship || false,
              badgeLabel: local?.badgeLabel || null,
            };
          });

          CATALOG_COURSES.forEach(localCourse => {
            const localSku = (localCourse.sku || '').toUpperCase();
            if (!merged.some(m => (m.sku || '').toUpperCase() === localSku)) {
              merged.push(localCourse);
            }
          });
          setFeaturedCourses(merged.filter(c => c.featured));
        }
      })
      .catch((err) => {
        console.warn('Backend API offline. Using local catalog:', err);
        setFeaturedCourses(getFeaturedCourses());
      });
  }, []);

  const homeSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'EducationalOrganization',
        '@id': 'https://dfjjkglobal.com/#organization',
        'name': 'DFJJK Global',
        'legalName': 'DFJJK Global',
        'alternateName': ['DFJJK', 'dfjjk', 'dfjjkglobal', 'DFJJK Global Platform'],
        'url': 'https://dfjjkglobal.com/',
        'logo': {
          '@type': 'ImageObject',
          'url': 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80',
          'caption': 'DFJJK Global Logo'
        },
        'description': 'DFJJK Global is the official enterprise technology learning platform offering professional masterclasses in Data Science, AI, Cloud DevOps, Cybersecurity, and Project Management.',
        'contactPoint': {
          '@type': 'ContactPoint',
          'email': 'support@dfjjkglobal.com',
          'contactType': 'customer service',
          'availableLanguage': 'English'
        }
      },
      {
        '@type': 'WebSite',
        '@id': 'https://dfjjkglobal.com/#website',
        'url': 'https://dfjjkglobal.com/',
        'name': 'DFJJK Global',
        'alternateName': ['DFJJK', 'dfjjk', 'dfjjkglobal'],
        'publisher': { '@id': 'https://dfjjkglobal.com/#organization' }
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://dfjjkglobal.com/#faq',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'What is DFJJK Global?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'DFJJK Global (dfjjkglobal.com) is the official enterprise technology institute offering masterclasses in Data Science, Power BI, SQL, AI & Machine Learning, Cloud DevOps, Cybersecurity, and Project Management.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Is dfjjkglobal.com the official DFJJK website?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Yes, https://dfjjkglobal.com is the official website for DFJJK Global course enrollments, verified certifications, enterprise services, and learning resources.'
            }
          },
          {
            '@type': 'Question',
            'name': 'What courses are offered by DFJJK Global?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'DFJJK Global offers Data Science & AI, Data Analytics, Agentic AI, Power BI, SQL, Full-Stack Development, Cloud Computing & DevOps, Cybersecurity, Scrum Master, Product Owner, PMP, and Computer Training programs.'
            }
          }
        ]
      }
    ]
  };

  const flagshipIcons = [TrendingUp, Layers, Flame];

  return (
    <div>
      <SEO 
        title="DFJJK Global — Official Website | Enterprise Learning & Career Platform"
        description="Welcome to the official DFJJK Global website (dfjjkglobal.com). DFJJK Global is a premier technology institute providing enterprise masterclasses in Data Science, Power BI, SQL, Python AI, Java Full-Stack, Cloud DevOps, Cybersecurity, and Project Management."
        jsonLd={homeSchema}
      />

      {/* Glow Background Effects */}
      <div className="glow-bg" style={{ top: '-100px', left: '15%', width: '500px', height: '500px', background: 'rgba(79, 70, 229, 0.12)' }} />
      <div className="glow-bg" style={{ top: '400px', right: '10%', width: '400px', height: '400px', background: 'rgba(2, 132, 199, 0.08)' }} />

      {/* ===== HERO SECTION ===== */}
      <section style={{ padding: '80px 0 100px', position: 'relative', zIndex: 1 }}>
        <div className="container hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
          <div>
            <div className="badge badge-gradient" style={{ marginBottom: '20px' }}>
              <Sparkles size={14} color="var(--accent-primary)" /> Official DFJJK Global Platform
            </div>

            <h1 style={{ fontSize: '3.4rem', lineHeight: 1.1, marginBottom: '16px', fontWeight: 800 }}>
              DFJJK Global
            </h1>

            {/* Punchline */}
            <p className="brand-punchline">
              Learn today. Build tomorrow. The possibilities are yours.
            </p>

            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '36px', lineHeight: 1.75 }}>
              Accelerate your career with world-class DFJJK Global masterclasses in Power BI, SQL Analytics, Python to Generative AI, Java Spring Boot, Cloud DevOps, Cybersecurity, Project Management, and more
            </p>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '40px' }}>
              <Link to="/courses" id="hero-explore-courses-btn" className="btn btn-primary" style={{ padding: '16px 32px', fontSize: '1rem' }}>
                Explore Courses <ArrowRight size={18} />
              </Link>
              <Link to="/services" className="btn btn-secondary" style={{ padding: '16px 32px', fontSize: '1rem' }}>
                Enterprise Services
              </Link>
            </div>

            <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', alignItems: 'center', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle size={18} color="#10B981" /> Verified Certificates
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle size={18} color="#10B981" /> Hands-on Projects
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle size={18} color="#10B981" /> 1-on-1 Mentorship
              </div>
            </div>
          </div>

          {/* Hero Visual */}
          <div style={{ position: 'relative' }}>
            <div className="glass-card" style={{ padding: '16px', overflow: 'hidden', position: 'relative' }}>
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80" 
                alt="DFJJK Global — Engineering Team Collaboration" 
                style={{ width: '100%', height: '380px', objectFit: 'cover', borderRadius: 'var(--radius-md)' }}
              />
              
              {/* Floating Stat Card 1 */}
              <div className="glass-card animate-float" style={{
                position: 'absolute', bottom: '10px', left: '10px',
                padding: '12px 20px', display: 'flex', alignItems: 'center', gap: '12px',
                background: 'rgba(255, 255, 255, 0.97)', border: '1px solid rgba(79, 70, 229, 0.2)'
              }}>
                <div style={{ padding: '10px', background: 'rgba(79, 70, 229, 0.12)', borderRadius: '10px' }}>
                  <Award size={20} color="#4F46E5" />
                </div>
                <div>
                  <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0F172A' }}>99.4%</div>
                  <div style={{ fontSize: '0.75rem', color: '#64748B' }}>Graduation Rate</div>
                </div>
              </div>

              {/* Floating Stat Card 2 */}
              <div className="glass-card animate-float" style={{
                position: 'absolute', top: '10px', right: '10px',
                padding: '12px 18px', display: 'flex', alignItems: 'center', gap: '10px',
                background: 'rgba(255, 255, 255, 0.97)', border: '1px solid rgba(2, 132, 199, 0.2)',
                animationDelay: '3s'
              }}>
                <div style={{ padding: '8px', background: 'rgba(2, 132, 199, 0.12)', borderRadius: '8px' }}>
                  <Users size={18} color="#0284C7" />
                </div>
                <div>
                  <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0F172A' }}>15,000+</div>
                  <div style={{ fontSize: '0.7rem', color: '#64748B' }}>Engineers Trained</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS STRIP ===== */}
      <section style={{ padding: '40px 0', borderTop: '1px solid var(--border-glass)', borderBottom: '1px solid var(--border-glass)', background: 'var(--bg-surface)' }}>
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

      {/* ===== FLAGSHIP PROGRAMS ===== */}
      <section style={{ padding: '100px 0', background: 'var(--bg-main)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 52px' }}>
            <div className="badge badge-flagship" style={{ marginBottom: '16px' }}>
              <Flame size={14} /> Flagship Programs
            </div>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '16px' }}>
              Our Premier <span className="gradient-text">Masterclasses</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7 }}>
              Comprehensive, mentor-led flagship programs engineered to take you from fundamentals to enterprise-level expertise in the fastest-growing tech domains.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px', marginBottom: '40px' }}>
            {flagshipCourses.map((course, idx) => {
              const Icon = flagshipIcons[idx % flagshipIcons.length];
              return (
                <div key={course.sku} className="glass-card" style={{
                  display: 'flex', flexDirection: 'column', overflow: 'hidden',
                  border: '1px solid rgba(79, 70, 229, 0.25)',
                  background: 'var(--bg-surface)'
                }}>
                  <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                    <img 
                      src={course.imageUrl} 
                      alt={course.name} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                    />
                    <div style={{
                      position: 'absolute', inset: 0,
                      background: 'linear-gradient(to top, rgba(15, 23, 42, 0.7) 0%, transparent 60%)'
                    }} />
                    <div style={{ position: 'absolute', top: '12px', left: '12px' }} className="badge badge-flagship">
                      <Flame size={11} /> Flagship
                    </div>
                    <div style={{ position: 'absolute', top: '12px', right: '12px' }} className="badge badge-gradient">
                      {course.badgeLabel || course.category}
                    </div>
                  </div>

                  <div style={{ padding: '28px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                        <div style={{ padding: '8px', background: 'rgba(79, 70, 229, 0.12)', borderRadius: '10px' }}>
                          <Icon size={18} color="var(--accent-primary)" />
                        </div>
                        <h3 style={{ fontSize: '1.2rem', fontWeight: 700, lineHeight: 1.3, color: 'var(--text-primary)' }}>
                          {course.name}
                        </h3>
                      </div>
                      <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '20px' }}>
                        {course.summary}
                      </p>

                      {/* Highlights preview */}
                      {course.highlights && (
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                          {course.highlights.slice(0, 3).map((h, i) => (
                            <span key={i} style={{
                              fontSize: '0.75rem', fontWeight: 600,
                              padding: '3px 10px', borderRadius: 'var(--radius-full)',
                              background: 'rgba(79, 70, 229, 0.08)',
                              border: '1px solid rgba(79, 70, 229, 0.2)',
                              color: 'var(--accent-primary)'
                            }}>{h}</span>
                          ))}
                        </div>
                      )}
                    </div>

                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '16px', borderTop: '1px solid var(--border-glass)', marginBottom: '18px' }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                          <Clock size={14} /> {course.duration}
                        </span>
                        <span style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--accent-primary)' }}>
                          {course.price}
                        </span>
                      </div>
                      <Link to={`/courses/${course.sku}`} id={`flagship-enroll-${course.sku}`} className="btn btn-primary" style={{ width: '100%' }}>
                        Enroll Now <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link to="/courses" className="btn btn-secondary" style={{ width: 'auto', display: 'inline-flex' }}>
              <BookOpen size={16} /> View Full Course Catalog <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== FEATURED COURSES ===== */}
      <section style={{ padding: '80px 0', background: 'var(--bg-surface-elevated)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '48px', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <div className="badge badge-gradient" style={{ marginBottom: '12px' }}>
                <Star size={14} color="var(--accent-primary)" /> Popular Courses
              </div>
              <h2 style={{ fontSize: '2.2rem', fontWeight: 800 }}>
                Explore More <span className="gradient-text">Courses</span>
              </h2>
            </div>
            <Link to="/courses" className="btn btn-secondary">
              View All Courses <ChevronRight size={16} />
            </Link>
          </div>

          <div className="grid-responsive">
            {featuredCourses.slice(0, 6).map((course) => (
              <div key={course.id || course.sku} className="glass-card" style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden', background: 'var(--bg-surface)' }}>
                <div style={{ position: 'relative', height: '190px', overflow: 'hidden' }}>
                  <img 
                    src={course.imageUrl} 
                    alt={course.name} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                  />
                  <div style={{ position: 'absolute', top: '12px', left: '12px' }} className="badge badge-gradient">
                    {course.category}
                  </div>
                </div>

                <div style={{ padding: '22px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <h3 style={{ fontSize: '1.1rem', marginBottom: '10px', color: 'var(--text-primary)', lineHeight: 1.3 }}>{course.name}</h3>
                    <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '18px' }}>
                      {course.summary}
                    </p>
                  </div>

                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '14px', borderTop: '1px solid var(--border-glass)', marginBottom: '16px' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.83rem', color: 'var(--text-muted)' }}>
                        <Clock size={13} /> {course.duration}
                      </span>
                      <span style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--accent-primary)' }}>
                        {course.price}
                      </span>
                    </div>
                    <Link to={`/courses/${course.sku}`} id={`featured-enroll-${course.sku}`} className="btn btn-primary" style={{ width: '100%' }}>
                      Enroll Now <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE DFJJK GLOBAL ===== */}
      <section style={{ padding: '80px 0', background: 'var(--bg-surface)', borderTop: '1px solid var(--border-glass)', borderBottom: '1px solid var(--border-glass)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 60px' }}>
            <div className="badge badge-gradient" style={{ marginBottom: '12px' }}>
              <Zap size={14} color="var(--accent-primary)" /> Why Choose Us
            </div>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '16px' }}>
              Designed for Enterprise Excellence
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem' }}>
              We combine deep theoretical foundations with practical production-grade labs used by Fortune 500 tech teams.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
            <div className="glass-card" style={{ padding: '32px', background: 'var(--bg-surface)' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '14px', background: 'rgba(79, 70, 229, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <Zap size={26} color="var(--accent-primary)" />
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '12px' }}>Production-Ready Tech Stack</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                Learn Java 21, Spring Boot 3, React 18, Docker, Kubernetes, and PostgreSQL with high-concurrency design patterns.
              </p>
            </div>

            <div className="glass-card" style={{ padding: '32px', background: 'var(--bg-surface)' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '14px', background: 'rgba(2, 132, 199, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <Shield size={26} color="var(--accent-secondary)" />
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '12px' }}>Enterprise-Grade Security</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                Understand OAuth2, JWT token architecture, zero-trust network policy, and OWASP top 10 security mitigation.
              </p>
            </div>

            <div className="glass-card" style={{ padding: '32px', background: 'var(--bg-surface)' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '14px', background: 'rgba(236, 72, 153, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <Globe2 size={26} color="var(--accent-pink)" />
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '12px' }}>Global Community & Mentors</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                Direct access to principal architects and senior engineers offering continuous code reviews and career support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== REVIEWS SECTION ===== */}
      <ReviewsSection />

      {/* ===== TESTIMONIALS SECTION ===== */}
      <TestimonialsSection />

      {/* ===== CTA BANNER ===== */}
      <section style={{ padding: '100px 0', background: 'var(--bg-main)' }}>
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
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/register" id="cta-get-started-btn" className="btn btn-secondary" style={{ background: '#FFF', color: '#0F172A', padding: '16px 36px', fontSize: '1rem', fontWeight: 700 }}>
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
