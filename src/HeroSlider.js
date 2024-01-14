import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './Hero.css';

const handleDragStart = (e) => e.preventDefault();

const items = [
    <img src="./images/diagonal_stretch.png" onDragStart={handleDragStart} alt="presentation" className="banner-image" />,
    <img src="./images/half_moon.png" onDragStart={handleDragStart} alt="presentation" className="banner-image" />,
    <img src="./images/sisyphus_squat.png" onDragStart={handleDragStart} alt="presentation" className="banner-image" />,
    <img src="./images/sisyphus_split_leg.png" onDragStart={handleDragStart} alt="presentation" className="banner-image" />,
];

const HeroSlider = () => {
    return (
        <div className={`banner-sect`} >
            <h1 className="banner-image-title">Move</h1>
            <AliceCarousel
                animationDuration={1500}
                animationType="fadeout"
                autoPlay={true}
                autoPlayInterval={4000}
                autoPlayStrategy="none"
                disableButtonsControls={true}
                disableDotsControls={true}
                infinite={true}
                items={items}
            />
        </div>
    );
}

export default HeroSlider;
