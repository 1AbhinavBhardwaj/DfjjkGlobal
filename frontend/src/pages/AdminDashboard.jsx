import React, { useState, useEffect } from 'react';
import API from '../api';
import { SEO } from '../components/SEO';
import { 
  ShieldCheck, 
  Users, 
  BookOpen, 
  ShoppingBag, 
  IndianRupee, 
  Plus, 
  ToggleLeft, 
  ToggleRight, 
  Trash2, 
  Send, 
  Edit3, 
  CheckCircle2, 
  X 
} from 'lucide-react';

export const AdminDashboard = () => {
  const [stats, setStats] = useState({ totalUsers: 0, totalCourses: 0, totalOrders: 0, totalRevenue: 0 });
  const [courses, setCourses] = useState([]);
  const [usersList, setUsersList] = useState([]);
  const [ordersList, setOrdersList] = useState([]);
  const [activeTab, setActiveTab] = useState('overview');
  const [loading, setLoading] = useState(true);

  // Course Modal state
  const [showCourseModal, setShowCourseModal] = useState(false);
  const [editingCourse, setEditingCourse] = useState(null);
  const [courseForm, setCourseForm] = useState({
    sku: '', name: '', summary: '', description: '', price: '', duration: '', category: 'Software Engineering', imageUrl: ''
  });

  // Email SMS broadcast state
  const [broadcastForm, setBroadcastForm] = useState({ type: 'EMAIL', subject: '', body: '' });
  const [broadcastMessage, setBroadcastMessage] = useState('');

  const loadData = () => {
    setLoading(true);
    Promise.all([
      API.get('/admin/stats'),
      API.get('/courses'),
      API.get('/admin/users'),
      API.get('/admin/orders')
    ])
      .then(([statsRes, coursesRes, usersRes, ordersRes]) => {
        setStats(statsRes.data);
        setCourses(coursesRes.data);
        setUsersList(usersRes.data);
        setOrdersList(ordersRes.data);
      })
      .catch((err) => {
        console.warn('Admin load error:', err);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleToggleCourseStatus = async (sku) => {
    try {
      await API.post(`/courses/${sku}/toggle-status`);
      loadData();
    } catch (err) {
      alert('Failed to update status');
    }
  };

  const handleDeleteCourse = async (id) => {
    if (!window.confirm('Are you sure you want to delete this course?')) return;
    try {
      await API.delete(`/courses/${id}`);
      loadData();
    } catch (err) {
      alert('Failed to delete course');
    }
  };

  const handleOpenCourseModal = (course = null) => {
    if (course) {
      setEditingCourse(course);
      setCourseForm({
        sku: course.sku,
        name: course.name,
        summary: course.summary || '',
        description: course.description || '',
        price: course.price,
        duration: course.duration,
        category: course.category,
        imageUrl: course.imageUrl || ''
      });
    } else {
      setEditingCourse(null);
      setCourseForm({
        sku: 'DFJJK-' + Math.floor(1000 + Math.random() * 9000),
        name: '',
        summary: '',
        description: '',
        price: '299.00',
        duration: '6 Weeks',
        category: 'Software Engineering',
        imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80'
      });
    }
    setShowCourseModal(true);
  };

  const handleSaveCourse = async (e) => {
    e.preventDefault();
    try {
      if (editingCourse) {
        await API.put(`/courses/${editingCourse.id}`, courseForm);
      } else {
        await API.post('/courses', courseForm);
      }
      setShowCourseModal(false);
      loadData();
    } catch (err) {
      alert('Error saving course');
    }
  };

  const handleSendBroadcast = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post('/admin/email-sms/send', broadcastForm);
      setBroadcastMessage(res.data.message);
      setBroadcastForm({ type: 'EMAIL', subject: '', body: '' });
    } catch (err) {
      alert('Failed to send broadcast');
    }
  };

  return (
    <div style={{ padding: '60px 0 100px' }}>
      <SEO 
        title="Admin Control Panel | DFJJK Global"
        description="Private administrative management dashboard."
        noindex={true}
      />
      <div className="container">
        {/* Banner */}
        <div className="glass-card" style={{ padding: '36px', marginBottom: '40px', background: 'var(--gradient-card)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' }}>
            <div>
              <div className="badge badge-gradient" style={{ marginBottom: '8px' }}>
                <ShieldCheck size={14} color="#06B6D4" /> Admin Management Portal
              </div>
              <h1 style={{ fontSize: '2.4rem', fontWeight: 800 }}>DFJJK Global System Controls</h1>
            </div>
            <button onClick={() => handleOpenCourseModal()} className="btn btn-primary">
              <Plus size={18} /> Add New Course
            </button>
          </div>
        </div>

        {/* Stats Metrics Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', marginBottom: '40px' }}>
          <div className="glass-card" style={{ padding: '24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
              <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: 600 }}>Total Revenue</span>
              <IndianRupee size={20} color="#34D399" />
            </div>
            <div style={{ fontSize: '1.8rem', fontWeight: 800 }} className="gradient-text">₹{stats.totalRevenue || 0}</div>
          </div>

          <div className="glass-card" style={{ padding: '24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
              <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: 600 }}>Registered Users</span>
              <Users size={20} color="#6366F1" />
            </div>
            <div style={{ fontSize: '1.8rem', fontWeight: 800 }}>{stats.totalUsers || 0}</div>
          </div>

          <div className="glass-card" style={{ padding: '24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
              <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: 600 }}>Active Courses</span>
              <BookOpen size={20} color="#06B6D4" />
            </div>
            <div style={{ fontSize: '1.8rem', fontWeight: 800 }}>{stats.totalCourses || 0}</div>
          </div>

          <div className="glass-card" style={{ padding: '24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
              <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: 600 }}>Total Orders</span>
              <ShoppingBag size={20} color="#EC4899" />
            </div>
            <div style={{ fontSize: '1.8rem', fontWeight: 800 }}>{stats.totalOrders || 0}</div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div style={{ display: 'flex', gap: '20px', marginBottom: '32px', borderBottom: '1px solid var(--border-glass)', paddingBottom: '12px' }}>
          <button
            onClick={() => setActiveTab('overview')}
            style={{
              background: 'transparent',
              border: 'none',
              color: activeTab === 'overview' ? 'var(--accent-primary)' : 'var(--text-secondary)',
              fontSize: '1.05rem',
              fontWeight: 700,
              cursor: 'pointer',
              paddingBottom: '8px',
              borderBottom: activeTab === 'overview' ? '2px solid var(--accent-primary)' : 'none'
            }}
          >
            Course Catalog Manager ({courses.length})
          </button>

          <button
            onClick={() => setActiveTab('users')}
            style={{
              background: 'transparent',
              border: 'none',
              color: activeTab === 'users' ? 'var(--accent-primary)' : 'var(--text-secondary)',
              fontSize: '1.05rem',
              fontWeight: 700,
              cursor: 'pointer',
              paddingBottom: '8px',
              borderBottom: activeTab === 'users' ? '2px solid var(--accent-primary)' : 'none'
            }}
          >
            User Accounts Directory ({usersList.length})
          </button>

          <button
            onClick={() => setActiveTab('broadcast')}
            style={{
              background: 'transparent',
              border: 'none',
              color: activeTab === 'broadcast' ? 'var(--accent-primary)' : 'var(--text-secondary)',
              fontSize: '1.05rem',
              fontWeight: 700,
              cursor: 'pointer',
              paddingBottom: '8px',
              borderBottom: activeTab === 'broadcast' ? '2px solid var(--accent-primary)' : 'none'
            }}
          >
            Email / SMS Dispatch Tool
          </button>
        </div>

        {/* Tab Content */}
        {loading ? (
          <div style={{ textAlign: 'center', padding: '60px', color: 'var(--text-secondary)' }}>Loading Admin Portal...</div>
        ) : (
          <div>
            {/* Courses Management */}
            {activeTab === 'overview' && (
              <div className="glass-card" style={{ padding: '32px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                  <h3 style={{ fontSize: '1.4rem' }}>Course Catalog Management</h3>
                </div>

                <div style={{ overflowX: 'auto' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.9rem' }}>
                    <thead>
                      <tr style={{ borderBottom: '1px solid var(--border-glass)', color: 'var(--text-muted)' }}>
                        <th style={{ padding: '12px' }}>SKU</th>
                        <th style={{ padding: '12px' }}>Title</th>
                        <th style={{ padding: '12px' }}>Category</th>
                        <th style={{ padding: '12px' }}>Price</th>
                        <th style={{ padding: '12px' }}>Status</th>
                        <th style={{ padding: '12px', textAlign: 'right' }}>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {courses.map((course) => (
                        <tr key={course.id} style={{ borderBottom: '1px solid var(--border-glass)' }}>
                          <td style={{ padding: '16px 12px', fontFamily: 'monospace', fontWeight: 600 }}>{course.sku}</td>
                          <td style={{ padding: '16px 12px', fontWeight: 600 }}>{course.name}</td>
                          <td style={{ padding: '16px 12px' }}>
                            <span className="badge badge-gradient">{course.category}</span>
                          </td>
                          <td style={{ padding: '16px 12px', fontWeight: 700, color: 'var(--accent-primary)' }}>₹{course.price}</td>
                          <td style={{ padding: '16px 12px' }}>
                            <button
                              onClick={() => handleToggleCourseStatus(course.sku)}
                              style={{ background: 'transparent', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}
                            >
                              {course.active ? (
                                <span className="badge badge-success"><ToggleRight size={18} /> Active</span>
                              ) : (
                                <span style={{ color: 'var(--text-muted)' }}><ToggleLeft size={18} /> Inactive</span>
                              )}
                            </button>
                          </td>
                          <td style={{ padding: '16px 12px', textAlign: 'right' }}>
                            <div style={{ display: 'inline-flex', gap: '8px' }}>
                              <button onClick={() => handleOpenCourseModal(course)} className="btn btn-secondary btn-sm" title="Edit">
                                <Edit3 size={14} /> Edit
                              </button>
                              <button onClick={() => handleDeleteCourse(course.id)} className="btn btn-outline btn-sm" style={{ color: '#EF4444', borderColor: '#EF4444' }} title="Delete">
                                <Trash2 size={14} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Users Directory */}
            {activeTab === 'users' && (
              <div className="glass-card" style={{ padding: '32px' }}>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '24px' }}>Registered User Accounts</h3>
                <div style={{ overflowX: 'auto' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.9rem' }}>
                    <thead>
                      <tr style={{ borderBottom: '1px solid var(--border-glass)', color: 'var(--text-muted)' }}>
                        <th style={{ padding: '12px' }}>User ID</th>
                        <th style={{ padding: '12px' }}>Full Name</th>
                        <th style={{ padding: '12px' }}>Email</th>
                        <th style={{ padding: '12px' }}>Role</th>
                        <th style={{ padding: '12px' }}>Country</th>
                      </tr>
                    </thead>
                    <tbody>
                      {usersList.map((u) => (
                        <tr key={u.id} style={{ borderBottom: '1px solid var(--border-glass)' }}>
                          <td style={{ padding: '16px 12px', fontFamily: 'monospace' }}>#{u.id}</td>
                          <td style={{ padding: '16px 12px', fontWeight: 600 }}>{u.name}</td>
                          <td style={{ padding: '16px 12px', color: 'var(--text-secondary)' }}>{u.email}</td>
                          <td style={{ padding: '16px 12px' }}>
                            <span className={u.role === 'ROLE_ADMIN' ? 'badge badge-gradient' : 'badge badge-success'}>
                              {u.role}
                            </span>
                          </td>
                          <td style={{ padding: '16px 12px', color: 'var(--text-muted)' }}>{u.country || 'N/A'}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Email SMS Dispatch */}
            {activeTab === 'broadcast' && (
              <div className="glass-card" style={{ padding: '36px', maxWidth: '650px' }}>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '24px' }}>Broadcast Notification Tool</h3>

                {broadcastMessage && <div className="toast toast-success"><CheckCircle2 size={18} /> {broadcastMessage}</div>}

                <form onSubmit={handleSendBroadcast}>
                  <div className="form-group">
                    <label className="form-label">Notification Type</label>
                    <select
                      value={broadcastForm.type}
                      onChange={(e) => setBroadcastForm({ ...broadcastForm, type: e.target.value })}
                      className="form-select"
                    >
                      <option value="EMAIL">Email Broadcast</option>
                      <option value="SMS">SMS Alert</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Subject</label>
                    <input
                      type="text"
                      required
                      value={broadcastForm.subject}
                      onChange={(e) => setBroadcastForm({ ...broadcastForm, subject: e.target.value })}
                      className="form-input"
                      placeholder="New Course Release Notification"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Message Body</label>
                    <textarea
                      required
                      rows={5}
                      value={broadcastForm.body}
                      onChange={(e) => setBroadcastForm({ ...broadcastForm, body: e.target.value })}
                      className="form-textarea"
                      placeholder="Compose your broadcast message to all registered users..."
                    />
                  </div>

                  <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '14px', marginTop: '12px' }}>
                    <Send size={16} /> Dispatch Broadcast to All Users
                  </button>
                </form>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Course Add/Edit Modal */}
      {showCourseModal && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(0,0,0,0.8)',
          backdropFilter: 'blur(8px)',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '24px'
        }}>
          <div className="glass-card" style={{ maxWidth: '600px', width: '100%', padding: '36px', background: 'var(--bg-surface)', maxHeight: '90vh', overflowY: 'auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
              <h3 style={{ fontSize: '1.5rem' }}>{editingCourse ? 'Edit Course' : 'Create New Course'}</h3>
              <button onClick={() => setShowCourseModal(false)} style={{ background: 'transparent', border: 'none', color: 'var(--text-primary)', cursor: 'pointer' }}>
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleSaveCourse}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div className="form-group">
                  <label className="form-label">Course SKU</label>
                  <input
                    type="text"
                    required
                    value={courseForm.sku}
                    onChange={(e) => setCourseForm({ ...courseForm, sku: e.target.value })}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Category</label>
                  <select
                    value={courseForm.category}
                    onChange={(e) => setCourseForm({ ...courseForm, category: e.target.value })}
                    className="form-select"
                  >
                    <option value="Data Science">Data Science</option>
                    <option value="Software Engineering">Software Engineering</option>
                    <option value="Cloud & Infrastructure">Cloud & Infrastructure</option>
                    <option value="Artificial Intelligence">Artificial Intelligence</option>
                    <option value="Cybersecurity">Cybersecurity</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Course Title</label>
                <input
                  type="text"
                  required
                  value={courseForm.name}
                  onChange={(e) => setCourseForm({ ...courseForm, name: e.target.value })}
                  className="form-input"
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div className="form-group">
                   <label className="form-label">Price (₹)</label>
                  <input
                    type="number"
                    step="0.01"
                    required
                    value={courseForm.price}
                    onChange={(e) => setCourseForm({ ...courseForm, price: e.target.value })}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Duration</label>
                  <input
                    type="text"
                    required
                    value={courseForm.duration}
                    onChange={(e) => setCourseForm({ ...courseForm, duration: e.target.value })}
                    className="form-input"
                    placeholder="10 Weeks"
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Cover Image URL</label>
                <input
                  type="text"
                  value={courseForm.imageUrl}
                  onChange={(e) => setCourseForm({ ...courseForm, imageUrl: e.target.value })}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Summary</label>
                <textarea
                  rows={2}
                  value={courseForm.summary}
                  onChange={(e) => setCourseForm({ ...courseForm, summary: e.target.value })}
                  className="form-textarea"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Full Description</label>
                <textarea
                  rows={4}
                  value={courseForm.description}
                  onChange={(e) => setCourseForm({ ...courseForm, description: e.target.value })}
                  className="form-textarea"
                />
              </div>

              <div style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
                <button type="button" onClick={() => setShowCourseModal(false)} className="btn btn-secondary" style={{ flex: 1 }}>
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary" style={{ flex: 1 }}>
                  Save Course
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
