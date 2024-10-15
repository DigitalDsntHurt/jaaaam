import './BannerBioSchedule.scss';

const CustomHero = () => {
    return (
        <div className='custom-hero-container' >
            <img
                alt='sisyphy squat'
                className="custom-hero-image"
                src='./images/sisyphus_squat.png'
            />
        </div >
    );
}

const BioBanner = () => {
    const bioBannerText = (
        <>
            Nick Smith is a mover, dancer, meditator, teacher, bodyworker and facilitator{/* (but identifies mostly as human)*/}.{' '}
            He enjoys encouraging fun, caring, kindness, gentleness and (where appropriate) wildness through practices centered on community, healing and how we relate to our own attention.{' '}
            {/* In previous lives, Nick has been a founder, sofware engineer, urban farmer, data-driven sports gambler and journalist.{' '} */}
            He offers private sessions, group classes, workshops, bodywork sessions and retreats.
            <br />
            <br />
            To book or ask questions: <a href='mailto:grapesdance@gmail.com' target='_blank' rel='noreferrer'>grapesdance@gmail.com</a>
        </>

    );

    return (
        <div className='bio-banner-container light-theme'>
            <div className='bio-banner-text'>{bioBannerText}</div>
        </div>
    );
}

const UpcomingScheduleTitleBanner = () => {
    return (
        <div className='upcoming-schedule-title-banner-container'>
            <div className='upcoming-schedule-title-banner-text'>
                UPCOMING SCHEDULE
            </div>
        </div>
    );
}

const BannerBioSchedule = () => {
    return (
        <>
            <CustomHero />
            <BioBanner />
            <UpcomingScheduleTitleBanner />
        </>
    );
}

export default BannerBioSchedule;