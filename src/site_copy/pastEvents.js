import { buildEventItemsList } from './siteCopyUtilities';

const pastEvents = [
    {
        title: (
            <>
                Morning Rope Flow @ Alameda Beach
            </>
        ),
        description: (
            <>
                <h4>
                    Wednesday mornings
                    <br />
                    Six week series : <span style={{fontWeight: 200, letterSpacing: "0.2px"}}>Aug 20, Aug 27, Sep 3, Sep 10, Sep 17, Sep 24</span>
                    <br />
                    Time : 8:00am - 9:00am
                    <br />
                    <a href='https://maps.app.goo.gl/Kj8qqGqpr4he7k7G8' target='_blank' rel='noreferrer'>Sand Castle Picnic Area @ Alameda Beach</a>
                </h4>
                <p>
                    Rope Flow is a fun, low-impact movement practice using a rope to create continuous, flowing patterns around your body.
                </p>
            </>
        ),
        image: './images/rope-flow.png',
        c2a: 'Full Series Details',
        c2aLink: '/rope-flow',
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
        c2a: 'Sign up',
        c2aLink: 'https://www.eventbrite.com/e/contemplative-dance-practice-a-movement-meditation-workshop-tickets-1564110770419',
    },
    {
        title: (
            <>
                Friday Contact Improvisation @ The Athletic Playground
            </>
        ),
        description: (
            <>
                <h4>
                    Friday, September 19
                    <br />
                    12:15pm - 1:45pm
                    <br />
                    <a href='https://www.tapgym.com/schedule/adults' target='_blank' rel='noreferrer'>@ The Athletic Playground</a> (<a href='https://maps.app.goo.gl/5c65DNthApxKh9mG9' target='_blank' rel='noreferrer'>in Emeryville</a>)
                </h4>
                <p>
                    You don't need any prior experience; this class warmly welcomes both complete beginners and those with experience.
                </p>
            </>
        ),
        image: './images/shira-ci.png',
        c2a: 'Sign Up',
        c2aLink: 'https://www.tapgym.com/schedule/adults',
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
                Friday Contact Improvisation @ The Athletic Playground
            </>
        ),
        description: (
            <>
                <h4>
                    Friday, August 29
                    <br />
                    12:15pm - 1:45pm
                    <br />
                    <a href='https://www.tapgym.com/schedule/adults' target='_blank' rel='noreferrer'>@ The Athletic Playground</a> (<a href='https://maps.app.goo.gl/5c65DNthApxKh9mG9' target='_blank' rel='noreferrer'>in Emeryville</a>)
                </h4>
                <p>
                    You don't need any prior experience; this class warmly welcomes both complete beginners and those with experience.
                </p>
            </>
        ),
        image: './images/shira-ci.png',
        c2a: 'Sign Up',
        c2aLink: 'https://www.tapgym.com/schedule/adults',
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
                    Festival Dates : July 2 - July 6, 2025
                    <br />
                    <a href='https://maps.app.goo.gl/MBSLK26ErYEs9wUg6' target='_blank' rel='noreferrer'>@ The Finnish Hall, Berkeley</a>
                </h4>
                <p>
                    Contemplative Dance Practice at this year's wcciJAM 2025.
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
    {
        title: (
            <>
                Movement Improvisation
            </>
        ),
        description: (
            <>
                <h4>
                    Weekly Every Thursday (September 2024 - June 2025)
                    <br />
                    12:00 - 1:00pm
                    <br />
                    <a href='https://momence.com/u/athletic-playground-LXxZWs' target='_blank' rel='noreferrer'>@ The Athletic Playground</a>
                </h4>
                <p>
                    The exploration and practice of improvisational movement trains fun, fitness, attention and somatic awareness. It’s a valuable tool to accelerate your learning and mastery of other movement (& non-movement) disciplines. Improvisation is also a powerful tool for developing self practices you love and that serve your long- and short-term artistic, health and longevity goals.
                </p>
                <p>
                    In this class we practice listening deeply to our bodies and to the underlying movement patterns themselves in order to discover and unleash spontaneity, power and flow.
                </p>
                <p>
                    All bodies, skill and experience levels welcome.
                </p>
            </>
        ),
        image: './images/backbend_hair_color.png',
        c2a: 'Sign up @ The Athletic Playground',
        c2aLink: 'https://momence.com/u/athletic-playground-LXxZWs',
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
                Movement and Parkour for Families, Ages 5+ (January 2025 - June 2025)
            </>
        ),
        description: (
            <>
                <h4>
                    Weekly Every Saturday
                    <br />
                    12:45 - 2:00pm
                    <br />
                    <a href='https://momence.com/u/athletic-playground-LXxZWs' target='_blank' rel='noreferrer'>@ The Athletic Playground</a>
                </h4>
                <p>
                    Built for the whole family, this intergenerational class offers a space for families to have safe, healthy fun together through explorations of parkour, acrobatics, physical movement and relational games.
                </p>
                <p>
                    All skill levels welcome.
                </p>
            </>
        ),
        image: './images/families_sketch.png',
        c2a: 'Sign up @ The Athletic Playground',
        c2aLink: 'https://momence.com/u/athletic-playground-LXxZWs',
    },
    {
        title: (
            <>
                Contact Improvisation : pre-Thursday Jam class in Berkeley
            </>
        ),
        description: (
            <>
                <h4>
                    Contact Improvisation class before the weekly Thursday Jam on Thursday, May 29.
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
                Contact Improvisation : pre-Sunday Contact Improvisation Jam in Point Reyes Station, CA
            </>
        ),
        description: (
            <>
                <h4>
                    Contact Improvisation warmup before the monthly West Marin Contact Improvistaion Jam in Point Reyes, CA on May 4.
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
                The Feel Good (March 2025 - June 2025)
            </>
        ),
        description: (
            <>
                <h4>
                    Weekly Every Friday
                    <br />
                    11:15am - 12:15pm
                    <br />
                    <a href='https://momence.com/u/athletic-playground-LXxZWs' target='_blank' rel='noreferrer'>@ The Athletic Playground</a>
                </h4>
                <p>
                    Feeling good in our bodies is a learnable skill.
                </p>
                <p>
                    The Feel Good is a space to practice deep listening — to ourselves, to others, to the larger and smaller universes of this moment. Sometimes we need to sweat and lose our breath to feel good. Other times we are called to roll around the floor or simply lie still.
                </p>
                <p>
                    Through guided and improvisational movement, somatic modalities, contact and non-contact partnering, body work and play we will become craftspeople of our own bodies: attuning and responding to what we find.
                </p>
                <p>
                    Come together and practice feeling good.
                </p>
            </>
        ),
        image: './images/blissed.jpg',
        c2a: 'Sign up @ The Athletic Playground',
        c2aLink: 'https://momence.com/u/athletic-playground-LXxZWs',
    },
    {
        title: (
            <>
                Contact Improvisation : pre-Wednesday Jam class in San Francisco
            </>
        ),
        description: (
            <>
                <h4>
                    Contact Improvisation class before the bi-weekly Wednesday Jam on April 23.
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
                Morning Dance Party (Jan 2025 - April 2025)
            </>
        ),
        description: (
            <>
                <h4>
                    Weekly Every Tuesday
                    <br />
                    7:15 - 8:15am
                    <br />
                    <a href='https://momence.com/u/athletic-playground-LXxZWs' target='_blank' rel='noreferrer'>@ The Athletic Playground</a>
                </h4>
                <p>
                    Start your day with a dynamic workout blending strength, mobility, floor work, soft acrobatics and vinyasa-inspired flows. Designed for all levels and ages, this class boosts energy, builds confidence and enhances flexibility in a fun, supportive environment.
                </p>
                <p>
                    Wake up, sweat and flow yourself into an epic day.
                </p>
            </>
        ),
        image: './images/WakeShakeMorningDanceParty.png',
        c2a: 'Sign up @ The Athletic Playground',
        c2aLink: 'https://momence.com/u/athletic-playground-LXxZWs',
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
                Contact Improvisation : pre-Thursday Jam class in Berkeley
            </>
        ),
        description: (
            <>
                <h4>
                    Contact Improvisation class before the weekly Thursday Jam on Thursday, March 13.
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
                Contact Improvisation : pre-Thursday Jam class in Berkeley
            </>
        ),
        description: (
            <>
                <h4>
                    Contact Improvisation class before the weekly Thursday Jam on Thursday, February 20.
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
                Embodied Groove (Jan 2025 - March 2025)
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
                Monday Community Class @ Crane Cove Park (Sep 2024 - Jan 2025)
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
                Friday Community Class @ Holly Park (Oct 2023 - Jan 2025)
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