import { buildEventItemsList } from './siteCopyUtilities';

const pastEvents = [
    {
        title: (
            <>
                Contemplative Dance Practice: A Movement & Meditation Workshop
            </>
        ),
        description: (
            <>
                <h4>
                    March 15, 2025
                    <br />
                    3pm - 5pm
                    <br />
                    <a href='https://berkeleyalembic.org/' target='_blank' rel='noreferrer'>@ The Berkeley Alembic</a>
                </h4>
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
        c2a: 'Sign up + more info',
        c2aLink: 'https://www.eventbrite.com/e/contemplative-dance-practice-a-movement-meditation-workshop-tickets-1249815785659',
    },
    {
        title: (
            <>
                March Thursday Contact Improvisation class in Berkeley
            </>
        ),
        description: (
            <>
                <h4>
                    I'll be facilitating the Contact Improvisation class before the weekly Thursday Jam on Thursday, March 13
                    <br />
                    <br />
                    March 13, 2025
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
        image: './images/ava_bases_handstand_crescent.JPG',
        c2a: 'Learn More About the Thursday CI Jam',
        c2aLink: 'https://thursdayjam.org/',
    },
    {
        title: (
            <>
                February Thursday Contact Improvisation class in Berkeley
            </>
        ),
        description: (
            <>
                <h4>
                    I'll be facilitating the Contact Improvisation class before the weekly Thursday Jam on Thursday, February 20
                    <br />
                    <br />
                    February 20
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
        image: './images/ava_base.jpg',
        c2a: 'Learn More About the Thursday CI Jam',
        c2aLink: 'https://thursdayjam.org/',
    },
    {
        title: (
            <>
                DANCE LOVERS
            </>
        ),
        description: (
            <>
                <h4>
                    A performance of duets by couples, crushes and comrades
                    <br />
                    <br />
                    February 13, 14, 15, 2025
                    <br />
                    7:30pm
                    <br />
                    <a href='https://maps.app.goo.gl/rXWtXSB4CMZ2tWw49' target='_blank' rel='noreferrer'>@ Joe Goode Annex, San Francisco</a>
                </h4>
                <p>
                    Dance Lovers is an annual performance event held in San Francisco around Valentine’s Day. Bear Graham produces and curates DANCE LOVERS…duets by couples, crushes, and comrades. Graham invites artists with diverse pairings (friends, lovers, family members) to present duets in their unique styles/genres. The event began in 2011 at what was then called Kunst-Stoff Arts, and has also been presented at CounterPULSE and the Joe Goode Annex (our current “home”).
                </p>
            </>
        ),
        image: './images/DANCELOVERS2025.jpg',
        c2a: 'Reserve Tickets!',
        c2aLink: 'https://jgpg.my.salesforce-sites.com/ticket/#/events/a0SVI0000044tZt2AI',
    },
    {
        title: (
            <>
                Embodied Groove (Morning Dance Party)
            </>
        ),
        description: (
            <>
                <h4>
                    Weekly Every Thursday
                    <br />
                    7:15 - 8:15am
                    <br />
                    <a href='https://momence.com/u/athletic-playground-LXxZWs' target='_blank' rel='noreferrer'>@ The Athletic Playground</a>
                </h4>
                <p>
                    Unlock your energy and reconnect to yourself in this fun and dynamic movement class. Through guided improvisation, functional exercises and somatic techniques, we’ll explore playful and intentional ways to recharge body and mind.
                </p>
                <p>
                    This welcoming class is perfect for all levels and ages, offering a supportive space to move freely, relieve stress and feel alive. Whether you’re looking to improve your well-being, tap into your creativity or just have fun, this class will leave you feeling refreshed and revitalized.
                </p>
                <p>
                    Join us and explore the joys of movement.
                </p>
            </>
        ),
        image: './images/EmbodiedGroove.jpeg',
        c2a: 'Sign up @ The Athletic Playground',
        c2aLink: 'https://momence.com/u/athletic-playground-LXxZWs',
    },
    {
        title: (
            <>
                Healthy Holidays for Families Workshops
                <br />
                @ The Dogpatch Hub
            </>
        ),
        description: (
            <>
                <h4>
                    Two dates :
                    <br />
                    - Saturday, November 16, 2024 @ 3:00 - 4:30pm
                    <br />
                    - Saturday, December 14, 2024 @ 3:00 - 4:30pm
                    <br />
                    <a href='https://maps.app.goo.gl/WJLeDdH9Z6QLgKY38' target='_blank' rel='noreferrer'>@ The Dogpatch Hub</a>
                </h4>
                <p>
                    Healthy Holidays offers a fun and playful set of physical and relational practices to help folks prepare to thrive (not just survive) through the holiday season. Through explorations of physical movements, physical and attentional games and safe, respectful and gentle touch, we will practice resourcing and regulating ourselves and our loved ones.
                </p>
                <p>
                    <b>For</b>: All ages, experience, and skill levels!
                    <br />
                    <b>Intensity</b>: Medium-low. Expect to sweat a little.
                    <br />
                    <b>What to wear</b>: Soft, comfortable workout clothes.
                    <br />
                    <b>Bring</b>: A water bottle. Refill station on-site
                </p>
            </>
        ),
        image: './images/families.png',
        c2a: 'Sign up @ The Hub',
        c2aLink: 'https://thedogpatchhub.getomnify.com/categories/movement?services=4&staff=&cfilters=',
    },
    {
        title: (
            <>
                Healthy Holidays for Couples Workshops
                <br />
                @ The Dogpatch Hub
            </>
        ),
        description: (
            <>
                <h4>
                    Two dates :
                    <br />
                    - Friday, December 6, 2024 @ 7:00 - 8:30pm
                    <br />
                    - Saturday, December 13, 2024 @ 7:00 - 8:30pm
                    <br />
                    <a href='https://maps.app.goo.gl/WJLeDdH9Z6QLgKY38' target='_blank' rel='noreferrer'>@ The Dogpatch Hub</a>
                </h4>
                <p>
                    Healthy Holidays offers a fun and playful set of physical and relational practices to help folks prepare to thrive (not just survive) through the holiday season. Through explorations of physical movements, physical and attentional games and safe, respectful and gentle touch, we will practice resourcing and regulating ourselves and our loved ones.
                </p>
                <p>
                    <b>For</b>: All couples, experience, and skill levels!
                    <br />
                    <b>Intensity</b>: Medium-low. Expect to sweat a little.
                    <br />
                    <b>What to wear</b>: Soft, comfortable workout clothes.
                    <br />
                    <b>Bring</b>: A water bottle. Refill station on-site
                </p>
            </>
        ),
        image: './images/couples.png',
        c2a: 'Sign up @ The Hub',
        c2aLink: 'https://thedogpatchhub.getomnify.com/categories/movement?services=4&staff=&cfilters=',
    },
    {
        title: (
            <>
                Monday Community Class @ Crane Cove Park
            </>
        ),
        description: (
            <>
                <h4>
                    Weekly Every Monday
                    <br />
                    7:30 - 8:30am
                    <br />
                    <a href='https://maps.app.goo.gl/SzD6powfenukDuyq6' target='_blank' rel='noreferrer'>@ Crane Cove Park</a>
                </h4>
                <p>
                    A weekly class for movers of all ages, skill levels and body types.
                </p>
                <p>
                    Community Classes encourage attending to your own body and heart while strengthening neighborhood communty and connecting to a sense of place.
                </p>
                <p>
                    These classes explore mindfulness prompts, exploratory movement flows, movement games and functional movement patterns in a unique, creative and gentle style.
                </p>
            </>
        ),
        image: './images/bridge_at_chase.png',
        c2a: 'More info',
        c2aLink: '/community-classes',
    },
    {
        title: (
            <>
                Friday Community Class @ Holly Park
            </>
        ),
        description: (
            <>
                <h4>
                    Weekly Every Friday
                    <br />
                    6:30 - 7:30am
                    <br />
                    <a href='https://maps.app.goo.gl/vtCBtioTxic36dLs9' target='_blank' rel='noreferrer'>@ Holly Park Playground</a>
                </h4>
                <p>
                    A weekly class for movers of all ages, skill levels and body types.
                </p>
                <p>
                    Community Classes encourage attending to your own body and heart while strengthening neighborhood communty and connecting to a sense of place.
                </p>
                <p>
                    These classes explore mindfulness prompts, exploratory movement flows, movement games and functional movement patterns in a unique, creative and gentle style.
                </p>
            </>
        ),
        image: './images/holly_park.png',
        c2a: 'More info',
        c2aLink: '/community-classes',
    }
];

const pastEventItemsList = buildEventItemsList(pastEvents)
export default pastEventItemsList;