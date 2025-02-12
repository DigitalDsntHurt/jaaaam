import TitleBanner from "../TitleBanner";
import EventsList from "./EventsList";
import { listOfUpcomingEvents, listOfRegularEvents } from "../../content_components/SiteCopy";

const Events = () => {
    return (
        <>
            <TitleBanner bannerText='UPCOMING' />
            <EventsList events={listOfUpcomingEvents} />
            <TitleBanner bannerText='REGULAR SCHEDULE' />
            <EventsList events={listOfRegularEvents} />
        </>
    );
}

export default Events;
