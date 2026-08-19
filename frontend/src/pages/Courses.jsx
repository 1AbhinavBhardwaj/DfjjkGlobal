import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import API from '../api';
import { CATALOG_COURSES } from '../data/coursesData';
import { Search, Clock, ArrowRight, BookOpen, Layers, Sparkles } from 'lucide-react';

export const Courses = () => {
  const [courses, setCourses] = useState(CATALOG_COURSES);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All', 
    'Data Science', 
    'Software Engineering', 
    'Cloud & Infrastructure', 
    'Artificial Intelligence', 
    'Cybersecurity'
  ];

  useEffect(() => {
    API.get('/courses')
      .then((res) => {
        if (res.data && Array.isArray(res.data) && res.data.length > 0) {
          // Merge API results with rich local metadata
          const merged = res.data.map((apiCourse) => {
            const local = CATALOG_COURSES.find(c => c.sku.toUpperCase() === apiCourse.sku.toUpperCase());
            return {
              ...apiCourse,
              highlights: local?.highlights || [],
              learningJourney: local?.learningJourney || [],
              modules: local?.modules || [],
              sessions: local?.sessions || [],
              aiModules: local?.aiModules || []
            };
          });

          // Ensure any catalog courses missing from API (e.g. newly added Data Science courses) are present
          CATALOG_COURSES.forEach(localCourse => {
            if (!merged.some(m => m.sku.toUpperCase() === localCourse.sku.toUpperCase())) {
              merged.push(localCourse);
            }
          });
          setCourses(merged);
        } else {
          setCourses(CATALOG_COURSES);
        }
      })
      .catch((err) => {
        console.warn('API connection offline/unreachable. Falling back to catalog store:', err);
        setCourses(CATALOG_COURSES);
      })
      .finally(() => setLoading(false));
  }, []);

  const filteredCourses = courses.filter((c) => {
    const matchesSearch = c.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          (c.summary && c.summary.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || c.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div style={{ padding: '60px 0 100px' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 48px' }}>
          <div className="badge badge-gradient" style={{ marginBottom: '12px' }}>
            <BookOpen size={14} color="#A5B4FC" /> Enterprise Learning Catalog
          </div>
          <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '16px' }}>
            Explore Our <span className="gradient-text">Masterclasses</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.6 }}>
            Industry-vetted programs led by principal engineers and AI leaders. Master Data Science, SQL, Power BI, Machine Learning, and Cloud Architecture.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="glass-card" style={{ padding: '20px 28px', marginBottom: '40px', display: 'flex', flexWrap: 'wrap', gap: '20px', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Category Pills Scrollable Container */}
          <div className="category-filter-scroll">
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
                  whiteSpace: 'nowrap',
                  transition: 'all 0.2s'
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div style={{ position: 'relative', minWidth: '240px', flexGrow: 1, maxWidth: '320px' }}>
            <Search size={18} color="var(--text-muted)" style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }} />
            <input
              type="text"
              placeholder="Search courses or topics..."
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
            <p style={{ color: 'var(--text-secondary)' }}>Try adjusting your search query or category filter.</p>
          </div>
        ) : (
          <div className="grid-responsive">
            {filteredCourses.map((course) => {
              const localMeta = CATALOG_COURSES.find(c => c.sku.toUpperCase() === course.sku.toUpperCase());
              const keyTechs = (localMeta?.highlights || []).slice(0, 3);

              return (
                <div key={course.id || course.sku} className="glass-card" style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
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
                      <h3 style={{ fontSize: '1.25rem', marginBottom: '12px', color: 'var(--text-primary)', lineHeight: 1.3 }}>
                        {course.name}
                      </h3>
                      <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '16px' }}>
                        {course.summary}
                      </p>

                      {/* Key Tech Highlights Pills */}
                      {keyTechs.length > 0 && (
                        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '20px' }}>
                          {keyTechs.map((tech, idx) => (
                            <span key={idx} style={{
                              fontSize: '0.75rem',
                              padding: '3px 10px',
                              borderRadius: 'var(--radius-sm)',
                              background: 'rgba(255, 255, 255, 0.04)',
                              border: '1px solid var(--border-glass)',
                              color: 'var(--text-secondary)'
                            }}>
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
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
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

