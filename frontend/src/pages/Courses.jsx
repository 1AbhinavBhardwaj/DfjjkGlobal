import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import API from '../api';
import { Search, Clock, ArrowRight, BookOpen, Filter } from 'lucide-react';

export const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Software Engineering', 'Cloud & Infrastructure', 'Artificial Intelligence', 'Cybersecurity'];

  useEffect(() => {
    API.get('/courses')
      .then((res) => setCourses(res.data))
      .catch((err) => console.error('Failed to load courses', err))
      .finally(() => setLoading(false));
  }, []);

  const filteredCourses = courses.filter((c) => {
    const matchesSearch = c.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          c.summary.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || c.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div style={{ padding: '60px 0 100px' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 48px' }}>
          <div className="badge badge-gradient" style={{ marginBottom: '12px' }}>
            <BookOpen size={14} color="#A5B4FC" /> Learning Catalog
          </div>
          <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '16px' }}>
            Explore Our <span className="gradient-text">Masterclasses</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
            Browse industry-vetted courses led by principal engineers and senior tech leaders.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="glass-card" style={{ padding: '20px 28px', marginBottom: '40px', display: 'flex', flexWrap: 'wrap', gap: '20px', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Category Pills */}
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: '8px 18px',
                  borderRadius: 'var(--radius-full)',
                  border: selectedCategory === cat ? '1px solid var(--accent-primary)' : '1px solid var(--border-glass)',
                  background: selectedCategory === cat ? 'rgba(99, 102, 241, 0.2)' : 'transparent',
                  color: selectedCategory === cat ? '#A5B4FC' : 'var(--text-secondary)',
                  cursor: 'pointer',
                  fontWeight: 600,
                  fontSize: '0.85rem',
                  transition: 'all 0.2s'
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div style={{ position: 'relative', width: '280px' }}>
            <Search size={18} color="var(--text-muted)" style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }} />
            <input
              type="text"
              placeholder="Search courses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="form-input"
              style={{ paddingLeft: '42px', paddingRight: '16px', borderRadius: 'var(--radius-full)' }}
            />
          </div>
        </div>

        {/* Course Grid */}
        {loading ? (
          <div style={{ textAlign: 'center', padding: '80px', color: 'var(--text-secondary)' }}>Loading catalog...</div>
        ) : filteredCourses.length === 0 ? (
          <div className="glass-card" style={{ padding: '60px', textAlign: 'center' }}>
            <h3 style={{ marginBottom: '12px' }}>No matching courses found</h3>
            <p style={{ color: 'var(--text-secondary)' }}>Try adjusting your search criteria or category filter.</p>
          </div>
        ) : (
          <div className="grid-responsive">
            {filteredCourses.map((course) => (
              <div key={course.id} className="glass-card" style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
                  <img
                    src={course.imageUrl}
                    alt={course.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{ position: 'absolute', top: '14px', left: '14px' }} className="badge badge-gradient">
                    {course.category}
                  </div>
                </div>

                <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <h3 style={{ fontSize: '1.25rem', marginBottom: '12px', color: 'var(--text-primary)' }}>{course.name}</h3>
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
                      View Details & Enroll <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
