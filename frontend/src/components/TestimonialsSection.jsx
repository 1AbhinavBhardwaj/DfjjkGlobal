import React from 'react';
import { Quote, Linkedin, GraduationCap, BadgeCheck } from 'lucide-react';

const testimonials = [
  {
    name: 'Priya Sharma',
    avatar: 'PS',
    color: '#6366F1',
    course: 'Data Science and AI',
    role: '[Current Role] — [Company/Organization]',
    linkedin: '#',
    quote: 'The flagship Data Science and AI program transformed my career trajectory. The live mentoring sessions, real-world capstone projects, and community support were truly world-class. I secured my first Data Analyst role within 3 months of completing the course.'
  },
  {
    name: 'Arun Mehta',
    avatar: 'AM',
    color: '#0284C7',
    course: 'Cloud Computing and DevOps Specialisation',
    role: '[Current Role] — [Company/Organization]',
    linkedin: '#',
    quote: 'DFJJK Global\'s DevOps Specialisation gave me hands-on experience with Kubernetes, Terraform, and CI/CD pipelines from day one. The instructors are seasoned industry engineers — not just academics. Best investment I made in my tech career.'
  },
  {
    name: 'Fatima Al-Hassan',
    avatar: 'FA',
    color: '#EA580C',
    course: 'Cybersecurity 28-Module Program',
    role: '[Current Role] — [Company/Organization]',
    linkedin: '#',
    quote: 'The 28-module Cybersecurity program is genuinely comprehensive. From network fundamentals to ethical hacking, SOC operations, and GRC compliance — I felt ready to sit my CompTIA Security+ exam right after completing the coursework. Highly recommended!'
  },
  {
    name: 'Rohan Verma',
    avatar: 'RV',
    color: '#7C3AED',
    course: 'Comprehensive PMP',
    role: '[Current Role] — [Company/Organization]',
    linkedin: '#',
    quote: 'The PMP and Agile Hybrid program at DFJJK is brilliantly structured. The WBS, RACI matrix, and stakeholder mapping workshops were directly applicable to my current enterprise projects. My team lead noticed the quality improvement within weeks.'
  },
  {
    name: 'Neha Kapoor',
    avatar: 'NK',
    color: '#10B981',
    course: 'Power BI: Data Visualization Excellence',
    role: '[Current Role] — [Company/Organization]',
    linkedin: '#',
    quote: 'If you want to master Power BI and DAX — this is the program. The advanced semantic modeling, Power Query optimization, and Microsoft Fabric integration modules were beyond what I expected at this price point. Incredible value.'
  },
  {
    name: 'Samuel Okonkwo',
    avatar: 'SO',
    color: '#F59E0B',
    course: 'Agile Product Owner Masterclass',
    role: '[Current Role] — [Company/Organization]',
    linkedin: '#',
    quote: 'Coming from a non-tech background, I was nervous about the Product Owner course. But the DFJJK curriculum made product backlog management, stakeholder collaboration, and sprint planning easy to understand and immediately practical. A transformative experience.'
  }
];

export const TestimonialsSection = () => {
  return (
    <section style={{ padding: '80px 0', background: 'var(--bg-main)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px' }}>
          <div className="badge badge-gradient" style={{ marginBottom: '12px' }}>
            <GraduationCap size={14} color="var(--accent-primary)" /> Student Success Stories
          </div>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '16px' }}>
            Recommended by <span className="gradient-text">Our Students</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7 }}>
            Real stories from learners who transformed their careers with DFJJK Global's live mentor-led programs.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: '28px',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-glass)'
              }}
            >
              {/* Quote icon */}
              <Quote size={28} color={t.color} style={{ opacity: 0.6 }} />

              {/* Testimonial text */}
              <p style={{ 
                color: 'var(--text-secondary)', 
                fontSize: '0.93rem', 
                lineHeight: 1.75,
                fontStyle: 'italic',
                flexGrow: 1
              }}>
                "{t.quote}"
              </p>

              {/* Divider */}
              <div style={{ height: '1px', background: 'var(--border-glass)' }} />

              {/* Student info */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  {/* Avatar */}
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    background: t.color,
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 800,
                    fontSize: '0.9rem',
                    fontFamily: 'var(--font-heading)',
                    flexShrink: 0,
                    boxShadow: `0 4px 12px ${t.color}40`
                  }}>
                    {t.avatar}
                  </div>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <span style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-primary)' }}>{t.name}</span>
                      <BadgeCheck size={15} color={t.color} />
                    </div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                      {t.role}
                    </div>
                    <div style={{
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      color: t.color,
                      marginTop: '3px',
                      background: `${t.color}15`,
                      padding: '2px 8px',
                      borderRadius: 'var(--radius-full)',
                      display: 'inline-block'
                    }}>
                      {t.course}
                    </div>
                  </div>
                </div>

                {/* LinkedIn badge */}
                <a
                  href={t.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${t.name}'s LinkedIn profile`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '34px',
                    height: '34px',
                    borderRadius: '8px',
                    background: '#0A66C2',
                    color: '#fff',
                    transition: 'all 0.2s',
                    flexShrink: 0
                  }}
                >
                  <Linkedin size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Placeholder notice */}
        <p style={{ 
          textAlign: 'center', 
          marginTop: '32px', 
          fontSize: '0.78rem', 
          color: 'var(--text-muted)',
          fontStyle: 'italic'
        }}>
          * Student roles and companies shown as [placeholders] — to be updated with verified information.
        </p>
      </div>
    </section>
  );
};
