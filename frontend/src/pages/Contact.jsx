import React, { useState } from 'react';
import API from '../api';
import { SEO } from '../components/SEO';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare } from 'lucide-react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMsg('');
    setErrorMsg('');

    try {
      const res = await API.post('/contact', formData);
      setSuccessMsg(res.data.message || 'Message sent successfully!');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch (err) {
      setErrorMsg(err.response?.data?.message || 'Failed to submit contact message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '60px 0 100px' }}>
      <SEO 
        title="Contact Us | DFJJK Global Admissions & Advisory"
        description="Get in touch with DFJJK Global for admissions, enterprise training bootcamps, technical support, and partnership inquiries."
      />
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 60px' }}>
          <div className="badge badge-gradient" style={{ marginBottom: '12px' }}>
            <MessageSquare size={14} color="#A5B4FC" /> Contact Us
          </div>
          <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '16px' }}>
            Get In <span className="gradient-text">Touch</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
            Have questions about our masterclasses, corporate advisory, or enrollment? We're here to help.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '48px' }}>
          {/* Info Side */}
          <div>
            <div className="glass-card" style={{ padding: '36px', height: '100%' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '24px' }}>Contact Information</h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '40px' }}>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{ padding: '12px', background: 'rgba(99, 102, 241, 0.15)', borderRadius: '12px' }}>
                    <Mail size={20} color="#6366F1" />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1rem', color: 'var(--text-primary)' }}>Email Us</h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>support@dfjjkglobal.com</p>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>admissions@dfjjkglobal.com</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{ padding: '12px', background: 'rgba(6, 182, 212, 0.15)', borderRadius: '12px' }}>
                    <Phone size={20} color="#06B6D4" />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1rem', color: 'var(--text-primary)' }}>Call Us</h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>+1 (800) 555-DFJJK</p>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>Mon-Fri, 9am-6pm EST</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{ padding: '12px', background: 'rgba(236, 72, 153, 0.15)', borderRadius: '12px' }}>
                    <MapPin size={20} color="#EC4899" />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1rem', color: 'var(--text-primary)' }}>Headquarters</h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Tech Innovation Center, Suite 400</p>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>San Francisco, CA 94105</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="glass-card" style={{ padding: '36px' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '24px' }}>Send Us a Message</h3>

            {successMsg && <div className="toast toast-success"><CheckCircle2 size={18} /> {successMsg}</div>}
            {errorMsg && <div className="toast toast-error">{errorMsg}</div>}

            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div className="form-group">
                  <label className="form-label">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="John Doe"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Your Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div className="form-group">
                  <label className="form-label">Phone Number</label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Course Inquiry / Enterprise Training"
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea"
                  placeholder="How can DFJJK Global assist you?"
                />
              </div>

              <button type="submit" disabled={loading} className="btn btn-primary" style={{ width: '100%', padding: '14px' }}>
                {loading ? 'Sending...' : <><Send size={16} /> Send Message</>}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
