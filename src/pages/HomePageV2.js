import './HomePage.scss';
import './HomePageV2.scss';
import '../styles/Tidepool.scss';
import bodyworkTestimonials from '../site_copy/bodyworkTestimonials';
import Bio from '../content_components/Bio';
import Events from '../generic_components/events/Events';
import FooterV2 from '../content_components/FooterV2';
import HomeHero from '../content_components/HomeHero';
import OfferingsPromo from '../content_components/OfferingsPromo';
import Students from "../content_components/Students";
import TestimonialsGrid from '../content_components/TestimonialsGrid';
import TitleBanner from '../generic_components/TitleBanner';

// Kept local to this page (rather than importing the shared bioBannerText
// from SiteCopy.js, which the deprecated v1 homepage still uses).
const bioBannerTextV2 = (
    <>
        <p>Nick Smith offers meditation, dance and movement workshops, private sessions and bodywork.</p>
        <p>To book or ask questions : <a href='mailto:grapesdance@gmail.com' target='_blank' rel='noreferrer'>grapesdance@gmail.com</a></p>
    </>
);

const BioBanner = () => {
    return (
        <div className='bio-banner-container dark-theme'>
            <div className='bio-banner-text'>{bioBannerTextV2}</div>
        </div>
    );
}

// The live homepage (served at "/"). Leads with the three bookable offerings
// (Bodywork, Private Sessions, Contact For Couples) before the upcoming events
// list. Replaced HomePage (v1), which is now deprecated but kept in the tree.
const HomePageV2 = () => {
    return (
        <div className='tidepool-theme homepage-v2'>
            <HomeHero
                breakpoint={1000}
                desktopImage='/images/in_boulder.png'
                mobileImage='/images/back_to_back.jpg'
            />
            <BioBanner />
            <OfferingsPromo />
            <Events hideYouthWork={true} />
            <TitleBanner bannerText="Testimonials" />
            <TitleBanner bannerText="Bodywork" className="testimonial-subheading" />
            <TestimonialsGrid testimonials={bodyworkTestimonials} theme='dark' />
            <TitleBanner bannerText="Movement Work" className="testimonial-subheading" />
            <Students theme='dark' />
            <Bio theme='light' />
            <FooterV2 />
        </div>
    );
}

export default HomePageV2;
