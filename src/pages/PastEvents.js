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
                subText={(<p style={{textAlign: 'center'}}><a href='https://forms.gle/Dr1PLVPzeULtcBGa8' target='_blank' rel='noreferrer'>Newsletter Sign-up</a></p>)}
            />
            <EventsList events={pastEventItemsList} />
            <Students />
            <Footer theme='light' />
        </>
    );
}

export default PastEvents;