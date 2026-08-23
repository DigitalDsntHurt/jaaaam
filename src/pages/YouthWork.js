import '../styles/Tidepool.scss';
import BodySection from "../generic_components/BodySection";
import EventsList from "../generic_components/events/EventsList";
import Footer from "../content_components/Footer";
import TitleBanner from '../generic_components/TitleBanner';
import youthEventItemsList from "../site_copy/youthEvents";

const youthWorkText = (
    <>
        <p style={{ textAlign: 'center', fontWeight: 800 }}>
            Wild, creative, mindful play for kids
        </p>
        <p>
            I offer youth parkour, acrobatics and movement play for kids of all ages, combining physical skill-building with curiosity, mindfulness and fun. Think monkey bars, rolling, jumping, balance and games — all held in a playful, encouraging environment.
        </p>
        <p>
            Classes run weekly and are grouped by age so kids can move, challenge themselves and play alongside peers at a similar stage.
        </p>
    </>
);

const YouthWork = () => {
    return (
        <div className='tidepool-theme'>
            <TitleBanner
                bannerText={<>
                        Youth Work
                    </>}
                subText={<>
                        <p style={{ textAlign: 'center', fontWeight: 800 }}>
                            Email grapesdance@gmail.com to <a href='mailto:grapesdance@gmail.com' target='_blank' rel='noreferrer'>get in touch</a>.
                        </p>
                    </>}
            />
            <BodySection
                theme='light'
                text={youthWorkText}
            />
            <EventsList events={youthEventItemsList} />
            <Footer theme='dark' />
        </div>
    );
}

export default YouthWork;
