import { buildEventItemsList } from './siteCopyUtilities';

const regularEvents = [
    {
        title: (
            <>
                Fluid Movement
            </>
        ),
        description: (
            <>
                <h4>
                    Weekly Every Tuesday
                    <br />
                    1:15 - 2:45pm
                    <br />
                    <a href='https://momence.com/u/athletic-playground-LXxZWs' target='_blank' rel='noreferrer'>@ The Athletic Playground</a>
                </h4>
                <p>
                    In this class, we treat movement fluidity as a learnable skill and explore how we can move efficiently, safely and beautifully over the course of a long life.
                </p>
                <p>
                    Fluid movement can help us learn faster, exert less, prevent and recover from injury, have more fun and impress our friends.{' '}
                    We will learn what fluid, efficient movement is and how to practice it by studying four structural elements:
                    <br />
                    <br />
                    <li>Our relationship with the ground and with gravity</li>
                    <li>A balanced pelvis</li>
                    <li>An available spine</li>
                    <li>A floating head</li>
                </p>
                <p>
                    There will be material from soft acrobatics, hand balancing, aerials, floor work and other disciplines.
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
                Movement Improvisation
            </>
        ),
        description: (
            <>
                <h4>
                    Weekly Every Thursday
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
        image: './images/gourd_head_balance.png',
        c2a: 'Sign up @ The Athletic Playground',
        c2aLink: 'https://momence.com/u/athletic-playground-LXxZWs',
    },
    {
        title: (
            <>
                The Feel Good
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
                Movement and Parkour for Families (Ages 5+)
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
];

const regularEventItemsList = buildEventItemsList(regularEvents)
export default regularEventItemsList;