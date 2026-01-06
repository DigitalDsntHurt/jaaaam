import './HomePage.scss';
import { bioBannerText } from '../site_copy/SiteCopy';
import Bio from '../content_components/Bio';
import Events from '../generic_components/events/Events';
import Footer from '../content_components/Footer';
import HomeHero from '../content_components/HomeHero';
import Students from "../content_components/Students";
import BodyWorkBanner from '../content_components/BodyWorkBanner';

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
            <BodyWorkBanner />
            <Events />
            <Students />
            <Bio theme='light' />
            <Footer theme='dark' />
        </>
    );
}

export default HomePage;