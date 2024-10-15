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
            Nick Smith is a mover, dancer, meditator, teacher, bodyworker and facilitator{' '}
            He enjoys encouraging fun, caring, kindness, gentleness and (where appropriate) wildness through practices centered on community, healing and how we relate to our own attention.{' '}
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

const EventItem = () => {
    return (
        <div className="event-item-container light-theme">
            <div className="event-item-image-container">
                <img
                    alt='sisyphy squat'
                    className="event-item-image"
                    src='./images/teaching.jpg'
                />
            </div>
            <div className="event-item-text-container">
                <div className="event-item-title">Title</div>
                <div className="event-item-description">Description</div>
                <div className="event-item-c2a">More info</div>
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
            <EventItem />
        </>
    );
}

export default BannerBioSchedule;