import React, { useEffect, useState } from 'react';
import "./Footer.css";

function Footer() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        function handleScroll() {
            const footer = document.querySelector('.footer');
            if (footer) {
                const windowHeight = window.innerHeight;
                const documentHeight = document.body.scrollHeight;
                const scrollTop = window.scrollY || window.pageYOffset;
                const scrollPosition = scrollTop + windowHeight;
                const isFooterVisible = scrollPosition >= documentHeight; // Check if scrolled to the bottom
                setIsVisible(isFooterVisible);
            }
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`footer ${isVisible ? 'show' : ''}`}>
            <div className="footerNav">
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">News</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Contact Us</a></li>
                    <li><a href="">Our Team</a></li>
                </ul>
            </div>
            <div className="horizontal-line"></div>
            <div className="footer-facts">
                <p> Arnes Electronics reserves the right for correction and printing errors as well as price and tax changes.</p>
                <p> Please note that no order is binding until Arnes Electronics has issued a binding invoice.</p>
            </div>
            <div className="horizontal-line"></div>
            <div className="footer-copyright">
                <p>copyright &copy;2024 Arnes Elektronik, designed by <span>VORES GRUPPE</span> </p>
            </div>
        </div>
    );
}

export default Footer;
