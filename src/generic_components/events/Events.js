import TitleBanner from "../TitleBanner";
import EventsList from "./EventsList";
import { listOfUpcomingEvents, listOfRegularEvents } from "../../content_components/SiteCopy";

const Events = () => {
    return (
        <>
            <TitleBanner bannerText='UPCOMING' />
            <EventsList events={listOfUpcomingEvents} />
            <div id='weekly-classes'>
                <TitleBanner bannerText='REGULAR SCHEDULE' />
            </div>
            <EventsList events={listOfRegularEvents} />
        </>
    );
}

export default Events;
