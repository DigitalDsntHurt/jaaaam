import { buildEventItemsList } from './siteCopyUtilities';

const upcomingEvents = [
    {
        title: (
            <>
                Wednesday Contact Improvisation class in San Francisco
            </>
        ),
        description: (
            <>
                <h4>
                    I'll be facilitating the Contact Improvisation class before the bi-weekly Wednesday Jam on April 23
                    <br />
                    <br />
                    April 23, 2025
                    <br />
                    7:30pm - 9:00pm (followed by the Jam from 9:00pm - 10:30pm)
                    <br />
                    <a href='https://maps.app.goo.gl/BEk4akQv3r3YaRcR7' target='_blank' rel='noreferrer'>@ The Center, San Francisco</a>
                </h4>
                <p>
                    Join The Center SF for a playful evening of contact improvisation. Class will be from 7:30-9pm and then will flow directly into a jam until 10:30pm. In class, we’ll explore themes of weight-sharing, counterbalancing, signaling, listening, and everything in-between. The jam that follows is an opportunity to continue researching your movement & relational curiosities that sparked from class. First-timers and experienced dancers are all very welcome!
                </p>
            </>
        ),
        image: './images/ava_inverted_woods_trail.JPG',
        c2a: 'Get tickets from The Center SF',
        c2aLink: 'https://www.eventbrite.com/o/the-center-sf-3493443113',
    },
];

const upcomingEventItemsList = buildEventItemsList(upcomingEvents)
export default upcomingEventItemsList;