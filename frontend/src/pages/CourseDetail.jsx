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
  ArrowRight,
  Download,
  Printer,
  MessageSquare,
  X
} from 'lucide-react';

export const CourseDetail = () => {
  const { sku } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);
  const [showSyllabusModal, setShowSyllabusModal] = useState(false);
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
            name: localMeta?.name || res.data.name || 'Untitled Course',
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

  const generateSyllabusText = (c) => {
    let text = `============================================================\n`;
    text += `DFJJK GLOBAL — OFFICIAL COURSE SYLLABUS\n`;
    text += `============================================================\n\n`;
    text += `COURSE: ${c.name}\n`;
    text += `SKU: ${c.sku}\n`;
    text += `CATEGORY: ${c.category}\n`;
    text += `DURATION: ${c.duration}\n`;
    text += `TOTAL FEE: ${c.price}\n`;
    text += `OFFICIAL PORTAL: https://dfjjkglobal.com/courses/${c.sku}\n\n`;
    text += `------------------------------------------------------------\n`;
    text += `COURSE OVERVIEW\n`;
    text += `------------------------------------------------------------\n`;
    text += `${c.description || c.summary}\n\n`;

    if (c.highlights && c.highlights.length > 0) {
      text += `------------------------------------------------------------\n`;
      text += `PROGRAM HIGHLIGHTS\n`;
      text += `------------------------------------------------------------\n`;
      c.highlights.forEach(h => {
        text += `• ${h}\n`;
      });
      text += `\n`;
    }

    if (c.learningJourney && c.learningJourney.length > 0) {
      text += `------------------------------------------------------------\n`;
      text += `LEARNING JOURNEY PATH\n`;
      text += `------------------------------------------------------------\n`;
      c.learningJourney.forEach((step, idx) => {
        text += `${idx + 1}. ${step}\n`;
      });
      text += `\n`;
    }

    text += `------------------------------------------------------------\n`;
    text += `CURRICULUM & MODULE BREAKDOWN\n`;
    text += `------------------------------------------------------------\n`;

    if (c.type === 'session' && c.sessions && c.sessions.length > 0) {
      c.sessions.forEach(sess => {
        text += `\n[${sess.sessionNumber}] ${sess.title}\n`;
        if (sess.topics) {
          sess.topics.forEach(t => text += `  - ${t}\n`);
        }
        if (sess.deliverables && sess.deliverables.length > 0) {
          text += `  Deliverables: ${sess.deliverables.join(', ')}\n`;
        }
      });
    } else if (c.type === 'hierarchical' && c.aiModules && c.aiModules.length > 0) {
      c.aiModules.forEach(mod => {
        text += `\n[${mod.moduleNumber}] ${mod.title}\n`;
        if (mod.subsections) {
          mod.subsections.forEach(sub => {
            text += `  • ${sub.name}\n`;
            if (sub.topics) {
              sub.topics.forEach(t => text += `    - ${t}\n`);
            }
          });
        }
      });
    } else if (c.modules && c.modules.length > 0) {
      c.modules.forEach(mod => {
        text += `\n[${mod.number || 'Module'}] ${mod.title}\n`;
        if (mod.topics) {
          mod.topics.forEach(t => text += `  - ${t}\n`);
        }
      });
    }

    if (c.learningOutcomes && c.learningOutcomes.length > 0) {
      text += `\n------------------------------------------------------------\n`;
      text += `LEARNING OUTCOMES\n`;
      text += `------------------------------------------------------------\n`;
      c.learningOutcomes.forEach(out => {
        text += `• ${out}\n`;
      });
      text += `\n`;
    }

    if (c.capstones && c.capstones.length > 0) {
      text += `------------------------------------------------------------\n`;
      text += `CAPSTONE PROJECTS\n`;
      text += `------------------------------------------------------------\n`;
      c.capstones.forEach(cap => {
        text += `• ${cap.title}: ${cap.description}\n`;
      });
      text += `\n`;
    }

    text += `============================================================\n`;
    text += `VERIFIED ACCREDITATION & ADMISSIONS\n`;
    text += `DFJJK Global provides verified course completion credentials,\n`;
    text += `1-on-1 industry mentorship, and real-world project portfolios.\n`;
    text += `Admissions & Inquiries: support@dfjjkglobal.com\n`;
    text += `Official Website: https://dfjjkglobal.com\n`;
    text += `============================================================\n`;

    return text;
  };

  const handleDownloadSyllabusFile = () => {
    if (!course) return;
    const text = generateSyllabusText(course);
    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${course.sku}-DFJJK-Global-Syllabus.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handlePrintSyllabus = () => {
    window.print();
  };

  const handleScrollToCurriculum = () => {
    setShowSyllabusModal(false);
    const el = document.getElementById('curriculum-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
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
            <div id="curriculum-section" className="glass-card" style={{ padding: '32px', marginBottom: '40px' }}>
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
                id="enroll-masterclass-btn"
                onClick={handleEnrollClick}
                className="btn btn-primary" 
                style={{ width: '100%', padding: '16px', fontSize: '1.05rem', marginBottom: '12px' }}
              >
                Enroll in Masterclass <ArrowRight size={18} />
              </button>

              <button 
                id="download-syllabus-btn"
                onClick={() => setShowSyllabusModal(true)}
                className="btn btn-secondary" 
                style={{ 
                  width: '100%', 
                  padding: '14px', 
                  fontSize: '0.98rem', 
                  marginBottom: '14px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  gap: '8px',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
              >
                <Download size={17} /> Download Syllabus
              </button>

              <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <Link 
                  to="/contact" 
                  style={{ 
                    display: 'inline-flex', 
                    alignItems: 'center', 
                    gap: '6px', 
                    color: 'var(--accent-primary)', 
                    fontSize: '0.86rem', 
                    fontWeight: 600, 
                    textDecoration: 'none' 
                  }}
                >
                  <MessageSquare size={14} /> Have questions? Speak with an Advisor
                </Link>
              </div>

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

      {/* Syllabus Download & Preview Modal */}
      {showSyllabusModal && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(0, 0, 0, 0.85)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px'
        }}>
          <div 
            className="glass-card printable-syllabus" 
            style={{ 
              maxWidth: '680px', 
              width: '100%', 
              maxHeight: '90vh', 
              display: 'flex', 
              flexDirection: 'column',
              padding: '0', 
              background: 'var(--bg-surface)',
              overflow: 'hidden'
            }}
          >
            {/* Modal Header */}
            <div className="no-print" style={{ 
              padding: '24px 28px', 
              borderBottom: '1px solid var(--border-glass)',
              display: 'flex', 
              alignItems: 'flex-start', 
              justifyContent: 'space-between', 
              gap: '16px' 
            }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', flexWrap: 'wrap' }}>
                  <span className="badge badge-gradient">{course.category}</span>
                  <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: 600 }}>SKU: {course.sku}</span>
                </div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-primary)', lineHeight: 1.25 }}>
                  {course.name}
                </h3>
                <div style={{ display: 'flex', gap: '16px', marginTop: '6px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  <span>Duration: <strong style={{ color: 'var(--text-secondary)' }}>{course.duration}</strong></span>
                  <span>Fee: <strong style={{ color: 'var(--accent-primary)' }}>{course.price}</strong></span>
                </div>
              </div>
              <button 
                onClick={() => setShowSyllabusModal(false)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: 'var(--text-muted)',
                  cursor: 'pointer',
                  padding: '4px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                title="Close"
              >
                <X size={22} />
              </button>
            </div>

            {/* Scrollable Syllabus Content */}
            <div style={{ 
              padding: '24px 28px', 
              overflowY: 'auto', 
              flex: 1, 
              fontSize: '0.92rem', 
              lineHeight: 1.65 
            }}>
              <div style={{ marginBottom: '20px' }}>
                <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '8px' }}>
                  Course Summary
                </h4>
                <p style={{ color: 'var(--text-secondary)', margin: 0 }}>
                  {course.description || course.summary}
                </p>
              </div>

              {course.highlights && course.highlights.length > 0 && (
                <div style={{ marginBottom: '24px' }}>
                  <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '10px' }}>
                    Key Program Highlights
                  </h4>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '8px' }}>
                    {course.highlights.map((h, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', fontSize: '0.88rem' }}>
                        <CheckCircle2 size={15} color="#34D399" style={{ flexShrink: 0 }} />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '12px' }}>
                  Curriculum Overview
                </h4>

                {course.type === 'session' && course.sessions && course.sessions.length > 0 && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {course.sessions.map((sess, idx) => (
                      <div key={idx} style={{ padding: '12px 16px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--border-glass)', borderRadius: 'var(--radius-sm)' }}>
                        <div style={{ fontWeight: 700, color: 'var(--text-primary)', marginBottom: '4px' }}>
                          <span style={{ color: 'var(--accent-primary)', marginRight: '8px' }}>{sess.sessionNumber}:</span>
                          {sess.title}
                        </div>
                        {sess.topics && (
                          <div style={{ fontSize: '0.84rem', color: 'var(--text-muted)' }}>
                            {sess.topics.slice(0, 3).join(' • ')} {sess.topics.length > 3 ? `+ ${sess.topics.length - 3} more` : ''}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {course.type === 'hierarchical' && course.aiModules && course.aiModules.length > 0 && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {course.aiModules.map((mod, idx) => (
                      <div key={idx} style={{ padding: '12px 16px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--border-glass)', borderRadius: 'var(--radius-sm)' }}>
                        <div style={{ fontWeight: 700, color: 'var(--text-primary)', marginBottom: '4px' }}>
                          <span style={{ color: 'var(--accent-secondary)', marginRight: '8px' }}>{mod.moduleNumber}:</span>
                          {mod.title}
                        </div>
                        {mod.subsections && (
                          <div style={{ fontSize: '0.84rem', color: 'var(--text-muted)' }}>
                            {mod.subsections.map(s => s.name).join(' • ')}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {(course.type === 'module' || (!course.type && course.modules)) && course.modules && course.modules.length > 0 && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {course.modules.map((mod, idx) => (
                      <div key={idx} style={{ padding: '12px 16px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--border-glass)', borderRadius: 'var(--radius-sm)' }}>
                        <div style={{ fontWeight: 700, color: 'var(--text-primary)', marginBottom: '4px' }}>
                          <span style={{ color: 'var(--accent-primary)', marginRight: '8px' }}>{mod.number || `Module ${idx + 1}`}:</span>
                          {mod.title}
                        </div>
                        {mod.topics && (
                          <div style={{ fontSize: '0.84rem', color: 'var(--text-muted)' }}>
                            {mod.topics.slice(0, 3).join(' • ')} {mod.topics.length > 3 ? `+ ${mod.topics.length - 3} more` : ''}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Modal Actions Footer */}
            <div className="no-print" style={{ 
              padding: '18px 28px', 
              borderTop: '1px solid var(--border-glass)', 
              background: 'rgba(0, 0, 0, 0.1)',
              display: 'flex', 
              gap: '12px', 
              flexWrap: 'wrap', 
              alignItems: 'center', 
              justifyContent: 'space-between' 
            }}>
              <button
                onClick={handleScrollToCurriculum}
                className="btn btn-outline btn-sm"
                style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
              >
                <BookOpen size={15} /> View Full Interactive Curriculum
              </button>

              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <button
                  onClick={handleDownloadSyllabusFile}
                  className="btn btn-secondary btn-sm"
                  style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
                >
                  <Download size={15} /> Save File (.txt)
                </button>
                <button
                  onClick={handlePrintSyllabus}
                  className="btn btn-primary btn-sm"
                  style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
                >
                  <Printer size={15} /> Print / Save PDF
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
