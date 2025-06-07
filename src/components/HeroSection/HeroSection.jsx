import { BiSearch } from 'react-icons/bi';
import './_hero-section.scss';



import { useEffect, useRef, useState } from 'react';

const HeroSection = (
  {
    onSearch
  }
) => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);
  const [searchString, setSearchString] = useState('');

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

  const handleSearch = (event) => {
    setSearchString(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page reload
    if (onSearch) {
      onSearch(searchString);
    }
  };

  return (
    <div className={`hero`} >
      <div className={`aj-hero-content ${isVisible ? 'visible' : ''}`} ref={heroRef}>
        <h2 className="greeting">Welcome to Web Media Docs!</h2>
        <form onSubmit={handleSubmit}>
          <div className="search-bar">
            <input type="text" placeholder="Search tutorials.." onChange={handleSearch} />
            <button type='submit'><BiSearch className='aj-search-icon'></BiSearch></button>
          </div>
        </form>
      </div>
      {/* <div className="button-group">
        <button>Full Stack Live Classes</button>
        <button>Data Science Advanced Course</button>
        <button>Master DSA & CP</button>
      </div> */}
    </div>
  );
};

export default HeroSection;
