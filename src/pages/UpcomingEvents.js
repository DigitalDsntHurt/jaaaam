import TitleBanner from "../generic_components/TitleBanner";
import EventsList from "../generic_components/events/EventsList";
import Students from "../content_components/Students";
import Footer from "../content_components/Footer";
import { listOfCurrentEvents } from "../content_components/SiteCopy";

const UpcomingEvents = () => {
    return (
        <>
            <TitleBanner bannerText='UPCOMING EVENTS' />
            <EventsList events={listOfCurrentEvents} />
            <Students />
            <Footer theme='light' />
        </>
    );
}

export default UpcomingEvents;