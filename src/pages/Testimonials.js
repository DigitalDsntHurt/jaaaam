import Footer from "../content_components/Footer";
import Students from "../content_components/Students";

const Testimonials = () => {
    return (
        <>
            <div className='custom-hero-floating-header-link'>
                <a href='/'>Home</a>
            </div>
            <Students />
            <Footer theme='light' />
        </>
    );
}

export default Testimonials;