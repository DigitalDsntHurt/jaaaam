import { buildEventItemsList } from './siteCopyUtilities';

const upcomingEvents = [
    {
        title: (
            <>
                Thursday Contact Improvisation in Berkeley, CA
            </>
        ),
        description: (
            <>
                <h4>
                    I'll be facilitating the Contact Improvisation class before the weekly Thursday Jam on Thursday, May 29
                    <br />
                    <br />
                    May 29, 2025
                    <br />
                    7:00pm (followed by the Jam from 8pm - 11pm)
                    <br />
                    <a href='https://maps.app.goo.gl/MBSLK26ErYEs9wUg6' target='_blank' rel='noreferrer'>@ The Finnish Hall, Berkeley</a>
                </h4>
                <p>
                    Join us every Thursday at Berkeley’s historic Finnish Hall for the biggest contact improvisation jam in the Bay Area. Since 2013, we’ve been a vibrant, community-run space, where newcomers and experienced practitioners explore this dynamic movement form.
                </p>
                <p>
                    The class and Jam are by donation.
                </p>
            </>
        ),
        image: './images/bodies_gowns.jpg',
        c2a: 'Learn More About the Thursday CI Jam',
        c2aLink: 'https://thursdayjam.org/',
    },
    {
        title: (
            <>
                Contemplative Dance Practice: A Movement & Meditation Workshop in Berkeley, CA
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
                Contemplative Dance Practice @ the West Coast Contact Improvisation Jam 2025
            </>
        ),
        description: (
            <>
                <h4>
                    Festical Dates : July 2 - July 6, 2025
                    <br />
                    <a href='https://maps.app.goo.gl/MBSLK26ErYEs9wUg6' target='_blank' rel='noreferrer'>@ The Finnish Hall, Berkeley</a>
                </h4>
                <p>
                    I will be facilitating Contemplative Dance Practice at this year's wcciJAM 2025.
                </p>
                <p>
                    West Coast Contact Improvisation (WCCI) Jam is organized for and by the SF Bay Area Contact Improvisation community.
                </p>
                <p>
                    Contemplative Dance Practice (CDP) blends movement, meditation and improvisation to cultivate awareness, connection and self-discovery.
                </p>
            </>
        ),
        image: './images/enzo_cushion.png',
        c2a: 'Learn more & register for WCCIJam',
        c2aLink: 'https://www.wccijam.org/',
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