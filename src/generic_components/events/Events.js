import TitleBanner from "../TitleBanner";
import EventsList from "./EventsList";
import upcomingEventItemsList from "../../site_copy/upcomingEvents";
import regularEventItemsList from "../../site_copy/regularEvents";

const Events = () => {
    return (
        <>
            <TitleBanner bannerText='UPCOMING' />
            <EventsList events={upcomingEventItemsList} />
            <div id='weekly-classes'>
                <TitleBanner bannerText='REGULAR SCHEDULE' />
            </div>
            <EventsList events={regularEventItemsList} />
        </>
    );
}

export default Events;
