import './HomeHero.scss';

const HomeHero = () => {
    return (
        <div className='custom-hero-container' >
            <div className='custom-hero-floating-header-link'>
                <a href='/testimonials'>Testimonials</a>
            </div>
            <img
                alt='holistic movement with nick lala smith'
                className="custom-hero-image"
                src='./images/half_moon.png'
            />
        </div >
    );
}

export default HomeHero;

// const images = [
//     '/images/half_moon.png',
//     '/images/teaching.jpg',
//     '/images/back_to_back.jpg',
//     '/images/head_down.jpg',
//     '/images/holly_park.png',
//     '/images/bridge_at_chase.png',
// ];