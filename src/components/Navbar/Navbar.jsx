import { useEffect, useRef, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { PiGreaterThanLight } from "react-icons/pi";
import { PiLessThanLight } from "react-icons/pi";

import { Link, useLocation } from "react-router-dom";
import navbars from "../../assets/json/navbar.json";
import "./_navbar.scss";


const Navbar = () => {
    const [showHamberger, setShowHamberger] = useState(false);
    const location = useLocation();

    const menuRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);

    useEffect(() => {
        const checkScrollability = () => {
            if (!menuRef.current) return;
            const { scrollWidth, clientWidth, scrollLeft } = menuRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft + clientWidth < scrollWidth);
        };

        checkScrollability();

        const handleScroll = () => {
            checkScrollability();
        };

        const handleResize = () => {
            checkScrollability();
        };

        const menuElement = menuRef.current;
        if (menuElement) {
            menuElement.addEventListener('scroll', handleScroll);
        }
        window.addEventListener('resize', handleResize);

        return () => {
            if (menuElement) {
                menuElement.removeEventListener('scroll', handleScroll);
            }
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const scrollByAmount = (amount) => {
        if (menuRef.current) {
            menuRef.current.scrollLeft += amount;
        }
    };

    useEffect(() => {

        const handleOutsideClick = () => {
            setShowHamberger(false);
        }
        window.addEventListener('resize', handleOutsideClick);

        return () => {
            window.removeEventListener('resize', handleOutsideClick);
        };

    }, []);


    return (
        <header className="aj-main-header">

            <div className="logo">
                <a href="/">Jack Technie</a>
            </div>
            {canScrollLeft && (
                <div onClick={() => scrollByAmount(-50)} className="aj-scroll-arrow left">
                    <PiLessThanLight />
                </div>
            )}
            {
                navbars.length > 0 && (
                    <nav className={showHamberger ? "aj-hamburger-navbar" : "aj-nav-bar"} ref={menuRef}>
                        {
                            navbars.map((navbar, index) => (
                                <Link
                                    key={index}
                                    to={navbar.path}
                                    className={`aj-nav-bar-item ${location.pathname === navbar.path ? 'active' : ''}`}
                                    onClick={() => {
                                        setShowHamberger(false);
                                    }}
                                >{navbar.displayName}</Link>
                            ))
                        }
                    </nav>
                )
            }
            {canScrollRight && (
                <div onClick={() => scrollByAmount(50)} className="aj-scroll-arrow right">
                    <PiGreaterThanLight />
                </div>
            )}
            <div className="aj-hamburger-menu">
                <RxHamburgerMenu className="aj-hamburger" onClick={() => {
                    setShowHamberger(!showHamberger);
                }} />
            </div>
        </header>

    );
}

export default Navbar;