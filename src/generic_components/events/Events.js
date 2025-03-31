import TitleBanner from "../TitleBanner";
import EventsList from "./EventsList";
import { listOfRegularEvents } from "../../content_components/SiteCopy";
import upcomingEventItemsList from "../../site_copy/upcomingEvents";

const Events = () => {
    return (
        <>
            <TitleBanner bannerText='UPCOMING' />
            <EventsList events={upcomingEventItemsList} />
            <div id='weekly-classes'>
                <TitleBanner bannerText='REGULAR SCHEDULE' />
            </div>
            <EventsList events={listOfRegularEvents} />
        </>
    );
}

export default Events;
