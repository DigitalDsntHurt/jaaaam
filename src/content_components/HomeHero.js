import './HomeHero.scss';

const HomeHero = () => {

    const images = [
        '/images/half_moon.png',
        '/images/teaching.jpg',
        '/images/back_to_back.jpg',
        '/images/head_down.jpg',
        '/images/holly_park.png',
        '/images/bridge_at_chase.png',
    ];

    return (
        <div className='custom-hero-container'>
            <div className='custom-hero-floating-header-link'>
                <a href='/testimonials'>Testimonials</a>
            </div>
            <div className='custom-hero-image-container'>
                <img
                    alt='holistic movement with nick lala smith'
                    className="custom-hero-image"
                    src={images[0]}
                />
            </div>
        </div>
    );
}

export default HomeHero;