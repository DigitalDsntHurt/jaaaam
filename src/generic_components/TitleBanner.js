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

// className is an optional extra class on the banner text itself, for a
// one-off look on a specific usage (e.g. a sub-heading) without touching
// every other TitleBanner sitewide.
const TitleBanner = ({ bannerText, className, cornerNav, subText }) => {
    const bannerTextClassName = `upcoming-schedule-title-banner-text${className ? ` ${className}` : ''}`;

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
                <div className={bannerTextClassName}>
                    {bannerText}
                </div>
                {
                subText &&
                <div className='title-banner-sub-text'>
                    {subText}
                </div>
                }
            </div>
        </>
    );
}

export default TitleBanner;