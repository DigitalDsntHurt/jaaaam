import { buildEventItemsList } from './siteCopyUtilities';

const upcomingEvents = [
    {
        title: (
            <>
                Contemplative Movement : A Six-Week Walking Meditation Series in Berkeley, CA
            </>
        ),
        description: (
            <>
            <h4>
                    Dates : Sep 22, Sep 29, Oct 6, Oct 13, Oct 20, Oct 27, 2025
                    <br />
                    Time : 7:15pm - 8:15pm
                    <br />
                    <a href='https://www.eventbrite.com/cc/contemplative-movement-walking-centered-practice-4605883' target='_blank' rel='noreferrer'>@ The Berkeley Alembic</a>
                </h4>
                <p>
                    Explore contemplative walking in this 6-week series : mindfulness in motion blending somatics, anatomy & meditative presence.
                </p>
            </>
        ),
        image: './images/feet_and_rears.jpg',
        c2a: 'Series Details + Registration',
        c2aLink: 'https://www.eventbrite.com/cc/contemplative-movement-walking-centered-practice-4605883',
    },
    {
        title: (
            <>
                Anatomy of Touch Workshop with Sabine Parzer in Berkeley, CA
            </>
        ),
        description: (
            <>
                <h4>
                    Weekend workshop : Oct 18, 2025 - Oct 19, 2025
                    <br />
                    5-day workshop : Oct 18, 2025 - Oct 22, 2025
                    <br />
                    <a href='https://maps.app.goo.gl/PiWa1JcsnmUnoPhs6' target='_blank' rel='noreferrer'>@ The Finnish Hall</a>
                </h4>
                <p>
                    In October in Berkeley I will be hosting a phenomenal teacher of Holistic Dance. Sabine Parzer, who is based in Austria, has been teaching dance with an emphasis on beautiful living and the rich possibilities of healing for over 30 years.
                </p>
                <p>
                    This Anatomy of Touch workshop is available as a two-day workshop (October 18 - 19) or as a five-day workshop (October 18 - 22) at The Finnish Hall in Berkeley. I am  excited for this and I hope you will join.
                </p>
            </>
        ),
        image: './images/sabine_wild.png',
        c2a: 'Details + Registration Here',
        c2aLink: 'https://forms.gle/9gkhWuwdN7qfNRNo8',
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
                    Date : Oct 26, 2025
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
                <p>
                    Signup link coming soon.
                </p>
            </>
        ),
        image: './images/zev_at_nitas.png',
        c2a: 'Details + Registration',
        c2aLink: 'https://www.eventbrite.com/e/contemplative-dance-practice-a-movement-meditation-workshop-tickets-1633140590469?aff=odcleoeventsincollection',
    },
    {
        title: (
            <>
                Contact Improvisation
            </>
        ),
        description: (
            <>
                <p>
                    Regular and ad-hoc Contact Improvisation classes, workshops, warm-ups, series and gatherings.
                </p>
                <p>
                    Click below for upcoming Contact Improvisation dates.
                </p>
            </>
        ),
        image: './images/blur_at_the_center.png',
        c2a: 'All Contact Improvisation Dates',
        c2aLink: '/contact-improvisation',
    },
    {
        title: (
            <>
                Deeper Practice : Rope Flow in Alameda, CA
            </>
        ),
        description: (
            <>
                <h4>
                    Thursday Evenings
                    <br />
                    Four sessions : 
                        <span style={{fontWeight: 200, letterSpacing: "0.2px"}}>
                            {' '}<a href='https://momence.com/Breathing-Room/Deeper-Practice%3A-Rope-Flow/122237975?skipPreview=true' target="_blank" rel="noreferrer">Oct 9</a>,
                            {' '}<a href='https://momence.com/Breathing-Room/Deeper-Practice%3A-Rope-Flow/122237979?skipPreview=true' target="_blank" rel="noreferrer">Oct 16</a>,
                            {' '}<a href='https://momence.com/Breathing-Room/Deeper-Practice%3A-Rope-Flow/122237981?skipPreview=true' target="_blank" rel="noreferrer">Nov 13</a>,
                            {' '}<a href='https://momence.com/Breathing-Room/Deeper-Practice%3A-Rope-Flow/122238417?skipPreview=true' target="_blank" rel="noreferrer">Nov 20</a>
                        </span>
                    <br />
                    Time : 6:30pm - 7:45pm
                    <br />
                    <a href='https://maps.app.goo.gl/cgQ8ybDXApvEepUT9' target='_blank' rel='noreferrer'>@ Breathing Room in Alameda, CA</a>
                </h4>
                <p>
                    Rope Flow is a fun, low-impact movement practice using a rope to create continuous, flowing patterns around your body.
                </p>
                <p>
                    No experience necessary.
                </p>
            </>
        ),
        image: './images/rope_flow_hop.jpg',
        c2a: 'Details + Registration',
        c2aLink: '/https://momence.com/Breathing-Room/Deeper-Practice%3A-Rope-Flow/122237975?skipPreview=true',
    },
    // {
    //     title: (
    //         <>
    //             COMING SOON: Alone & in relation: moving with, against & without a partner
    //         </>
    //     ),
    //     description: (
    //         <>
    //             <h4>
    //                 Date : TBD
    //                 <br />
    //                 Time : TBD
    //                 <br />
    //                 Location : TBD
    //             </h4>
    //             <p>
    //                 Co-taught with Elliott Cohen, this workshop is a playful exlporation of three modes of relational movement and the deep values associated with each.
    //             </p>
    //             <p>
    //                 Click below to know when details are confirmed.
    //             </p>
    //         </>
    //     ),
    //     image: './images/ava_horizontal_pole.JPG',
    //     c2a: 'Sign up to be notified when details are confirmed',
    //     c2aLink: 'https://forms.gle/QrvDBXj4VGGxi3x57',
    // },
];

const upcomingEventItemsList = buildEventItemsList(upcomingEvents)
export default upcomingEventItemsList;