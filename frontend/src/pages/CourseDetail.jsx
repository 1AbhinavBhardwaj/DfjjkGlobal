import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import API from '../api';
import { getCourseBySku, CATALOG_COURSES } from '../data/coursesData';
import { AuthContext } from '../context/AuthContext';
import { SEO } from '../components/SEO';
import { 
  Clock, 
  CheckCircle2, 
  ShieldCheck, 
  HelpCircle, 
  CreditCard, 
  ArrowLeft,
  Sparkles,
  Lock,
  ChevronDown,
  ChevronUp,
  Award,
  BookOpen,
  Briefcase,
  FileText,
  Terminal,
  Zap,
  Layers,
  ArrowRight
} from 'lucide-react';

export const CourseDetail = () => {
  const { sku } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('Card');
  const [processing, setProcessing] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  
  // Accordion open state for modules
  const [expandedIndex, setExpandedIndex] = useState(0);

  useEffect(() => {
    setLoading(true);
    const cleanSku = (sku || '').trim().toUpperCase();
    const localMeta = getCourseBySku(cleanSku);

    API.get(`/courses/${sku}`)
      .then((res) => {
        if (res && res.data && typeof res.data === 'object' && res.data.name) {
          setCourse({
            ...res.data,
            sku: res.data.sku || localMeta?.sku || cleanSku,
            name: res.data.name || localMeta?.name || 'Untitled Course',
            summary: res.data.summary || localMeta?.summary || '',
            description: res.data.description || localMeta?.description || '',
            price: localMeta?.price ?? (res.data.price != null ? `$${res.data.price}` : '$0'),
            duration: res.data.duration || localMeta?.duration || 'Self-Paced',
            category: res.data.category || localMeta?.category || 'General',
            imageUrl: localMeta?.imageUrl || res.data.imageUrl || '',
            highlights: localMeta?.highlights || [],
            learningJourney: localMeta?.learningJourney || [],
            type: localMeta?.type || 'module',
            modules: localMeta?.modules || [],
            sessions: localMeta?.sessions || [],
            aiModules: localMeta?.aiModules || [],
            learningOutcomes: localMeta?.learningOutcomes || [],
            capstones: localMeta?.capstones || [],
            interviewPrep: localMeta?.interviewPrep || [],
            faqs: (res.data.faqs && res.data.faqs.length > 0) ? res.data.faqs : (localMeta?.faqs || [])
          });
        } else {
          setCourse(localMeta);
        }
      })
      .catch((err) => {
        console.warn('API error or offline, retrieving from local catalog store:', err);
        setCourse(localMeta);
      })
      .finally(() => setLoading(false));
  }, [sku]);

  const handleEnrollClick = () => {
    if (!user) {
      navigate('/login');
      return;
    }
    setShowCheckoutModal(true);
  };

  const handleConfirmOrder = async () => {
    setProcessing(true);
    setErrorMsg('');
    try {
      await API.post('/orders/checkout', {
        courseSku: course.sku,
        paymentMethod: paymentMethod
      });
      setOrderSuccess(true);
      setTimeout(() => {
        setShowCheckoutModal(false);
        navigate('/dashboard');
      }, 2000);
    } catch (err) {
      setErrorMsg(err.response?.data?.message || 'Enrollment failed. Please try again.');
    } finally {
      setProcessing(false);
    }
  };

  const toggleAccordion = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  if (loading) {
    return <div style={{ textAlign: 'center', padding: '100px', color: 'var(--text-secondary)' }}>Loading Course Details...</div>;
  }

  if (!course) {
    return (
      <div className="container" style={{ padding: '80px 0', textAlign: 'center' }}>
        <SEO 
          title="Course Not Found | DFJJK Global"
          description="The requested course SKU or page does not exist in our catalog."
          noindex={true}
        />
        <h2>Course Not Found</h2>
        <p style={{ color: 'var(--text-secondary)', margin: '16px 0 24px' }}>The requested course SKU does not exist in our catalog.</p>
        <Link to="/courses" className="btn btn-primary">Back to Learning Catalog</Link>
      </div>
    );
  }

  const courseCanonical = `https://dfjjkglobal.com/courses/${course.sku}`;
  
  const courseSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Course',
        '@id': `${courseCanonical}#course`,
        'name': course.name,
        'description': course.description || course.summary,
        'provider': {
          '@type': 'EducationalOrganization',
          'name': 'DFJJK Global',
          'url': 'https://dfjjkglobal.com'
        },
        'courseCode': course.sku,
        'offers': {
          '@type': 'Offer',
          'price': course.price,
          'priceCurrency': 'USD',
          'availability': 'https://schema.org/InStock',
          'url': courseCanonical
        },
        'hasCourseInstance': {
          '@type': 'CourseInstance',
          'courseMode': 'Online',
          'duration': course.duration
        }
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${courseCanonical}#breadcrumb`,
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Home',
            'item': 'https://dfjjkglobal.com/'
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': 'Courses',
            'item': 'https://dfjjkglobal.com/courses'
          },
          {
            '@type': 'ListItem',
            'position': 3,
            'name': course.name,
            'item': courseCanonical
          }
        ]
      },
      ...(course.faqs && course.faqs.length > 0 ? [{
        '@type': 'FAQPage',
        '@id': `${courseCanonical}#faq`,
        'mainEntity': course.faqs.map(faq => ({
          '@type': 'Question',
          'name': faq.question,
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': faq.answer
          }
        }))
      }] : [])
    ]
  };

  return (
    <div style={{ padding: '40px 0 100px' }}>
      <SEO 
        title={`${course.name} | DFJJK Global`}
        description={course.summary || course.description}
        canonical={courseCanonical}
        ogImage={course.imageUrl}
        jsonLd={courseSchema}
      />
      <div className="container">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" style={{ marginBottom: '24px' }}>
          <ol style={{ display: 'flex', alignItems: 'center', gap: '8px', listStyle: 'none', padding: 0, margin: 0, fontSize: '0.88rem', color: 'var(--text-secondary)', flexWrap: 'wrap' }}>
            <li>
              <Link to="/" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Home</Link>
            </li>
            <li style={{ color: 'var(--text-muted)' }}>/</li>
            <li>
              <Link to="/courses" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Courses</Link>
            </li>
            <li style={{ color: 'var(--text-muted)' }}>/</li>
            <li style={{ color: 'var(--accent-secondary)', fontWeight: 600 }}>
              {course.name}
            </li>
          </ol>
        </nav>

        {/* 1. Hero Section */}
        <div className="course-detail-grid" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '48px', alignItems: 'start' }}>
          <div>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '16px', flexWrap: 'wrap' }}>
              <span className="badge badge-gradient">{course.category}</span>
              <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: 600 }}>SKU: {course.sku}</span>
            </div>

            <h1 style={{ fontSize: '2.8rem', fontWeight: 800, lineHeight: 1.15, marginBottom: '20px', color: 'var(--text-primary)' }}>
              {course.name}
            </h1>

            {/* 2. Course Overview */}
            <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '32px' }}>
              {course.description || course.summary}
            </p>

            {/* Hero Image */}
            <div className="glass-card" style={{ padding: '10px', marginBottom: '40px', overflow: 'hidden' }}>
              <img
                src={course.imageUrl}
                alt={course.name}
                style={{ width: '100%', height: '360px', objectFit: 'cover', borderRadius: 'var(--radius-md)' }}
              />
            </div>

            {/* 3. Course Highlights */}
            {course.highlights && course.highlights.length > 0 && (
              <div className="glass-card" style={{ padding: '32px', marginBottom: '40px' }}>
                <h2 style={{ fontSize: '1.35rem', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Sparkles size={20} color="var(--accent-secondary)" /> Program Highlights
                </h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px' }}>
                  {course.highlights.map((highlight, idx) => (
                    <div key={idx} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      padding: '12px 16px',
                      background: 'rgba(255, 255, 255, 0.03)',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--border-glass)',
                      fontSize: '0.9rem',
                      fontWeight: 600,
                      color: 'var(--text-primary)'
                    }}>
                      <CheckCircle2 size={16} color="#34D399" style={{ flexShrink: 0 }} />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 4. Learning Journey */}
            {course.learningJourney && course.learningJourney.length > 0 && (
              <div className="glass-card" style={{ padding: '32px', marginBottom: '40px' }}>
                <h2 style={{ fontSize: '1.35rem', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Layers size={20} color="var(--accent-primary)" /> Learning Journey Path
                </h2>
                <div className="journey-container">
                  {course.learningJourney.map((step, idx) => (
                    <React.Fragment key={idx}>
                      <div className="journey-step">
                        <span style={{ color: 'var(--accent-primary)', fontSize: '0.8rem', fontWeight: 800 }}>{idx + 1}</span>
                        <span>{step}</span>
                      </div>
                      {idx < course.learningJourney.length - 1 && (
                        <div className="journey-arrow">→</div>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            )}

            {/* 5. Course Curriculum & Modules (Accordions) */}
            <div className="glass-card" style={{ padding: '32px', marginBottom: '40px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap', gap: '12px' }}>
                <div>
                  <h2 style={{ fontSize: '1.4rem' }}>Course Curriculum & Modules</h2>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>Expand each module to explore detailed topics and hands-on deliverables.</p>
                </div>
                <span className="badge badge-gradient">
                  <BookOpen size={13} /> {course.type === 'session' ? `${course.sessions?.length || 10} Sessions` : course.type === 'hierarchical' ? `${course.aiModules?.length || 6} Major Modules` : `${course.modules?.length || 4} Modules`}
                </span>
              </div>

              {/* SQL Course Sessions View */}
              {course.type === 'session' && course.sessions && course.sessions.length > 0 && (
                <div>
                  {course.sessions.map((sess, idx) => {
                    const isOpen = expandedIndex === idx;
                    return (
                      <div key={idx} className="accordion-item">
                        <button 
                          onClick={() => toggleAccordion(idx)}
                          className={`accordion-header ${isOpen ? 'active' : ''}`}
                        >
                          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                            <span style={{
                              padding: '4px 12px',
                              borderRadius: 'var(--radius-sm)',
                              background: 'rgba(99, 102, 241, 0.2)',
                              color: '#A5B4FC',
                              fontSize: '0.82rem',
                              fontWeight: 700
                            }}>
                              {sess.sessionNumber}
                            </span>
                            <span>{sess.title}</span>
                          </div>
                          {isOpen ? <ChevronUp size={18} color="var(--accent-primary)" /> : <ChevronDown size={18} color="var(--text-muted)" />}
                        </button>

                        {isOpen && (
                          <div className="accordion-body">
                            <h5 style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '12px' }}>Topics Covered:</h5>
                            <ul style={{ paddingLeft: '20px', marginBottom: '20px', color: 'var(--text-primary)', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                              {sess.topics.map((top, tIdx) => (
                                <li key={tIdx}>{top}</li>
                              ))}
                            </ul>

                            {sess.deliverables && sess.deliverables.length > 0 && (
                              <div style={{ borderTop: '1px solid var(--border-glass)', paddingTop: '14px', display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
                                <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: 700 }}>Deliverables:</span>
                                {sess.deliverables.map((deliv, dIdx) => (
                                  <span key={dIdx} className="badge badge-success" style={{ fontSize: '0.78rem' }}>
                                    <FileText size={12} /> {deliv}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}

              {/* AI/Data Science Hierarchical Curriculum View */}
              {course.type === 'hierarchical' && course.aiModules && course.aiModules.length > 0 && (
                <div>
                  {course.aiModules.map((mod, idx) => {
                    const isOpen = expandedIndex === idx;
                    return (
                      <div key={idx} className="accordion-item">
                        <button 
                          onClick={() => toggleAccordion(idx)}
                          className={`accordion-header ${isOpen ? 'active' : ''}`}
                        >
                          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                            <span style={{
                              padding: '4px 12px',
                              borderRadius: 'var(--radius-sm)',
                              background: 'rgba(6, 182, 212, 0.2)',
                              color: '#6EE7B7',
                              fontSize: '0.82rem',
                              fontWeight: 700
                            }}>
                              {mod.moduleNumber}
                            </span>
                            <span>{mod.title}</span>
                          </div>
                          {isOpen ? <ChevronUp size={18} color="var(--accent-secondary)" /> : <ChevronDown size={18} color="var(--text-muted)" />}
                        </button>

                        {isOpen && (
                          <div className="accordion-body">
                            {mod.subsections && mod.subsections.map((sub, sIdx) => (
                              <div key={sIdx} style={{ marginBottom: '20px' }}>
                                <h5 style={{ fontSize: '0.98rem', color: 'var(--accent-secondary)', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                  <Terminal size={14} /> {sub.name}
                                </h5>
                                <ul style={{ paddingLeft: '22px', color: 'var(--text-secondary)', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                                  {sub.topics.map((topic, tIdx) => (
                                    <li key={tIdx} style={{ color: 'var(--text-primary)' }}>{topic}</li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Standard Power BI & Software Engineering Module View */}
              {(course.type === 'module' || (!course.type && course.modules)) && course.modules && course.modules.length > 0 && (
                <div>
                  {course.modules.map((mod, idx) => {
                    const isOpen = expandedIndex === idx;
                    return (
                      <div key={idx} className="accordion-item">
                        <button 
                          onClick={() => toggleAccordion(idx)}
                          className={`accordion-header ${isOpen ? 'active' : ''}`}
                        >
                          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                            <span style={{
                              padding: '4px 12px',
                              borderRadius: 'var(--radius-sm)',
                              background: 'rgba(99, 102, 241, 0.2)',
                              color: '#A5B4FC',
                              fontSize: '0.82rem',
                              fontWeight: 700
                            }}>
                              {mod.number || `Module ${idx + 1}`}
                            </span>
                            <span>{mod.title}</span>
                          </div>
                          {isOpen ? <ChevronUp size={18} color="var(--accent-primary)" /> : <ChevronDown size={18} color="var(--text-muted)" />}
                        </button>

                        {isOpen && (
                          <div className="accordion-body">
                            <h5 style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '12px' }}>Topics Covered:</h5>
                            <ul style={{ paddingLeft: '20px', color: 'var(--text-primary)', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                              {mod.topics && mod.topics.map((topic, tIdx) => (
                                <li key={tIdx}>{topic}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* 6. Learning Outcomes */}
            {course.learningOutcomes && course.learningOutcomes.length > 0 && (
              <div className="glass-card" style={{ padding: '32px', marginBottom: '40px' }}>
                <h2 style={{ fontSize: '1.4rem', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Award size={22} color="#34D399" /> What You Will Achieve (Learning Outcomes)
                </h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
                  {course.learningOutcomes.map((outcome, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', padding: '14px', background: 'rgba(255, 255, 255, 0.02)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-glass)' }}>
                      <CheckCircle2 size={18} color="#34D399" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span style={{ fontSize: '0.9rem', color: 'var(--text-primary)', lineHeight: 1.5 }}>{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 7. Capstone Projects */}
            {course.capstones && course.capstones.length > 0 && (
              <div className="glass-card" style={{ padding: '32px', marginBottom: '40px' }}>
                <h2 style={{ fontSize: '1.4rem', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Briefcase size={22} color="var(--accent-secondary)" /> Real-World Capstone Projects
                </h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                  {course.capstones.map((cap, idx) => (
                    <div key={idx} style={{ padding: '20px', background: 'rgba(17, 23, 38, 0.6)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-glass)' }}>
                      <div className="badge badge-gradient" style={{ marginBottom: '10px' }}>Capstone #{idx + 1}</div>
                      <h4 style={{ fontSize: '1.05rem', marginBottom: '8px', color: 'var(--text-primary)' }}>
                        {typeof cap === 'string' ? cap : cap.title}
                      </h4>
                      {cap.description && (
                        <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                          {cap.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 8. Career / Interview Preparation */}
            {course.interviewPrep && course.interviewPrep.length > 0 && (
              <div className="glass-card" style={{ padding: '32px', marginBottom: '40px' }}>
                <h2 style={{ fontSize: '1.4rem', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Zap size={20} color="#EC4899" /> Career & Interview Preparation
                </h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
                  {course.interviewPrep.map((prep, idx) => (
                    <div key={idx} style={{ padding: '16px', background: 'rgba(236, 72, 153, 0.05)', border: '1px solid rgba(236, 72, 153, 0.2)', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <CheckCircle2 size={18} color="#EC4899" style={{ flexShrink: 0 }} />
                      <span style={{ fontSize: '0.9rem', color: 'var(--text-primary)', fontWeight: 500 }}>{prep}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 9. FAQs */}
            {course.faqs && course.faqs.length > 0 && (
              <div className="glass-card" style={{ padding: '32px' }}>
                <h2 style={{ fontSize: '1.4rem', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <HelpCircle size={22} color="var(--accent-secondary)" /> Frequently Asked Questions
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {course.faqs.map((faq, i) => (
                    <div key={i} style={{ padding: '20px', background: 'rgba(255,255,255,0.02)', borderRadius: '12px', border: '1px solid var(--border-glass)' }}>
                      <h4 style={{ fontSize: '1.02rem', color: 'var(--text-primary)', marginBottom: '8px' }}>{faq.question}</h4>
                      <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* 10. Sidebar / Mobile CTA & Enrollment Section */}
          <div style={{ position: 'sticky', top: '100px' }}>
            <div className="glass-card" style={{ padding: '32px' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '8px' }}>
                {course.price}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '24px' }}>
                <Clock size={16} /> Duration: <span style={{ color: 'var(--text-secondary)', fontWeight: 600 }}>{course.duration}</span>
              </div>

              <button 
                onClick={handleEnrollClick}
                className="btn btn-primary" 
                style={{ width: '100%', padding: '16px', fontSize: '1.05rem', marginBottom: '20px' }}
              >
                Enroll in Masterclass <ArrowRight size={18} />
              </button>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <ShieldCheck size={18} color="#34D399" /> 30-Day Money-Back Guarantee
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Sparkles size={18} color="#06B6D4" /> Verified Industry Certification
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Lock size={18} color="#6366F1" /> Lifetime Access & Workshop Notes
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Checkout Modal */}
      {showCheckoutModal && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(0, 0, 0, 0.8)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '24px'
        }}>
          <div className="glass-card" style={{ maxWidth: '500px', width: '100%', padding: '36px', background: 'var(--bg-surface)' }}>
            {orderSuccess ? (
              <div style={{ textAlign: 'center', padding: '20px 0' }}>
                <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                  <CheckCircle2 size={36} color="#34D399" />
                </div>
                <h3 style={{ fontSize: '1.6rem', marginBottom: '10px' }}>Enrollment Confirmed!</h3>
                <p style={{ color: 'var(--text-secondary)' }}>Redirecting you to your student dashboard...</p>
              </div>
            ) : (
              <div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '8px' }}>Complete Your Enrollment</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '24px' }}>
                  {course.name} (SKU: <strong>{course.sku}</strong>)
                </p>

                {errorMsg && <div className="toast toast-error">{errorMsg}</div>}

                <div className="form-group">
                  <label className="form-label">Total Course Fee</label>
                  <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--accent-primary)' }}>{course.price}</div>
                </div>

                <div className="form-group">
                  <label className="form-label">Payment Method</label>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('Card')}
                      style={{
                        padding: '12px',
                        borderRadius: 'var(--radius-md)',
                        border: paymentMethod === 'Card' ? '2px solid var(--accent-primary)' : '1px solid var(--border-glass)',
                        background: paymentMethod === 'Card' ? 'rgba(99, 102, 241, 0.15)' : 'transparent',
                        color: 'var(--text-primary)',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px'
                      }}
                    >
                      <CreditCard size={18} /> Credit Card
                    </button>

                    <button
                      type="button"
                      onClick={() => setPaymentMethod('PayPal')}
                      style={{
                        padding: '12px',
                        borderRadius: 'var(--radius-md)',
                        border: paymentMethod === 'PayPal' ? '2px solid var(--accent-primary)' : '1px solid var(--border-glass)',
                        background: paymentMethod === 'PayPal' ? 'rgba(99, 102, 241, 0.15)' : 'transparent',
                        color: 'var(--text-primary)',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px'
                      }}
                    >
                      PayPal
                    </button>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '12px', marginTop: '32px' }}>
                  <button onClick={() => setShowCheckoutModal(false)} className="btn btn-secondary" style={{ flex: 1 }}>
                    Cancel
                  </button>
                  <button onClick={handleConfirmOrder} disabled={processing} className="btn btn-primary" style={{ flex: 1 }}>
                    {processing ? 'Processing...' : 'Pay & Start Learning'}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
