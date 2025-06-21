import { useEffect, useRef, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { PiGreaterThanLight } from "react-icons/pi";
import { PiLessThanLight } from "react-icons/pi";

import { Link, useLocation } from "react-router-dom";
import tutorials from "../../assets/tutorials/tutorials.json";
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

    const openEditor = () => {
        window.open("/editor", "_blank")
    }


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
        <header className="wmd-main-header">
            <div className="main-header">
                <div className="logo">

                    <a href="/">
                        <img src="src/assets/images/wmd.svg" alt="Web Media Docs" />
                    </a>

                </div>
                {/* <div className="wmd-header-company-group">

                </div> */}
                <div className="wmd-hamburger-menu">
                    <RxHamburgerMenu className="wmd-hamburger" onClick={() => {
                        setShowHamberger(!showHamberger);
                    }} />
                </div>

                <div className="wmd-editor-group">
                    <button className="wmd-editor-btn" onClick={() => openEditor()} >Try Online Editor</button>
                </div>
            </div>
            <div className="main-navbar">
                {canScrollLeft && (
                    <div onClick={() => scrollByAmount(-50)} className="wmd-scroll-arrow left">
                        <PiLessThanLight />
                    </div>
                )}
                {
                    tutorials.length > 0 && (
                        <nav className={showHamberger ? "wmd-hamburger-navbar" : "wmd-nav-bar"} ref={menuRef}>
                            {
                                tutorials.map((tutorial, index) => (
                                    <Link
                                        key={index}
                                        to={tutorial.path}
                                        className={`wmd-nav-bar-item ${location.pathname === tutorial.path ? 'active' : ''}`}
                                        onClick={() => {
                                            setShowHamberger(false);
                                        }}
                                    >{tutorial.name}</Link>
                                ))
                            }
                        </nav>
                    )
                }
                {canScrollRight && (
                    <div onClick={() => scrollByAmount(50)} className="wmd-scroll-arrow right">
                        <PiGreaterThanLight />
                    </div>
                )}
            </div>
        </header>

    );
}

export default Navbar;