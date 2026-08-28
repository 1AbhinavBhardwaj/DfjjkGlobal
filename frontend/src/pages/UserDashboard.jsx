import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import API from '../api';
import { SEO } from '../components/SEO';
import { 
  User as UserIcon, 
  BookOpen, 
  ShoppingBag, 
  Award, 
  Clock, 
  Save, 
  CheckCircle2, 
  Globe, 
  Phone, 
  Mail,
  ShieldCheck
} from 'lucide-react';

export const UserDashboard = () => {
  const { user, setUser } = useContext(AuthContext);

  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [orders, setOrders] = useState([]);
  const [activeTab, setActiveTab] = useState('courses');
  const [loading, setLoading] = useState(true);

  // Profile Form state
  const [name, setName] = useState(user?.name || '');
  const [phone, setPhone] = useState(user?.phone || '');
  const [country, setCountry] = useState(user?.country || '');
  const [profileSuccess, setProfileSuccess] = useState('');
  const [profileError, setProfileError] = useState('');

  useEffect(() => {
    if (user) {
      setName(user.name || '');
      setPhone(user.phone || '');
      setCountry(user.country || '');
    }

    Promise.all([
      API.get('/users/my-courses'),
      API.get('/orders/my-orders')
    ])
      .then(([coursesRes, ordersRes]) => {
        setEnrolledCourses(coursesRes.data);
        setOrders(ordersRes.data);
      })
      .catch((err) => {
        console.warn('Dashboard data fetch warning:', err);
      })
      .finally(() => setLoading(false));
  }, [user]);

  const handleProfileUpdate = async (e) => {
    e.preventDefault();
    setProfileSuccess('');
    setProfileError('');

    try {
      const res = await API.put('/users/profile', { name, phone, country });
      setProfileSuccess(res.data.message || 'Profile updated successfully!');
      setUser((prev) => ({ ...prev, name, phone, country }));
    } catch (err) {
      setProfileError('Failed to update profile.');
    }
  };

  return (
    <div style={{ padding: '60px 0 100px' }}>
      <div className="container">
        {/* User Banner */}
        <div className="glass-card" style={{ padding: '36px', marginBottom: '40px', background: 'var(--gradient-card)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>
            <div style={{
              width: '72px',
              height: '72px',
              borderRadius: '50%',
              background: 'var(--gradient-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.8rem',
              fontWeight: 800,
              color: '#FFF'
            }}>
              {user?.name ? user.name.charAt(0).toUpperCase() : 'U'}
            </div>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '6px' }}>
                <h1 style={{ fontSize: '2rem', fontWeight: 800 }}>Welcome, {user?.name}</h1>
                <span className="badge badge-success">
                  <ShieldCheck size={14} /> Student Account
                </span>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                {user?.email} • Enrolled in {enrolledCourses.length} Masterclasses
              </p>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div style={{ display: 'flex', gap: '16px', marginBottom: '32px', borderBottom: '1px solid var(--border-glass)', paddingBottom: '12px' }}>
          <button
            onClick={() => setActiveTab('courses')}
            style={{
              background: 'transparent',
              border: 'none',
              color: activeTab === 'courses' ? 'var(--accent-primary)' : 'var(--text-secondary)',
              fontSize: '1.05rem',
              fontWeight: 700,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              paddingBottom: '8px',
              borderBottom: activeTab === 'courses' ? '2px solid var(--accent-primary)' : 'none'
            }}
          >
            <BookOpen size={18} /> Enrolled Courses ({enrolledCourses.length})
          </button>

          <button
            onClick={() => setActiveTab('orders')}
            style={{
              background: 'transparent',
              border: 'none',
              color: activeTab === 'orders' ? 'var(--accent-primary)' : 'var(--text-secondary)',
              fontSize: '1.05rem',
              fontWeight: 700,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              paddingBottom: '8px',
              borderBottom: activeTab === 'orders' ? '2px solid var(--accent-primary)' : 'none'
            }}
          >
            <ShoppingBag size={18} /> Order History ({orders.length})
          </button>

          <button
            onClick={() => setActiveTab('profile')}
            style={{
              background: 'transparent',
              border: 'none',
              color: activeTab === 'profile' ? 'var(--accent-primary)' : 'var(--text-secondary)',
              fontSize: '1.05rem',
              fontWeight: 700,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              paddingBottom: '8px',
              borderBottom: activeTab === 'profile' ? '2px solid var(--accent-primary)' : 'none'
            }}
          >
            <UserIcon size={18} /> Account Settings
          </button>
        </div>

        {/* Tab Content */}
        {loading ? (
          <div style={{ textAlign: 'center', padding: '60px', color: 'var(--text-secondary)' }}>Loading Dashboard Data...</div>
        ) : (
          <div>
            {/* Courses Tab */}
            {activeTab === 'courses' && (
              <div>
                {enrolledCourses.length === 0 ? (
                  <div className="glass-card" style={{ padding: '60px', textAlign: 'center' }}>
                    <BookOpen size={48} color="var(--text-muted)" style={{ marginBottom: '16px' }} />
                    <h3 style={{ fontSize: '1.4rem', marginBottom: '12px' }}>No Enrolled Courses Yet</h3>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>Explore our catalog to enroll in top engineering masterclasses.</p>
                  </div>
                ) : (
                  <div className="grid-responsive">
                    {enrolledCourses.map((item) => (
                      <div key={item.id} className="glass-card" style={{ padding: '28px' }}>
                        <div className="badge badge-gradient" style={{ marginBottom: '16px' }}>{item.courseSku}</div>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>{item.courseName}</h3>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#34D399', fontSize: '0.85rem', marginBottom: '20px' }}>
                          <CheckCircle2 size={16} /> Status: Active Enrollment
                        </div>
                        <button className="btn btn-primary btn-sm" style={{ width: '100%' }}>
                          Access Course Dashboard
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Orders Tab */}
            {activeTab === 'orders' && (
              <div className="glass-card" style={{ padding: '32px' }}>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '24px' }}>Your Transaction History</h3>
                {orders.length === 0 ? (
                  <p style={{ color: 'var(--text-secondary)' }}>No previous orders found.</p>
                ) : (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {orders.map((ord) => (
                      <div key={ord.id} style={{
                        padding: '20px',
                        background: 'rgba(255,255,255,0.03)',
                        borderRadius: '12px',
                        border: '1px solid var(--border-glass)',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        gap: '16px'
                      }}>
                        <div>
                          <div style={{ fontWeight: 700, fontSize: '1.05rem', color: 'var(--text-primary)' }}>{ord.courseName}</div>
                          <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
                            Transaction ID: <span style={{ fontFamily: 'monospace' }}>{ord.transactionId}</span> • Payment Method: {ord.paymentMethod}
                          </div>
                        </div>

                        <div style={{ textAlign: 'right' }}>
                          <div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--accent-primary)' }}>₹{ord.totalAmount}/-</div>
                          <span className="badge badge-success" style={{ marginTop: '4px' }}>{ord.status}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Profile Tab */}
            {activeTab === 'profile' && (
              <div className="glass-card" style={{ padding: '36px', maxWidth: '600px' }}>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '24px' }}>Update Profile Information</h3>

                {profileSuccess && <div className="toast toast-success">{profileSuccess}</div>}
                {profileError && <div className="toast toast-error">{profileError}</div>}

                <form onSubmit={handleProfileUpdate}>
                  <div className="form-group">
                    <label className="form-label">Full Name</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="form-input"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Phone Number</label>
                    <input
                      type="text"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="form-input"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Country</label>
                    <input
                      type="text"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      className="form-input"
                    />
                  </div>

                  <button type="submit" className="btn btn-primary" style={{ marginTop: '12px' }}>
                    <Save size={16} /> Save Changes
                  </button>
                </form>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
