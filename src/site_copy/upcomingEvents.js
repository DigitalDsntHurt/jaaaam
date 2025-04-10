import { buildEventItemsList } from './siteCopyUtilities';

const upcomingEvents = [
    {
        title: (
            <>
                Wednesday Contact Improvisation in San Francisco
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
                Sunday Contact Improvisation in Point Reyes, CA
            </>
        ),
        description: (
            <>
                <h4>
                    I'll be facilitating the Contact Improvisation warmup before the monthly West Marin Contact Improvistaion Jam in Point Reyes, CA on May 4.
                    <br />
                    <br />
                    May 4, 2025
                    <br />
                    11:00am (followed by the Jam from 11:00am - 1:00pm)
                    <br />
                    <a href='https://maps.app.goo.gl/h92J9btWSarSkEX89' target='_blank' rel='noreferrer'>@ The Dance Palace, Point Reyes Station</a>
                </h4>
                <p>
                    The class and jam are by donation and do not require advanced signup or ticketing.
                </p>
            </>
        ),
        image: './images/ava_bases_handstand_crescent.JPG',
        c2a: 'More info',
        c2aLink: 'https://dancepalace.org/event/west-marin-improvisational-contact-jam-2023-01-08-2023-02-05/2024-07-07/',
    },
    {
        title: (
            <>
                Contemplative Dance Practice: A Movement & Meditation Workshop
            </>
        ),
        description: (
            <>
                <h4>
                    Date : June 1, 2025
                    <br />
                    Time : 11am - 1:30pm
                    <br />
                    <a href='https://berkeleyalembic.org/' target='_blank' rel='noreferrer'>@ The Berkeley Alembic</a>
                </h4>
                <p>
                    We had so much fun at the last workhop we're hosting it again.
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
        c2a: 'Sign up',
        c2aLink: 'https://www.eventbrite.com/e/contemplative-dance-practice-a-movement-meditation-workshop-tickets-1319599430419?aff=oddtdtcreator',
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