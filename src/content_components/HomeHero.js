import { useState, useEffect } from 'react';
import './HomeHero.scss';

const HomeHero = () => {
    const desktopImage = '/images/half_moon.png';
    const mobileImage = '/images/back_to_back.jpg';

    const [imageSrc, setImageSrc] = useState(desktopImage);

    useEffect(() => {
        const updateImage = () => {
            if (window.innerWidth < 656) {
                setImageSrc(mobileImage);
            } else {
                setImageSrc(desktopImage);
            }
        };

        updateImage(); // Run on mount
        window.addEventListener('resize', updateImage);
        return () => window.removeEventListener('resize', updateImage);
    }, []);

    return (
        <div className='custom-hero-container'>
            <div className='custom-hero-floating-header-link'>
                <a href='/testimonials'>Testimonials</a>
            </div>
            <div className='custom-hero-image-container'>
                <img
                    alt='holistic movement with nick lala smith'
                    className="custom-hero-image"
                    src={imageSrc}
                />
            </div>
        </div>
    );
}

export default HomeHero;