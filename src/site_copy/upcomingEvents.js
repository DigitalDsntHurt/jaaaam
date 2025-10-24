import { buildEventItemsList } from './siteCopyUtilities';

const upcomingEvents = [
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
                            {' '}<a href='https://momence.com/Breathing-Room/Deeper-Practice%3A-Rope-Flow/122237975?skipPreview=true' target="_blank" rel="noreferrer"><del>Oct 9</del></a>,
                            {' '}<a href='https://momence.com/Breathing-Room/Deeper-Practice%3A-Rope-Flow/122237979?skipPreview=true' target="_blank" rel="noreferrer"><del>Oct 16</del></a>,
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
        c2aLink: 'https://momence.com/Breathing-Room/Deeper-Practice%3A-Rope-Flow/122237975?skipPreview=true',
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