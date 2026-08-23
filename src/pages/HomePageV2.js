import './HomePage.scss';
import './HomePageV2.scss';
import Bio from '../content_components/Bio';
import Events from '../generic_components/events/Events';
import Footer from '../content_components/Footer';
import HomeHero from '../content_components/HomeHero';
import OfferingsPromo from '../content_components/OfferingsPromo';
import Students from "../content_components/Students";

// Kept local to v2 (rather than importing the shared bioBannerText from
// SiteCopy.js) so this page's copy can evolve without touching the live
// homepage's text.
const bioBannerTextV2 = (
    <>
        <p>Nick Smith offers meditation, dance and movement workshops, private sessions and bodywork.</p>
        <p>To book or ask questions: <a href='mailto:grapesdance@gmail.com' target='_blank' rel='noreferrer'>grapesdance@gmail.com</a></p>
    </>
);

const BioBanner = () => {
    return (
        <div className='bio-banner-container dark-theme'>
            <div className='bio-banner-text'>{bioBannerTextV2}</div>
        </div>
    );
}

// Draft homepage redesign: leads with the three bookable offerings (Bodywork,
// Private Sessions, Contact For Couples) before the upcoming events list.
// Not yet wired to "/" — see /home-v2 in App.js.
const HomePageV2 = () => {
    return (
        <div className='tidepool-theme'>
            <HomeHero
                breakpoint={1000}
                desktopImage='/images/in_boulder.png'
                mobileImage='/images/back_to_back.jpg'
            />
            <BioBanner />
            <OfferingsPromo />
            <Events />
            <Students theme='dark' />
            <Bio theme='light' />
            <Footer theme='dark' />
        </div>
    );
}

export default HomePageV2;
