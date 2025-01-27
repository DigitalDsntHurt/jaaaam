import { listOfPastEvents } from '../content_components/SiteCopy';
import EventsList from '../generic_components/events/EventsList';
import Footer from '../content_components/Footer';
import Students from '../content_components/Students';
import TitleBanner from '../generic_components/TitleBanner';

const PastEvents = () => {
    return (
        <>
            <TitleBanner bannerText="PAST EVENTS" />
            <EventsList events={listOfPastEvents} />
            <Students />
            <Footer theme='light' />
        </>
    );
}

export default PastEvents;