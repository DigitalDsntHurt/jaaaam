import EventsList from "./EventsList";
import TitleBanner from "../TitleBanner";
import upcomingEventItemsList from "../../site_copy/upcomingEvents";
import youthEventItemsList from "../../site_copy/youthEvents";

// hideYouthWork is opt-in per usage — leaving it unset keeps every existing
// <Events /> showing both sections exactly as before.
const Events = ({ hideYouthWork }) => {
    return (
        <>
            <TitleBanner
                bannerText='UPCOMING'
                subText={(<p style={{textAlign: 'center'}}><a href='https://forms.gle/Dr1PLVPzeULtcBGa8' target='_blank' rel='noreferrer'>Newsletter Sign-up</a></p>)}
            />
            <EventsList events={upcomingEventItemsList} />
            {
                !hideYouthWork &&
                <>
                    <TitleBanner
                        bannerText='Youth Work'
                    />
                    <EventsList events={youthEventItemsList} />
                </>
            }
        </>
    );
}

export default Events;
