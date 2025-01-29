const CornerNav = ({ cornerNavText }) => {

    const cornerNavTextUrlLookup = {
        "Home": '/',
        "Testimonials": '/testimonials'
    };

    const navPath = cornerNavTextUrlLookup[cornerNavText] || '/';

    return (
        <div className='custom-hero-floating-header-link'>
            <a href={navPath}>{cornerNavText}</a>
        </div>
    );
}

const TitleBanner = ({ bannerText, cornerNav }) => {
    return (
        <>
            {
                cornerNav &&
                <>
                    <CornerNav cornerNavText="Home" />
                    <br />
                </>
            }
            <div className='upcoming-schedule-title-banner-container'>
                <div className='upcoming-schedule-title-banner-text'>
                    {bannerText}
                </div>
            </div>
        </>
    );
}

export default TitleBanner;