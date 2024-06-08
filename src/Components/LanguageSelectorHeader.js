import {useState, useEffect} from 'react';
import LanguageSelector from './LanguageSelector.js';

function useScrollDirection() {
    const [scrollDirection, setScrollDirection] = useState(null);
  
    useEffect(() => {
      let lastScrollY = window.pageYOffset;
  
      const updateScrollDirection = () => {
        const scrollY = window.pageYOffset;
        const direction = scrollY > lastScrollY ? "down" : "up";
        if (direction !== scrollDirection && (scrollY - lastScrollY > 3 || scrollY - lastScrollY < -3)) {
          setScrollDirection(direction);
        }
        lastScrollY = scrollY > 0 ? scrollY : 0;
      };
      window.addEventListener("scroll", updateScrollDirection); // add event listener
      return () => {
        window.removeEventListener("scroll", updateScrollDirection); // clean up
      }
    }, [scrollDirection]);
  
    return scrollDirection;
  };

const LanguageSelectorHeader = () => {
    const scrollDirection = useScrollDirection();
    
    return (
      <div className={`language-header sticky ${ scrollDirection === "down" ? "-top-24" : "top-0"} bg-white-200 transition-all duration-500`}>
        <LanguageSelector/>
      </div>
    );
  };

export default LanguageSelectorHeader;
