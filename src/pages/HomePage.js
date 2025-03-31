import './HomePage.scss';
import { bioBannerText } from '../site_copy/SiteCopy';
import Bio from '../content_components/Bio';
import Events from '../generic_components/events/Events';
import Footer from '../content_components/Footer';
import HomeHero from '../content_components/HomeHero';
import Students from "../content_components/Students";

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
            <HomeHero />
            <BioBanner />
            <Events />
            <Students />
            <Bio theme='light' />
            <Footer theme='dark' />
        </>
    );
}

export default HomePage;