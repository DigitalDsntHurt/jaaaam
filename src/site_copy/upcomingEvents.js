import { buildEventItemsList } from './siteCopyUtilities';

const upcomingEvents = [
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
        image: './images/wcciJAM2025PromoGraphic.jpg',
        c2a: 'Learn more & register for WCCIJam',
        c2aLink: 'https://www.wccijam.org/',
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