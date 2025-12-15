import EventsList from "./EventsList";
// import regularEventItemsList from "../../site_copy/regularEvents";
import TitleBanner from "../TitleBanner";
import upcomingEventItemsList from "../../site_copy/upcomingEvents";

const Events = () => {
    return (
        <>
            <TitleBanner 
                bannerText='UPCOMING' 
                subText={(<p style={{textAlign: 'center'}}><a href='https://docs.google.com/forms/d/e/1FAIpQLScT49DHIYllF6Ftk7o5_ox203fLKdItqb_Z-8EiyhAVAG6I4A/viewform' target='_blank' rel='noreferrer'>Newsletter Sign-up</a></p>)}
            />
            <EventsList events={upcomingEventItemsList} />
            {/* <div id='weekly-classes'>
                <TitleBanner bannerText='REGULAR SCHEDULE' />
            </div> */}
            {/* <EventsList events={regularEventItemsList} /> */}
        </>
    );
}

export default Events;
