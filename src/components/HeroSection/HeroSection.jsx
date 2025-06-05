import './_hero-section.scss';



import  { useEffect, useRef, useState } from 'react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <div className={`hero ${isVisible ? 'visible' : ''}`} ref={heroRef}>
      <h2 className="greeting">Hello, What Do You Want To Learn?</h2>
      <div className="search-bar">
        <input type="text" placeholder="Complete Interview Preparation" />
        <button>🔍</button>
      </div>
      <div className="button-group">
        <button>Full Stack Live Classes</button>
        <button>Data Science Advanced Course</button>
        <button>Master DSA & CP</button>
      </div>
    </div>
  );
};

export default HeroSection;
