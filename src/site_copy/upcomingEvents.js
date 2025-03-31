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
    {
        title: (
            <>
                COMING SOON: Contemplative Dance Practice: A Movement & Meditation Workshop
            </>
        ),
        description: (
            <>
                <h4>
                    Date : TBD
                    <br />
                    Time : TBD
                    <br />
                    <a href='https://berkeleyalembic.org/' target='_blank' rel='noreferrer'>@ The Berkeley Alembic</a>
                </h4>
                <p>
                    We had so much fun at the last workhop we're working out the details to do it again. Sign up below to find out when.
                </p>
                <p>
                    Contemplative Dance Practice (CDP) blends movement, meditation and improvisation to cultivate awareness, connection and self-discovery.
                </p>
                <p>
                    This workshop is an introduction to CDP, appropriate for all bodies - no prior experience with dance or meditation is needed.
                </p>
                <p>
                    For more about CDP and the workshop, click below.
                </p>
            </>
        ),
        image: './images/zev_at_nitas.png',
        c2a: 'Sign up to be notified when details are confirmed',
        c2aLink: 'https://forms.gle/QrvDBXj4VGGxi3x57',
    },
    {
        title: (
            <>
                COMING SOON: Alone & in relation: moving with, against & without a partner
            </>
        ),
        description: (
            <>
                <h4>
                    Date : TBD
                    <br />
                    Time : TBD
                    <br />
                    Location : TBD
                </h4>
                <p>
                    Co-taught with Elliott Cohen, this workshop is a playful exlporation of three modes of relational movement and the deep values associated with each.
                </p>
                <p>
                    Click below to know when details are confirmed.
                </p>
            </>
        ),
        image: './images/ava_horizontal_pole.JPG',
        c2a: 'Sign up to be notified when details are confirmed',
        c2aLink: 'https://forms.gle/QrvDBXj4VGGxi3x57',
    },
];

const upcomingEventItemsList = buildEventItemsList(upcomingEvents)
export default upcomingEventItemsList;