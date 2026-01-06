import EventsList from "./EventsList";
import TitleBanner from "../TitleBanner";
import upcomingEventItemsList from "../../site_copy/upcomingEvents";
import youthEventItemsList from "../../site_copy/youthEvents";

const Events = () => {
    return (
        <>
            <TitleBanner 
                bannerText='UPCOMING' 
                subText={(<p style={{textAlign: 'center'}}><a href='https://forms.gle/Dr1PLVPzeULtcBGa8' target='_blank' rel='noreferrer'>Newsletter Sign-up</a></p>)}
            />
            <EventsList events={upcomingEventItemsList} />
            <TitleBanner 
                bannerText='Youth Work'
            />
            <EventsList events={youthEventItemsList} />
        </>
    );
}

export default Events;
