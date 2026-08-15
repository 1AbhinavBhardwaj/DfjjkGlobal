import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import API from '../api';
import { AuthContext } from '../context/AuthContext';
import { 
  Clock, 
  CheckCircle2, 
  ShieldCheck, 
  HelpCircle, 
  CreditCard, 
  ArrowLeft,
  Sparkles,
  Lock
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

  useEffect(() => {
    API.get(`/courses/${sku}`)
      .then((res) => setCourse(res.data))
      .catch((err) => console.error('Error fetching course:', err))
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

  if (loading) {
    return <div style={{ textAlign: 'center', padding: '100px', color: 'var(--text-secondary)' }}>Loading Course Details...</div>;
  }

  if (!course) {
    return (
      <div className="container" style={{ padding: '80px 0', textAlign: 'center' }}>
        <h2>Course Not Found</h2>
        <p style={{ color: 'var(--text-secondary)', margin: '16px 0 24px' }}>The requested course SKU does not exist.</p>
        <Link to="/courses" className="btn btn-primary">Back to Catalog</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: '60px 0 100px' }}>
      <div className="container">
        {/* Back Link */}
        <Link to="/courses" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', textDecoration: 'none', marginBottom: '32px', fontWeight: 600 }}>
          <ArrowLeft size={16} /> Back to Catalog
        </Link>

        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '48px', alignItems: 'start' }}>
          {/* Main Info */}
          <div>
            <div className="badge badge-gradient" style={{ marginBottom: '16px' }}>
              {course.category}
            </div>

            <h1 style={{ fontSize: '3rem', fontWeight: 800, lineHeight: 1.15, marginBottom: '20px' }}>
              {course.name}
            </h1>

            <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '36px' }}>
              {course.description || course.summary}
            </p>

            {/* Banner Image */}
            <div className="glass-card" style={{ padding: '12px', marginBottom: '40px', overflow: 'hidden' }}>
              <img
                src={course.imageUrl}
                alt={course.name}
                style={{ width: '100%', height: '360px', objectFit: 'cover', borderRadius: 'var(--radius-md)' }}
              />
            </div>

            {/* Curriculum Modules */}
            <div className="glass-card" style={{ padding: '36px', marginBottom: '40px' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '24px' }}>What You Will Learn</h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <CheckCircle2 size={20} color="#34D399" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <h4 style={{ fontSize: '1rem', marginBottom: '4px' }}>Production Architecture</h4>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Spring Data JPA, PostgreSQL optimization & cache invalidation.</p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <CheckCircle2 size={20} color="#34D399" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <h4 style={{ fontSize: '1rem', marginBottom: '4px' }}>Modern UI Frameworks</h4>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>React 18 state management, hooks, and clean components.</p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <CheckCircle2 size={20} color="#34D399" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <h4 style={{ fontSize: '1rem', marginBottom: '4px' }}>Security & JWT</h4>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Stateless authentication filter chain & RBAC implementation.</p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <CheckCircle2 size={20} color="#34D399" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <h4 style={{ fontSize: '1rem', marginBottom: '4px' }}>Deployment & CI/CD</h4>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Automated build pipelines, Docker containerization & cloud hosting.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQs */}
            {course.faqs && course.faqs.length > 0 && (
              <div className="glass-card" style={{ padding: '36px' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <HelpCircle size={22} color="var(--accent-secondary)" /> Frequently Asked Questions
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  {course.faqs.map((faq, i) => (
                    <div key={i} style={{ padding: '16px', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', border: '1px solid var(--border-glass)' }}>
                      <h4 style={{ fontSize: '1rem', color: 'var(--text-primary)', marginBottom: '8px' }}>{faq.question}</h4>
                      <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar Purchase Card */}
          <div style={{ position: 'sticky', top: '100px' }}>
            <div className="glass-card" style={{ padding: '32px' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '8px' }}>
                ${course.price}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '24px' }}>
                <Clock size={16} /> Course Duration: <span style={{ color: 'var(--text-secondary)', fontWeight: 600 }}>{course.duration}</span>
              </div>

              <button 
                onClick={handleEnrollClick}
                className="btn btn-primary" 
                style={{ width: '100%', padding: '16px', fontSize: '1.05rem', marginBottom: '20px' }}
              >
                Enroll in Masterclass
              </button>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <ShieldCheck size={18} color="#34D399" /> 30-Day Money-Back Guarantee
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Sparkles size={18} color="#06B6D4" /> Verified Industry Certification
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Lock size={18} color="#6366F1" /> Lifetime Access & Updates
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
          background: 'rgba(0, 0, 0, 0.75)',
          backdropFilter: 'blur(8px)',
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
                <h3 style={{ fontSize: '1.5rem', marginBottom: '8px' }}>Complete Your Order</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '24px' }}>
                  {course.name} SKU: <strong>{course.sku}</strong>
                </p>

                {errorMsg && <div className="toast toast-error">{errorMsg}</div>}

                <div className="form-group">
                  <label className="form-label">Total Amount</label>
                  <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--accent-secondary)' }}>${course.price}</div>
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
                    {processing ? 'Processing...' : 'Pay & Access Course'}
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
