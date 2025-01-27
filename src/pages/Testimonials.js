import Footer from "../content_components/Footer";
import Students from "../content_components/Students";
import Bio from "../content_components/Bio";

const Testimonials = () => {
    return (
        <>
            <div className='custom-hero-floating-header-link'>
                <a href='/'>Home</a>
            </div>
            <Students />
            <Bio theme='light' />
            <Footer theme='dark' />
        </>
    );
}

export default Testimonials;