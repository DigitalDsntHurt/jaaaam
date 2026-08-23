import '../styles/Tidepool.scss';
import { cloneElement } from 'react';
import pastEventItemsList from '../site_copy/pastEvents';
import EventsList from '../generic_components/events/EventsList';
import Footer from '../content_components/Footer';
import Students from '../content_components/Students';
import TitleBanner from '../generic_components/TitleBanner';

// Past events keep their titles and descriptions but drop the image and
// booking CTA that make sense for upcoming events, not ones already over —
// done here via cloneElement rather than touching the shared EventItem data,
// which every other event listing also reads from.
const pastEventItemsWithoutImageOrCta = pastEventItemsList.map((eventItem, index) =>
    cloneElement(eventItem, {
        key: index,
        image: undefined,
        c2a: undefined,
        c2aLink: undefined,
    })
);

const PastEvents = () => {
    return (
        <div className='tidepool-theme'>
            <TitleBanner
                bannerText="PAST EVENTS"
                cornerNav={true}
                subText={(<p style={{textAlign: 'center'}}><a href='https://forms.gle/Dr1PLVPzeULtcBGa8' target='_blank' rel='noreferrer'>Newsletter Sign-up</a></p>)}
            />
            <EventsList events={pastEventItemsWithoutImageOrCta} />
            <Students theme='dark' />
            <Footer theme='light' />
        </div>
    );
}

export default PastEvents;
