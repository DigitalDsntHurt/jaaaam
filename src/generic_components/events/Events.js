import TitleBanner from "../TitleBanner";
import EventsList from "./EventsList";
import { listOfCurrentEvents, listOfRegularEvents } from "../../content_components/SiteCopy";

const Events = () => {
    return (
        <>
            <TitleBanner bannerText='UPCOMING' />
            <EventsList events={listOfCurrentEvents} />
            <TitleBanner bannerText='REGULAR SCHEDULE' />
            <EventsList events={listOfRegularEvents} />
        </>
    );
}

export default Events;
