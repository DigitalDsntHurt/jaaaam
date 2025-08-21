import Footer from "../content_components/Footer";
import Students from "../content_components/Students";
import Bio from "../content_components/Bio";
import TitleBanner from "../generic_components/TitleBanner";

const Testimonials = () => {
    return (
        <>
            <TitleBanner
                bannerText="Testimonials"
                cornerNav={true}
                subText={(<p style={{textAlign: 'center'}}><a href='https://docs.google.com/forms/d/e/1FAIpQLScT49DHIYllF6Ftk7o5_ox203fLKdItqb_Z-8EiyhAVAG6I4A/viewform' target='_blank' rel='noreferrer'>Newsletter Sign-up</a></p>)}
            />
            <Students />
            <Bio theme='light' />
            <Footer theme='dark' />
        </>
    );
}

export default Testimonials;