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
                    Date : August 31, 2025
                    <br />
                    Time : 11am - 1:30pm
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
                    For more about CDP and the workshop, click below.
                </p>
            </>
        ),
        image: './images/zev_at_nitas.png',
        c2a: 'Sign up',
        c2aLink: 'https://www.eventbrite.com/e/contemplative-dance-practice-a-movement-meditation-workshop-tickets-1468120791809?_eboga=undefined',
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
                    Date : September 21, 2025
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
                    For more about CDP and the workshop, click below.
                </p>
            </>
        ),
        image: './images/ava_one_foot_swing.JPG',
        c2a: 'Sign up coming soon',
        c2aLink: 'https://www.eventbrite.com/e/contemplative-dance-practice-a-movement-meditation-workshop-tickets-1564110770419',
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
                <p>
                    Email <a href='mailto:grapesdance@gamil.com'>grapesdance@gamil.com</a> to register.
                </p>
            </>
        ),
        image: './images/sabine_wild.png',
        c2a: 'All Details Here',
        c2aLink: 'https://www.facebook.com/events/s/anatomy-of-touch/749789107775527/?mibextid=Gg3lNB',
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
        image: './images/ava_water_lean.JPG',
        c2a: 'Sign up coming soon',
        c2aLink: '',
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