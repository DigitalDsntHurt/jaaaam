import './BannerBioSchedule.scss';
import { bioBannerText, eventsText } from '../content_components/SiteCopy';
import Footer from '../content_components/Footer';
import Students from "../content_components/Students";

const CustomHero = () => {
    return (
        <div className='custom-hero-container' >
            <div className='custom-hero-floating-header-link'>
                <a href='/testimonials'>Testimonials</a>
            </div>
            <img
                alt='sisyphy squat'
                className="custom-hero-image"
                src='./images/sisyphus_squat.png'
            />
        </div >
    );
}

const BioBanner = () => {
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

const EventItem = ({
    c2a,
    c2aLink,
    description,
    image,
    title,
}) => {
    return (
        <div className="event-item-container light-theme">
            <div className="event-item-image-container">
                <img
                    alt='sisyphy squat'
                    className="event-item-image"
                    src={image}
                />
            </div>
            <div className="event-item-text-container">
                <div className="event-item-title">{title}</div>
                <div className="event-item-description">{description}</div>
                <a href={c2aLink} target='_blank' rel='noreferrer'><div className="event-item-c2a">{c2a}</div></a>
            </div>
        </div>
    );
}

const EventsList = () => {
    return (
        <div className='event-items-container'>
            <EventItem
                c2a={eventsText.mondayCommunityClass.c2a}
                c2aLink={eventsText.mondayCommunityClass.c2aLink}
                description={eventsText.mondayCommunityClass.description}
                image={eventsText.mondayCommunityClass.image}
                title={eventsText.mondayCommunityClass.title}
            />
            <EventItem
                c2a={eventsText.tuesdayFluidMovementClass.c2a}
                c2aLink={eventsText.tuesdayFluidMovementClass.c2aLink}
                description={eventsText.tuesdayFluidMovementClass.description}
                image={eventsText.tuesdayFluidMovementClass.image}
                title={eventsText.tuesdayFluidMovementClass.title}
            />
            <EventItem
                c2a={eventsText.thursdayImprovClass.c2a}
                c2aLink={eventsText.thursdayImprovClass.c2aLink}
                description={eventsText.thursdayImprovClass.description}
                image={eventsText.thursdayImprovClass.image}
                title={eventsText.thursdayImprovClass.title}
            />
            <EventItem
                c2a={eventsText.fridayCommunityClass.c2a}
                c2aLink={eventsText.mondayCommunityClass.c2aLink}
                description={eventsText.fridayCommunityClass.description}
                image={eventsText.fridayCommunityClass.image}
                title={eventsText.fridayCommunityClass.title}
            />
        </div>
    );
}

const BannerBioSchedule = () => {
    return (
        <>
            <CustomHero />
            <BioBanner />
            <UpcomingScheduleTitleBanner />
            <EventsList />
            <Students />
            <Footer theme='light' />
        </>
    );
}

export default BannerBioSchedule;