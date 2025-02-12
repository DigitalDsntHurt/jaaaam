import './HomePage.scss';
import { bioBannerText, listOfCurrentEvents, listOfRegularEvents } from '../content_components/SiteCopy';
import EventsList from '../generic_components/events/EventsList';
import Footer from '../content_components/Footer';
import Students from "../content_components/Students";
import TitleBanner from '../generic_components/TitleBanner';
import Bio from '../content_components/Bio';

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
            <TitleBanner bannerText='UPCOMING EVENTS' />
            <EventsList events={listOfCurrentEvents} />
            <TitleBanner bannerText='REGULAR EVENTS' />
            <EventsList events={listOfRegularEvents} />
            <Students />
            <Bio theme='light' />
            <Footer theme='dark' />
        </>
    );
}

export default HomePage;