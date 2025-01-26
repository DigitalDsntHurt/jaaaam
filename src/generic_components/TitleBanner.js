const TitleBanner = ({ bannerText }) => {
    return (
        <div className='upcoming-schedule-title-banner-container'>
            <div className='upcoming-schedule-title-banner-text'>
                {bannerText}
            </div>
        </div>
    );
}

export default TitleBanner;