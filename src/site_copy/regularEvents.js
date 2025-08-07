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
        image: './images/ava_bases_handstand_crescent.JPG',
        c2a: 'Sign up @ The Athletic Playground',
        c2aLink: 'https://momence.com/u/athletic-playground-LXxZWs',
    },
];

const regularEventItemsList = buildEventItemsList(regularEvents)
export default regularEventItemsList;