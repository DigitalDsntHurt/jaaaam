import './HomeHero.scss';
import { useState, useEffect } from 'react';

// desktopImage/mobileImage/breakpoint are all overridable so other pages can
// swap in their own pair of images without touching the default (used as-is
// by the live homepage).
const HomeHero = ({
    breakpoint = 656,
    desktopImage = '/images/half_moon.png',
    mobileImage = '/images/back_to_back.jpg',
}) => {
    const [imageSrc, setImageSrc] = useState(desktopImage);

    useEffect(() => {
        const updateImage = () => {
            if (window.innerWidth < breakpoint) {
                setImageSrc(mobileImage);
            } else {
                setImageSrc(desktopImage);
            }
        };

        updateImage(); // Run on mount
        window.addEventListener('resize', updateImage);
        return () => window.removeEventListener('resize', updateImage);
    }, [breakpoint, desktopImage, mobileImage]);

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