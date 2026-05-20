import React from 'react';
import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../../../css/index.css';
import { useAnimatedCounter } from '../useAnimatedCounter/useAnimatedCounter';
import ImpactSection from '../ImpactSection/ImpactSection';

export default function HomePage() {
  return (
    <>
      {/* FIXED NAVIGATION NAVBAR */}
      <nav className="navbar-fixed" id="globalNavbar">
        <div className="container-wrapper navbar-content">
          <a href="/" className="brand-logo">
            <img src="/favicon_cb.ico" alt="CodeBridge Logo" className="logo" />
            <span>Code Bridge</span>
          </a>
          
          <div className="nav-links-desktop">
            <a href="#solutions">Solutions</a>
            <a href="#features">Features</a>
            <a href="#case-studies">Case Studies</a>
            <a href="#process">Process</a>
            <a href="#pricing">Pricing</a>
          </div>

          <div className="cta-desktop">
            <button className="btn-primary">Start Building</button>
          </div>

          <button className="menu-toggle-btn" id="mobileMenuBtn" aria-label="Toggle Mobile Menu">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </nav>

      {/* MOBILE DRAWERS MENU */}
      <div className="mobile-menu-drawer" id="mobileDrawer">
        <a href="#solutions">Solutions</a>
        <a href="#features">Features</a>
        <a href="#case-studies">Case Studies</a>
        <a href="#process">Process</a>
        <Link to="/contact" style={{ display: 'block' }}>Contact</Link>
        <button className="btn-primary" style={{ width: '100%', marginTop: '12px' }}>Start Building</button>
      </div>

      {/* HERO SECTION */}
      <section className="hero-sec">
        <div className="hero-blur-left"></div>
        <div className="hero-blur-right"></div>
        
        <div className="container-wrapper hero-grid">
          <div>
            <div className="hero-badge">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#D30000" strokeWidth="2.5">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </svg>
              <span>Enterprise Grade App Development Platform</span>
            </div>
            
            <h1 className="hero-title">
              Turn Ideas Into Products <span>In Days</span>, Not Months.
            </h1>
            
            <p className="hero-subtitle">
              Generate complete enterprise platforms, backend APIs, mobile applications and AI systems dramatically faster with lower operational risk execution overheads.
            </p>
            
            <div className="hero-btn-group">
              <button className="btn-primary" style={{ padding: '14px 28px' }}>Start Building &rarr;</button>
              <button className="btn-secondary" style={{ padding: '14px 28px' }}>
                <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" style={{ marginRight: '2px' }}>
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
                See Live Demo
              </button>
            </div>
            
            <div className="hero-social-proof">
              Trusted by enterprises, educators and government organizations
            </div>
          </div>

          <div className="hero-interactive-ui">
            <div className="tech-cards-wrapper">
              <div className="tech-card-item bg-grad-blue"><div className="tech-card-title">Backend</div><div className="tech-card-dots"><div></div><div></div><div></div></div></div>
              <div className="tech-card-item bg-grad-purple"><div className="tech-card-title">Frontend</div><div className="tech-card-dots"><div></div><div></div><div></div></div></div>
              <div className="tech-card-item bg-grad-green"><div className="tech-card-title">Mobile</div><div className="tech-card-dots"><div></div><div></div><div></div></div></div>
              <div className="tech-card-item bg-grad-orange"><div className="tech-card-title">Gen AI</div><div className="tech-card-dots"><div></div><div></div><div></div></div></div>
              <div className="tech-card-item bg-grad-red"><div className="tech-card-title">Deployment</div><div className="tech-card-dots"><div></div><div></div><div></div></div></div>
              <div className="tech-card-item bg-grad-yellow"><div className="tech-card-title">Analytics</div><div className="tech-card-dots"><div></div><div></div><div></div></div></div>
            </div>

            <div className="cloud-badges">
              {['CRUD', 'APIs', 'Redis', 'Docker', 'LLMs', 'Flutter', 'MongoDB', 'React', 'Node.js', 'BullMQ', 'GCP', 'GitHub'].map((badge) => (
                <div key={badge} className="pill-badge">{badge}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* COMPARISON SECTION */}
      <section className="comp-sec" id="solutions">
        <div className="container-wrapper">
          <div style={{ textAlign: 'center' }}>
            <h2 className="section-title">Why Choose CodeBridge?</h2>
          </div>
          
          <div className="comp-grid">
            <div className="comp-box-traditional">
              <h3 className="comp-header-trad">Traditional Development</h3>
              <div className="comp-list">
                {['Months of meetings', 'Manual coding', 'High uncertainty', 'Long deployments', 'Higher cost'].map((text, i) => (
                  <div className="comp-item" key={i}><div className="icon-wrap-trad">&times;</div><span className="text-trad">{text}</span></div>
                ))}
              </div>
            </div>

            <div className="comp-box-codebridge">
              <h3 className="comp-header-cb">CodeBridge Platform</h3>
              <div className="comp-list">
                {['Generate instantly', 'Rapid iteration', 'Enterprise-ready', 'Low risk', 'Immediate deployment'].map((text, i) => (
                  <div className="comp-item" key={i}><div className="icon-wrap-cb">&#10003;</div><span className="text-cb">{text}</span></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="feat-sec" id="features">
        <div className="container-wrapper">
          <div style={{ textAlign: 'center' }}>
            <h2 className="section-title">The Feature Ecosystem</h2>
          </div>

          <div className="feat-grid">
            <div className="feat-card">
              <div className="feat-top-row">
                <div className="feat-icon-box bg-grad-blue">
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="8" rx="2" ry="2" /><rect x="2" y="14" width="20" height="8" rx="2" ry="2" /><line x1="6" y1="6" x2="6.01" y2="6" /><line x1="6" y1="18" x2="6.01" y2="18" /></svg>
                </div>
                <div>
                  <div className="feat-label">Backend</div>
                  <h3 className="feat-title">Backend Generation</h3>
                </div>
              </div>
              <ul className="feat-sublist">
                {['Unlimited CRUD classes', 'Controllers & API endpoints', 'Feathers middleware', 'Redis caching', 'GitHub workflows', 'Docker images'].map((item, i) => (
                  <li key={i}><div className="feat-dot"></div>{item}</li>
                ))}
              </ul>
            </div>

            <div className="feat-card">
              <div className="feat-top-row">
                <div className="feat-icon-box bg-grad-purple">
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" /></svg>
                </div>
                <div>
                  <div className="feat-label">Frontend</div>
                  <h3 className="feat-title">React Components</h3>
                </div>
              </div>
              <ul className="feat-sublist">
                {['Redux state management', '400+ enterprise UI assets', 'CRUD API integrations', 'Admin Console frame', 'Content management sets', 'Profile setup flows'].map((item, i) => (
                  <li key={i}><div className="feat-dot"></div>{item}</li>
                ))}
              </ul>
            </div>

            <div className="feat-card">
              <div className="feat-top-row">
                <div className="feat-icon-box bg-grad-red">
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /><path d="M2 12h20" /></svg>
                </div>
                <div>
                  <div className="feat-label">Design</div>
                  <h3 className="feat-title">Custom UI Styling</h3>
                </div>
              </div>
              <ul className="feat-sublist">
                {['Prime React CSS core', 'Tailwind CSS structures', 'Flexible custom designs', 'Copilot styling sets', 'Continuous deployment', 'Interactive fluid layouts'].map((item, i) => (
                  <li key={i}><div className="feat-dot"></div>{item}</li>
                ))}
              </ul>
            </div>

            <div className="feat-card">
              <div className="feat-top-row">
                <div className="feat-icon-box bg-grad-yellow">
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 12h16" /><path d="M12 4v16" /><circle cx="12" cy="12" r="3" /></svg>
                </div>
                <div>
                  <div className="feat-label">Deployment</div>
                  <h3 className="feat-title">Cloud Automation</h3>
                </div>
              </div>
              <ul className="feat-sublist">
                {['Docker images', 'CI/CD pipelines', 'Auto scaling', 'Monitoring dashboards', 'Secure production releases', 'Instant environment spins'].map((item, i) => (
                  <li key={i}><div className="feat-dot"></div>{item}</li>
                ))}
              </ul>
            </div>

            <div className="feat-card">
              <div className="feat-top-row">
                <div className="feat-icon-box bg-grad-green">
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16v16H4z" /><path d="M8 9h8" /><path d="M8 15h5" /></svg>
                </div>
                <div>
                  <div className="feat-label">Mobile</div>
                  <h3 className="feat-title">Instant Flutter Widgets</h3>
                </div>
              </div>
              <ul className="feat-sublist">
                {['CRUD services', 'Hive Adapters', 'Login flows', 'Drawer menus', 'Create / Edit Pages', 'Android & iOS','Desktop support','FlutterFlow integration'].map((item, i) => (
                  <li key={i}><div className="feat-dot"></div>{item}</li>
                ))}
              </ul>
            </div>

            <div className="feat-card">
              <div className="feat-top-row">
                <div className="feat-icon-box bg-grad-orange">
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2l4 7h-8l4-7z" /><path d="M4 22h16" /><path d="M6 12l2 8" /><path d="M18 12l-2 8" /></svg>
                </div>
                <div>
                  <div className="feat-label">Data Science</div>
                  <h3 className="feat-title">Gen AI ready</h3>
                </div>
              </div>
              <ul className="feat-sublist">
                {['RAG enabled', 'Vector DB', 'LLMs integration', 'Prompt engineering', 'File converter', 'Caching','ML Flow','Dataset training'].map((item, i) => (
                  <li key={i}><div className="feat-dot"></div>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="showcase-sec" id="case-studies">
        <div className="container-wrapper">
          <div style={{ textAlign: 'center' }}>
            <h2 className="section-title">Real Platforms Delivered</h2>
          </div>

          <div className="showcase-grid">
            <div className="showcase-card">
              <div className="showcase-banner bg-grad-blue">
                <div className="showcase-icon-bg">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                </div>
                <h3>Legal Platform</h3>
              </div>
              <div className="showcase-body">
                <div><div className="showcase-block-label">Challenge</div><div className="showcase-block-text">Complex operational case tracking and dynamic unstructured data filing.</div></div>
                <div><div className="showcase-block-label">Solution</div><div className="showcase-block-text">Full-stack processing system with fully integrated automated data workflows.</div></div>
                <div><div className="showcase-block-label">Impact</div><div className="showcase-block-impact">Reduced single case processing timeline tracking by 60%.</div></div>
              </div>
            </div>

            <div className="showcase-card">
              <div className="showcase-banner bg-grad-purple">
                <div className="showcase-icon-bg">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                </div>
                <h3>Customer Support</h3>
              </div>
              <div className="showcase-body">
                <div><div className="showcase-block-label">Challenge</div><div className="showcase-block-text">Multi-channel data ticket backlogs and fragmented support channels.</div></div>
                <div><div className="showcase-block-label">Solution</div><div className="showcase-block-text">AI context workflows directly built inside unified analytics system environments.</div></div>
                <div><div className="showcase-block-label">Impact</div><div className="showcase-block-impact">Accelerated average response times metrics by 75% in month one.</div></div>
              </div>
            </div>

            <div className="showcase-card">
              <div className="showcase-banner bg-grad-orange">
                <div className="showcase-icon-bg">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
                </div>
                <h3>Due Diligence AI</h3>
              </div>
              <div className="showcase-body">
                <div><div className="showcase-block-label">Challenge</div><div className="showcase-block-text">Manual risk checking pipelines across thousands of active corporate records.</div></div>
                <div><div className="showcase-block-label">Solution</div><div className="showcase-block-text">RAG-enabled AI systems configured alongside ultra-fast vector search databases.</div></div>
                <div><div className="showcase-block-label">Impact</div><div className="showcase-block-impact">Automated 80% of corporate manual review pipelines instantly.</div></div>
              </div>
            </div>

            <div className="showcase-card">
              <div className="showcase-banner bg-grad-green">
                <div className="showcase-icon-bg">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 6h16" /><path d="M4 12h16" /><path d="M4 18h16" /><circle cx="6" cy="6" r="2" /><circle cx="12" cy="12" r="2" /><circle cx="18" cy="18" r="2" /></svg>
                </div>
                <h3>Loan Management System</h3>
              </div>
              <div className="showcase-body">
                <div><div className="showcase-block-label">Challenge</div><div className="showcase-block-text">Complex approval workflows and tracking</div></div>
                <div><div className="showcase-block-label">Solution</div><div className="showcase-block-text">End-to-end loan processing platform</div></div>
                <div><div className="showcase-block-label">Impact</div><div className="showcase-block-impact">Faster approvals, better compliance</div></div>
              </div>
            </div>

            <div className="showcase-card">
              <div className="showcase-banner bg-grad-yellow">
                <div className="showcase-icon-bg">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16v16H4z" /><path d="M8 8l8 8" /><path d="M16 8l-8 8" /></svg>
                </div>
                <h3>Customer Relationship Management</h3>
              </div>
              <div className="showcase-body">
                <div><div className="showcase-block-label">Challenge</div><div className="showcase-block-text">Disorganized customer data</div></div>
                <div><div className="showcase-block-label">Solution</div><div className="showcase-block-text">Centralized contact management</div></div>
                <div><div className="showcase-block-label">Impact</div><div className="showcase-block-impact">Increased customer retention</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CREDIBILITY & METRICS */}
      <section className="credibility-sec">
        <div className="container-wrapper">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 className="section-title">Trusted By Leading Organizations</h2>
          </div>

          <div className="credibility-grid">
            <div className="credibility-card">
              <div className="credibility-top">
                <div className="credibility-icon-box">
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="2" ry="2" /><path d="M12 2v20" /><path d="M2 12h20" /></svg>
                </div>
                <div><h3>Knowledgecom</h3><div className="credibility-metric">5+ Organizations</div></div>
              </div>
              <p className="credibility-desc">Conducted specialized professional training ecosystems for Talent Corp, Yayasan Pahang, Yayasan Peneraju, UniMap and multiple national growth corporations.</p>
            </div>

            <div className="credibility-card">
              <div className="credibility-top">
                <div className="credibility-icon-box">
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v5" /></svg>
                </div>
                <div><h3>Beyond 4 Sdn Bhd</h3><div className="credibility-metric">50 Students</div></div>
              </div>
              <p className="credibility-desc">Sykmind AI advanced syllabus deployment covering computer vision frameworks and secure vector LLM networks. Fully certified and supported via HRDCorp allocations.</p>
            </div>

            <div className="credibility-card">
              <div className="credibility-top">
                <div className="credibility-icon-box">
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                </div>
                <div><h3>SHRDC</h3><div className="credibility-metric">300 Students</div></div>
              </div>
              <p className="credibility-desc">Industrial full-stack web and systems software engineering architecture track. Continuous multi-stage operational masterclass executed over an extended timeline schedule.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PLUGGED IN ANIMATED IMPACT NUMBERS SECTION */}
      <ImpactSection />

      {/* PROCESS TRACK */}
      <section className="proc-sec" id="process">
        <div className="proc-blur-1"></div>
        <div className="proc-blur-2"></div>
        
        <div className="container-wrapper" style={{ position: 'relative', zIndex: 5 }}>
          <div style={{ textAlign: 'center' }}>
            <h2 className="section-title proc-title-white">From Idea to Production</h2>
            <p className="section-desc proc-desc-gray">A streamlined execution architecture built for total platform agility.</p>
          </div>

          <div className="proc-track">
            <div className="proc-line-desktop"></div>
            <div className="proc-grid">
              {[
                { num: '01', title: 'Share Idea', desc: 'Discuss parameters and project scope structures.', path: 'M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z' },
                { num: '02', title: 'Generate', desc: 'Automated full-stack architecture compiles in minutes.', template: true },
                { num: '03', title: 'Customize', desc: 'Refine layouts and components to your exact operational logic.', path: 'M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z' },
                { num: '04', title: 'Deploy', desc: 'Automated continuous push to optimized live cloud servers.', poly: '5 3 19 12 5 21 5 3' },
                { num: '05', title: 'Scale', desc: 'Evolve features seamlessly with zero technical product debt.', lines: true }
              ].map((step, idx) => (
                <div className="proc-step-node" key={idx}>
                  <div className="proc-icon-shell">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      {step.path && <path d={step.path} />}
                      {step.poly && <polygon points={step.poly} />}
                      {step.template && (
                        <>
                          <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
                          <rect x="9" y="9" width="6" height="6" />
                          <line x1="9" y1="1" x2="9" y2="4" /><line x1="15" y1="1" x2="15" y2="4" />
                          <line x1="9" y1="20" x2="9" y2="23" /><line x1="15" y1="20" x2="15" y2="23" />
                        </>
                      )}
                      {step.lines && (
                        <>
                          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                          <polyline points="17 6 23 6 23 12" />
                        </>
                      )}
                    </svg>
                  </div>
                  <div className="proc-step-num">{step.num}</div>
                  <h3 className="proc-step-heading">{step.title}</h3>
                  <p className="proc-step-details">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

            {/* Pricing Section */}
     <section id="pricing" className="pricing-sec">
      <div className="pricing-container">
       <div className="pricing-header">
      <h2 className="pricing-main-title">Simple, Transparent Pricing</h2>
      <p className="pricing-subtitle">Choose the plan that fits your needs. No hidden fees.</p>
       </div>

    <div className="pricing-grid">
      <div className="pricing-card">
        <div className="card-inner-padding">
          <div className="card-title-row">
            <div className="card-icon-box bg-blue-grad"></div>
            <h3 className="card-plan-name">Starter</h3>
          </div>
          <p className="card-description">Perfect for small projects and MVPs</p>
          <div className="card-price-block">
            <div className="price-row">
              <span className="currency-label">RM</span>
              <span className="price-number">15</span>
            </div>
            <div className="period-label">Per Month</div>
          </div>
          <ul className="features-list">
            <li><span className="check-marker">✓</span> Backend API generation</li>
            <li><span className="check-marker">✓</span> Frontend React components</li>
            <li><span className="check-marker">✓</span> Basic mobile setup</li>
            <li><span className="check-marker">✓</span> Up to 10 CRUD classes</li>
            <li><span className="check-marker">✓</span> GitHub deployment</li>
            <li><span className="check-marker">✓</span> Email support</li>
            <li><span className="check-marker">✓</span> 1 revision round</li>
          </ul>
          <button className="pricing-btn button-outline">Get Started</button>
        </div>
      </div>

      <div className="pricing-card card-highlighted">
        <div className="popular-badge-ribbon">MOST POPULAR</div>
        <div className="card-inner-padding">
          <div className="card-title-row">
            <div className="card-icon-box bg-red-grad"></div>
            <h3 className="card-plan-name">Professional</h3>
          </div>
          <p className="card-description">For growing businesses and enterprises</p>
          <div className="card-price-block">
            <div className="price-row">
              <span className="currency-label">RM</span>
              <span className="price-number">65</span>
            </div>
            <div className="period-label">Per Month</div>
          </div>
          <ul className="features-list">
            <li><span className="check-marker">✓</span> Everything in Starter</li>
            <li><span className="check-marker">✓</span> Advanced backend features</li>
            <li><span className="check-marker">✓</span> Full mobile app (iOS + Android)</li>
            <li><span className="check-marker">✓</span> Unlimited CRUD classes</li>
            <li><span className="check-marker">✓</span> Gen AI integration</li>
            <li><span className="check-marker">✓</span> Redis + BullMQ setup</li>
            <li><span className="check-marker">✓</span> GCP deployment</li>
            <li><span className="check-marker">✓</span> Priority support</li>
            <li><span className="check-marker">✓</span> 3 revision rounds</li>
            <li><span className="check-marker">✓</span> Documentation included</li>
          </ul>
          <button className="pricing-btn button-solid-red">Get Started</button>
        </div>
      </div>

      <div className="pricing-card">
        <div className="card-inner-padding">
          <div className="card-title-row">
            <div className="card-icon-box bg-purple-grad"></div>
            <h3 className="card-plan-name">Enterprise</h3>
          </div>
          <p className="card-description">Tailored solutions for complex needs</p>
          <div className="card-price-block">
            <div className="price-row">
              <span className="price-number">Contact Us</span>
            </div>
            <div className="period-label">for a quote</div>
          </div>
          <ul className="features-list">
            <li><span className="check-marker">✓</span> Everything in Professional</li>
            <li><span className="check-marker">✓</span> Custom AI/ML models</li>
            <li><span className="check-marker">✓</span> Multi-platform deployment</li>
            <li><span className="check-marker">✓</span> Advanced security features</li>
            <li><span className="check-marker">✓</span> Dedicated support team</li>
            <li><span className="check-marker">✓</span> Unlimited revisions</li>
            <li><span className="check-marker">✓</span> Training sessions included</li>
            <li><span className="check-marker">✓</span> Source code ownership</li>
            <li><span className="check-marker">✓</span> SLA guarantee</li>
            <li><span className="check-marker">✓</span> Ongoing maintenance</li>
          </ul>
          <button className="pricing-btn button-outline">Contact Sales</button>
        </div>
      </div>

    </div>

    <div className="pricing-footnote">
      <p className="footnote-main-text">All plans include full source code ownership and deployment assistance</p>
      <div className="badges-row-flex">
        <div className="meta-badge-node"><span className="green-dot-marker"></span> Money-back guarantee</div>
        <div className="meta-badge-node"><span className="green-dot-marker"></span> Flexible payment terms</div>
        <div className="meta-badge-node"><span className="green-dot-marker"></span> Free consultation</div>
      </div>
    </div>

  </div>
</section>

      {/* FAQ ACCORDION SECTION */}
      <section className="faq-sec">
        <div className="container-wrapper">
          <div style={{ textAlign: 'center' }}>
            <h2 className="section-title">Frequently Asked Questions</h2>
          </div>

          <div className="faq-box-narrow">
            <div className="faq-accordion-container">
              {[
                { q: "How fast can projects launch?", a: "With CodeBridge, you can go from idea to deployed platform in days, not months. Code Bridge creates production-ready code instantly, allowing you to iterate and deploy rapidly." },
                { q: "Can requirements change?", a: "Absolutely. CodeBridge is built for rapid iteration. You can refine requirements, add features, and make changes throughout the development process without the traditional design overhead." },
                { q: "Who owns the code?", a: "You do. All generated code is yours to own, modify, and deploy as you see fit. There are no platform licensing restrictions or ongoing dependencies on our system engine." },
                { q: "Can enterprise systems be built?", a: "Yes. CodeBridge is specifically designed for enterprise-grade applications. We generate highly scalable backends, secure APIs, comprehensive testing routines, and production configurations." }
              ].map((item, idx) => (
                <div className="faq-row-item" key={idx}>
                  <button className="faq-header-trigger">
                    <span className="faq-question-txt">{item.q}</span>
                    <span className="faq-chevron">&#9662;</span>
                  </button>
                  <div className="faq-content-drawer">
                    <div className="faq-content-inner">{item.a}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta-sec">
        <div className="cta-watermark">
          <svg viewBox="0 0 200 200">
            <path d="M160 80h-24V40H30c-8.8 0-16 7.2-16 16v88h16c0 13.28 10.72 24 24 24s24-10.72 24-24h48c0 13.28 10.72 24 24 24s24-10.72 24-24h16v-40l-24-32z" />
          </svg>
        </div>
        <div className="cta-blur-overlay"></div>

        <div className="container-wrapper cta-content">
          <h2 className="cta-title">Ready To Build Faster?</h2>
          <p className="cta-desc">Launch complex cloud ecosystem platforms dynamically with radically compressed development cycles.</p>
          <button className="btn-primary btn-cta-large">Start Building Now &rarr;</button>

          <div className="cta-subtext-grid">
            <div className="cta-subtext-item"><div className="green-dot"></div><span>No credit card required</span></div>
            <div className="cta-subtext-item"><div className="green-dot"></div><span>Free operational consultation setup</span></div>
          </div>
        </div>
      </section>
      
      {/* FOOTER SECTION */}
      <footer className="footer-sec">
        <div className="container-wrapper">
          <div className="footer-grid">
            <div>
              <div className="brand-logo" style={{ color: '#ffffff' }}>
                <div className="logo-box">
                  <a href="/" className="brand-logo">
                    <img src="/favicon_cb.ico" alt="CodeBridge Logo" className="logo" />
                  </a>
                </div>
                <span>CodeBridge</span>
              </div>
              <p className="footer-brand-desc">Building the operational software systems framework of tomorrow, significantly faster.</p>
            </div>

            <div className="footer-column">
              <h3>Product</h3>
              <ul>
                <li><a href="#features">Features</a></li>
                <li><a href="#solutions">Solutions</a></li>
                <li><a href="#process">Process Pipeline</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>Company</h3>
              <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Blog</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>Legal</h3>
              <ul>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Security</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}