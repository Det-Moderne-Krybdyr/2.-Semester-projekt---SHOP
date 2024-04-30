import React, { useState, useEffect } from 'react';
import "./Body.css";
import produkter from "./assets/produkter.png";
import guides from "./assets/guides.png";
import about from "./assets/about.png";
import card1img from "./assets/card1img.png";
import card2img from "./assets/card2img.png";
import card3img from "./assets/card3img.png";
function Body() {
    const [slideIndex, setSlideIndex] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            plusSlides(1);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval);
    }, [slideIndex]);

    function plusSlides(n) {
        setSlideIndex((prevSlideIndex) => {
            let newIndex = prevSlideIndex + n;
            if (newIndex > 3) newIndex = 1;
            else if (newIndex < 1) newIndex = 3;
            return newIndex;
        });
    }

    return (
        <div>
            <div className="slideshow-container">
                <div className="slidesFade" style={{ display: slideIndex === 1 ? 'block' : 'none' }}>
                    <a href="produkter.php">
                    <img src={produkter} style={{ width: '100%' }} alt="produkter" />
                    </a>
                </div>

                <div className="slidesFade" style={{ display: slideIndex === 2 ? 'block' : 'none' }}>
                    <a href="guides.php">
                    <img src={guides} style={{ width: '100%' }} alt="guides" />
                    </a>
                </div>

                <div className="slidesFade" style={{ display: slideIndex === 3 ? 'block' : 'none' }}>
                    <a href="about.php">
                    <img src={about} style={{ width: '100%' }} alt="about" />
                    </a>
            </div>

                <a className="prev" onClick={() => plusSlides(-1)}>&#10094;</a>
                <a className="next" onClick={() => plusSlides(1)}>&#10095;</a>
            </div>
            <div className="headline">
                <h2>Want to save your favorite products?</h2>
                <center><p>Explore our wide range of products and guides to enhance your experience.
                Find something you like? Save the product in your favorites list and visit it again later when you're ready to buy!
                All you have to do is create or login to your profile to use this feature.</p></center>
            </div>

            <div className="buttons-container">
                <a href="create.php">
                <button className="button">New to Arne's? Create a profile!</button>
                </a>
                <a href="create.php">
                <button className="button">Already a user? Login here!</button>
                </a>
            </div>

            <div className="cards-container">
                <img src={card1img} alt="card1" className="card" />
                <img src={card2img} alt="card2" className="card" />
                <img src={card3img} alt="card3" className="card" />
            </div>

        </div>
    );
}

export default Body;
