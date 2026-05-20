import React, { useState, useEffect, useRef } from 'react';

// --- THE SPECIFIC STATS DATA FROM YOUR DESIGN ---
const STATS_DATA = [
  { id: 1, target: 50, suffix: '+', label: 'Projects Delivered' },
  { id: 2, target: 300, suffix: '+', label: 'Students Trained' },
  { id: 3, target: 10, suffix: 'x', label: 'Faster Development' },
  { id: 4, target: 99, suffix: '%', label: 'Client Satisfaction' },
  { id: 5, target: 24, suffix: '/7', label: 'Support', isSpecial: true } 
];

// ==========================================
// ANIMATED COUNTERS (CUSTOM HOOK)
// ==========================================
function useAnimatedCounter(targetValue, startAnimation) {
  const [count, setCount] = useState(0);
  const animationRef = useRef(null);

  useEffect(() => {
    if (!startAnimation) {
      setCount(0); // Reset to 0 when out of view so it can animate again
      return;
    }

    const duration = 2000; // 2-second duration
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      
      // Smooth ease-out curve
      const easeProgress = progress * (2 - progress);
      setCount(Math.floor(easeProgress * targetValue));

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        setCount(targetValue);
      }
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [targetValue, startAnimation]);

  return count;
}

// ==========================================
// SUB-COMPONENT: INDIVIDUAL STAT COLUMN
// ==========================================
function StatItem({ stat, index, isVisible }) {
  const count = useAnimatedCounter(stat.target, isVisible);

  const itemStyle = {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    
    // Scale-in effect (0.9 → 1.0) and fade-in
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'scale(1)' : 'scale(0.9)',
    transition: 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
    
    // Staggered delays per stat column
    transitionDelay: `${index * 120}ms`
  };

  return (
    <div style={itemStyle}>
      <div className="impact-display-number">
        {`${count}${stat.suffix}`}
      </div>
      <div className="impact-display-label">
        {stat.label}
      </div>
    </div>
  );
}

// ==========================================
// MAIN COMPONENT: IMPACT AT SCALE SECTION
// ==========================================
export default function ImpactSection() {
  const [isSectionVisible, setIsSectionVisible] = useState(false);
  const sectionRef = useRef(null);

  // Correctly placed Scroll + Refresh Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsSectionVisible(true);
        } else {
          setIsSectionVisible(false); // Resets counter when scrolling away or reloading
        }
      },
      { 
        threshold: 0.05, 
        rootMargin: '0px 0px -50px 0px' 
      }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="custom-impact-section">
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Section Heading matching screenshot */}
        <h2 className="custom-impact-heading">
          Impact at Scale
        </h2>
        
        {/* Minimal 5-Column Grid layout without borders/cards */}
        <div className="custom-impact-grid">
          {STATS_DATA.map((stat, index) => (
            <StatItem 
              key={stat.id} 
              stat={stat} 
              index={index} 
              isVisible={isSectionVisible} 
            />
          ))}
        </div>

      </div>

      {/* Styled perfectly to mirror your image screenshot parameters */}
      <style>{`
        .custom-impact-section {
          background-color: #f8f9fa; 
          padding: 80px 0;
        }
        .custom-impact-heading {
          color: #0f172a; 
          font-size: 2.75rem;
          font-weight: 700;
          text-align: center;
          margin-bottom: 60px;
          letter-spacing: -0.02em;
        }
        .custom-impact-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
        }
        .impact-display-number {
          color: #D30000; 
          font-size: 4rem;
          font-weight: 700;
          line-height: 1;
          margin-bottom: 12px;
          font-variant-numeric: tabular-nums;
          letter-spacing: -0.03em;
        }
        .impact-display-label {
          color: #64748b; 
          font-size: 1rem;
          font-weight: 500;
          line-height: 1.4;
        }

        /* Responsive breakpoints to keep 5 columns organized neatly */
        @media (min-width: 640px) {
          .custom-impact-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (min-width: 1024px) {
          .custom-impact-grid { grid-template-columns: repeat(5, 1fr); }
        }
      `}</style>
    </section>
  );
}