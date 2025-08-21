import pastEventItemsList from '../site_copy/pastEvents';
import EventsList from '../generic_components/events/EventsList';
import Footer from '../content_components/Footer';
import Students from '../content_components/Students';
import TitleBanner from '../generic_components/TitleBanner';

const PastEvents = () => {
    return (
        <>
            <TitleBanner
                bannerText="PAST EVENTS"
                cornerNav={true}
                subText={(<p style={{textAlign: 'center'}}><a href='https://docs.google.com/forms/d/e/1FAIpQLScT49DHIYllF6Ftk7o5_ox203fLKdItqb_Z-8EiyhAVAG6I4A/viewform' target='_blank' rel='noreferrer'>Newsletter Sign-up</a></p>)}
            />
            <EventsList events={pastEventItemsList} />
            <Students />
            <Footer theme='light' />
        </>
    );
}

export default PastEvents;