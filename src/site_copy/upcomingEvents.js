import { buildEventItemsList } from './siteCopyUtilities';

const upcomingEvents = [
    {
        title: (
            <>
                Contemplative Dance Practice: A Movement & Meditation Workshop
            </>
        ),
        description: (
            <>
                <h4>
                    Date : Jan 25, 2026
                    <br />
                    Time : 11am - 2pm
                    <br />
                    <a href='https://berkeleyalembic.org/' target='_blank' rel='noreferrer'>@ The Berkeley Alembic</a>
                </h4>
                <p>
                    Contemplative Dance Practice (CDP) blends movement, meditation and improvisation to cultivate awareness, connection and discovery of self and other.
                </p>
                <p>
                    This workshop is an introduction to CDP, appropriate for all bodies - no prior experience with dance or meditation is needed.
                </p>
            </>
        ),
        image: './images/zev_at_nitas.png',
        c2a: 'Details + Registration',
        c2aLink: 'https://momence.com/Berkeley-Alembic/Contemplative-Dance-Practice%3A-A-Movement-%26-Meditation-Workshop-with-Nick-Smith-/128339239?skipPreview=true',
    },
    {
        title: (
            <>
                Meditation and Contact Improvisation Lab
            </>
        ),
        description: (
            <>
                <h4>
                    Co-facilitated by Amma Thanasanti & Nick Smith
                    <br />
                    <br />
                    Weekly on Mondays
                    <br />
                    6:00pm - 8:00pm
                    <br />
                    <a href='https://berkeleyalembic.org/' target='_blank' rel='noreferrer'>@ The Berkeley Alembic</a>
                </h4>
                <p>
                    In this lab we dive deep into research and experimentation about how meditation can help our Contact Improvisation practice and how Contact Improvisation can help our meditation practice.
                    This is a lab — a space for experimentation without predetermined outcomes.
                    Bring questions.
                </p>
            </>
        ),
        image: './images/amma-nick.png',
        c2a: 'Register @ The Alembic',
        c2aLink: 'https://www.berkeleyalembic.org/events',
    },
    {
        title: (
            <>
                Contact Improvisation
            </>
        ),
        description: (
            <>
                <h4>
                    Weekly on Wednesdays
                    <br />
                    8:30pm - 9:30pm
                    <br />
                    <a href='https://momence.com/u/athletic-playground-LXxZWs' target='_blank' rel='noreferrer'>@ The Athletic Playground</a>
                </h4>
                <p>
                    You don't need any prior experience; this class warmly welcomes both complete beginners and those with experience in the form of Contact Improvisation. After this 60 minute class, there is optional spacetime for jamming, labbing and continued exploration and togetherness.
                </p>
            </>
        ),
        image: './images/ava_base.jpg',
        c2a: 'Register @ The Athletic Playground',
        c2aLink: 'https://momence.com/u/athletic-playground-LXxZWs',
    },
    {
        title: (
            <>
                Contemplative Dance Practice Group
            </>
        ),
        description: (
            <>
                <h4>
                    Weekly on Fridays
                    <br />
                    9:30am - 11:00am
                    <br />
                    <a href='https://maps.app.goo.gl/MBSLK26ErYEs9wUg6' target='_blank' rel='noreferrer'>@ The Finnish Hall in Berkeley</a>
                </h4>
                <p>
                    20/20/20 practice (20 minutes seated meditation, followed by 20 minutes of personal practice, followed by 20 minutes of open improvisation) followed by time for discussion and togetherness.
                </p>
                <p>
                    This is a practice group, not a class. There is space-holding but little to no facilitation or instruction.
                </p>
            </>
        ),
        image: './images/EmbodiedGroove.jpeg',
        c2a: 'Details',
        c2aLink: '/cdp-friday-group',
    },
];

const upcomingEventItemsList = buildEventItemsList(upcomingEvents)
export default upcomingEventItemsList;