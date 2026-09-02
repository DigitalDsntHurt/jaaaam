import { buildEventItemsList } from './siteCopyUtilities';

const upcomingEvents = [
    {
        title: (
            <>
                Contact Improvisation : Pre-Jam class @ The Castro Room in San Francisco
            </>
        ),
        description: (
            <>
                <h4>
                    Contact Improvisation class before the bi-monthly SF Jam.
                    <br />
                    <br />
                    September 21
                    <br />
                    7:45pm (followed by the Jam from 9:15pm - 10:45pm)
                    <br />
                    <a href='https://maps.app.goo.gl/mjw5aFaQ6aY16TW96' target='_blank' rel='noreferrer'>@ The Castro Room in San Francisco</a>
                </h4>
                <p>
                    Co-taught with Ava Maag, we will get into our recent co-creations investigating the skin, improvisation and skills for Contact Improvisation jamming.
                </p>
            </>
        ),
        image: './images/ava_base.jpg',
        c2a: 'Dance with us in SF',
        c2aLink: 'https://merrickjacob.com/contact-improvisation',
    },
    {
        title: (
            <>
                Wednesday Morning Contemplative Dance Practice @ Bandaloop
            </>
        ),
        description: (
            <>
                <h4>
                    Weekly on Wednesdays
                    <br />
                    8:30am - 9:30am
                    <br />
                    <a href='https://www.google.com/maps/search/?api=1&query=BANDALOOP+Studios+1601+18th+St+Oakland+CA+94607' target='_blank' rel='noreferrer'>@ BANDALOOP Studios (Studio West) in Oakland</a>
                </h4>
                <p>
                    This facilitated 20/20/20 Contemplative Dance Practice consists of 20 minutes of seated meditation, 20 minutes of personal awareness practice, 20 minutes of open improvisation, followed by a short closing discussion.
                </p>
                <p>
                    Learn about CDP <a href='/what-is-cdp'>here</a>.
                </p>
            </>
        ),
        image: './images/bandaloop_cdp.jpeg',
        c2a: 'Register @ Bandaloop',
        c2aLink: 'https://momence.com/BANDALOOP-Studios/Contemplative-Dance-Practice/142015157',
    },
    {
        title: (
            <>
                Friday Morning Contemplative Dance Practice @ Finnish Hall
            </>
        ),
        description: (
            <>
                <h4>
                    Weekly on Fridays
                    <br />
                    9:30am - 11:00am
                    <br />
                    <a href='https://maps.app.goo.gl/MBSLK26ErYEs9wUg6' target='_blank' rel='noreferrer'>@ The Finnish Hall (Meeting Room Studio) in Berkeley</a>
                </h4>
                <p>
                    This unfacilitated 20/20/20 Contemplative Dance Practice group consists of 20 minutes of seated meditation, 20 minutes of personal awareness practice, 20 minutes of open improvisation, followed by a short closing discussion.
                </p>
                <p>
                    This is a practice group, not a class. There is space-holding and explanation of the form but little or no instruction.
                </p>
                <p>
                    Learn about CDP <a href='/what-is-cdp'>here</a>.
                </p>
            </>
        ),
        image: './images/finnish_hall_cdp_cropped.jpg',
        c2a: 'Details',
        c2aLink: '/cdp-friday-group',
    },
    {
        title: (
            <>
                Book a bodywork session
            </>
        ),
        description: (
            <>
                <p>
                    Hands-on corrective bodywork in the tradition of The Berry Method®, plus slower, feel-good massage for deep rest.
                </p>
            </>
        ),
        c2a: 'Learn more',
        c2aLink: '/bodywork',
    },
];

const upcomingEventItemsList = buildEventItemsList(upcomingEvents)
export default upcomingEventItemsList;
