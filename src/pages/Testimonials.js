import '../styles/Tidepool.scss';
import bodyworkTestimonials from "../site_copy/bodyworkTestimonials";
import Footer from "../content_components/Footer";
import Students from "../content_components/Students";
import Bio from "../content_components/Bio";
import TestimonialsGrid from "../content_components/TestimonialsGrid";
import TitleBanner from "../generic_components/TitleBanner";

const Testimonials = () => {
    return (
        <div className='tidepool-theme'>
            <TitleBanner
                bannerText="Testimonials"
                cornerNav={true}
                subText={(<p style={{textAlign: 'center'}}><a href='https://forms.gle/Dr1PLVPzeULtcBGa8' target='_blank' rel='noreferrer'>Newsletter Sign-up</a></p>)}
            />
            <TitleBanner bannerText="Bodywork" />
            <TestimonialsGrid testimonials={bodyworkTestimonials} theme='dark' />
            <TitleBanner bannerText="Movement Work" />
            <Students theme='dark' />
            <Bio theme='light' />
            <Footer theme='dark' />
        </div>
    );
}

export default Testimonials;