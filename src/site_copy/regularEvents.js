import { buildEventItemsList } from './siteCopyUtilities';

const regularEvents = [
    
    {
        title: (
            <>
                The Moving Stillness Lab: experiments in Meditation and Contact Improvisation
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
                    5:00pm - 6:30pm
                    <br />
                    <a href='https://berkeleyalembic.org/' target='_blank' rel='noreferrer'>@ The Berkeley Alembic</a>
                </h4>
                <p>
                    What happens when meditation meets movement? When stillness learns to dance?
                    Through mindfulness, loving-kindness and focused attention, meditation teaches us to know what is, as it is. 
                    Through improvisation, touch and listening, Contact Improvisation reveals how structure can emerge spontaneously from presence.
                    This is a lab—a space for experimentation without predetermined outcomes. Together, we'll explore what emerges when these practices meet.
                    Bring questions. Bring ideas. Bring presence. Let's discover how meditation begins to dance.
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
                Fluid Movement
            </>
        ),
        description: (
            <>
                <h4>
                    Weekly on Tuesdays
                    <br />
                    1:30 - 3:00pm
                    <br />
                    <a href='https://momence.com/u/athletic-playground-LXxZWs' target='_blank' rel='noreferrer'>@ The Athletic Playground</a>
                </h4>
                <p>
                    Contemplative movement and dance as a solo practice. Improvisation, attention, somatics.
                </p>
            </>
        ),
        image: './images/blur_at_the_center.png',
        c2a: 'Register @ The Athletic Playground',
        c2aLink: 'https://momence.com/u/athletic-playground-LXxZWs',
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
                    You don't need any prior experience; this class warmly welcomes both complete beginners and those with experience.
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
                    20/20/20 practice (20 minutes seated meditation, followed by 20 minutes of continued exploration, followed by 20 minutes of open improvisation) followed by optional time for discussion and togetherness.
                </p>
            </>
        ),
        image: './images/EmbodiedGroove.jpeg',
        c2a: 'Details',
        c2aLink: '/cdp-friday-group',
    },
];

const regularEventItemsList = buildEventItemsList(regularEvents)
export default regularEventItemsList;