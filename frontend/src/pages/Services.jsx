import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { Server, ShieldCheck, Cpu, Code2, Users2, Cloud, ArrowRight } from 'lucide-react';

export const Services = () => {
  const servicesList = [
    {
      icon: <Server size={32} color="#6366F1" />,
      title: "Enterprise Full-Stack Consulting",
      description: "Architecture modernization, migration from legacy monorepos to microservices with Spring Boot, Spring Security, and high-performance React frontends."
    },
    {
      icon: <Cloud size={32} color="#06B6D4" />,
      title: "Cloud Infrastructure & DevOps",
      description: "Multi-cloud deployment automation on AWS/GCP, Kubernetes cluster hardening, Infrastructure as Code using Terraform, and GitOps pipelines."
    },
    {
      icon: <Cpu size={32} color="#EC4899" />,
      title: "Applied AI & Machine Learning Solutions",
      description: "Custom RAG architectures, LLM fine-tuning, vector search indexing, and real-time AI API integration into enterprise applications."
    },
    {
      icon: <ShieldCheck size={32} color="#34D399" />,
      title: "Cybersecurity & Security Auditing",
      description: "Zero-trust network implementation, penetration testing, automated static/dynamic code vulnerability analysis, and compliance certification."
    },
    {
      icon: <Users2 size={32} color="#F59E0B" />,
      title: "Corporate Tech Workshops & Upskilling",
      description: "Customized technical training bootcamps for engineering teams, tailored to your proprietary stack and architecture guidelines."
    },
    {
      icon: <Code2 size={32} color="#8B5CF6" />,
      title: "Custom Software Engineering",
      description: "Dedicated full-stack engineering pods to build mission-critical web applications, APIs, and real-time data pipelines."
    }
  ];

  return (
    <div style={{ padding: '60px 0 100px' }}>
      <SEO 
        title="Enterprise Consulting & Technology Services | DFJJK Global"
        description="Explore DFJJK Global enterprise tech services: Full-stack consulting, cloud DevOps infrastructure, custom AI/ML engineering, cybersecurity auditing, and corporate upskilling."
      />
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 60px' }}>
          <div className="badge badge-gradient" style={{ marginBottom: '12px' }}>
            Enterprise Offerings
          </div>
          <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '16px' }}>
            DFJJK Global <span className="gradient-text">Services</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
            Transforming corporate technology infrastructure with expert advisory, custom software solutions, and specialized team upskilling.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px', marginBottom: '80px' }}>
          {servicesList.map((srv, index) => (
            <div key={index} className="glass-card" style={{ padding: '36px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ padding: '14px', background: 'rgba(255,255,255,0.04)', borderRadius: '14px', width: 'fit-content', marginBottom: '20px', border: '1px solid var(--border-glass)' }}>
                  {srv.icon}
                </div>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '12px' }}>{srv.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '24px' }}>
                  {srv.description}
                </p>
              </div>

              <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--accent-secondary)', fontWeight: 600, textDecoration: 'none', fontSize: '0.95rem' }}>
                Inquire Service <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
