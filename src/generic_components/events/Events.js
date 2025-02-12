import TitleBanner from "../TitleBanner";
import EventsList from "./EventsList";
import { listOfCurrentEvents, listOfRegularEvents } from "../../content_components/SiteCopy";

const Events = () => {
    return (
        <>
            <TitleBanner bannerText='UPCOMING EVENTS' />
            <EventsList events={listOfCurrentEvents} />
            <TitleBanner bannerText='REGULAR EVENTS' />
            <EventsList events={listOfRegularEvents} />
        </>
    );
}

export default Events;
