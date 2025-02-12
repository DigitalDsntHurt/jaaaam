import './HomePage.scss';
import { bioBannerText } from '../content_components/SiteCopy';
import Bio from '../content_components/Bio';
import Events from '../generic_components/events/Events';
import Footer from '../content_components/Footer';
import Students from "../content_components/Students";

const CustomHero = () => {
    return (
        <div className='custom-hero-container' >
            <div className='custom-hero-floating-header-link'>
                <a href='/testimonials'>Testimonials</a>
            </div>
            <img
                alt='sisyphy squat'
                className="custom-hero-image"
                src='./images/teaching.jpg'
            />
        </div >
    );
}

const BioBanner = () => {
    return (
        <div className='bio-banner-container light-theme'>
            <div className='bio-banner-text'>{bioBannerText}</div>
        </div>
    );
}

const HomePage = () => {
    return (
        <>
            <CustomHero />
            <BioBanner />
            <Events />
            <Students />
            <Bio theme='light' />
            <Footer theme='dark' />
        </>
    );
}

export default HomePage;