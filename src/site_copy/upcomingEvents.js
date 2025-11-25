import { buildEventItemsList } from './siteCopyUtilities';

const upcomingEvents = [
    {
        title: (
            <>
                Thanksgiving Week Offerings
            </>
        ),
        description: (
            <>
                <p></p>
            </>
        ),
        image: './images/Thanksgiving Week 2025 Flyer.png',
        c2a: 'Nothing To Do. Nothing to Click.',
        c2aLink: '/',
    },
    {
        title: (
            <>
                Thanksgiving Morning CDP
            </>
        ),
        description: (
            <>
                <h4>
                    Thursday, November 27 @ 10:00am - 12:00pm
                    <br />
                    <a href='https://maps.app.goo.gl/2WK5u8MBd7sauMEXA' target='_blank' rel='noreferrer'>@ Joe Goode Annex</a> in San Francisco
                </h4>
                <p>
                    Contemplative Dance Practice (CDP) is seated meditation, followed by solo movement, followed by open improvisation. 
                </p>
                <p>
                    We will warm up and attune together for ~45 minutes. Then at ~10:45 we will begin the 20/20/20 CDP practice. We will end with optional sharing, reflections and togetherness. No need to register in advance. Suggested donation $4 - $44. NOTAFLOF.
                </p>
                <p>
                    All bodies welcome. 
                </p>
            </>
        ),
        image: './images/thanksgiving_CDP_2025.png',
        c2a: 'What is CDP?',
        c2aLink: '/what-is-cdp',
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
                    Friday, November 28
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
        c2aLink: 'https://momence.com/Athletic-Playground/Contact-Improvisation-(Adults-and-ages-14%2B)/121275031?skipPreview=true',
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
                    Date : Nov 30, 2025
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
        c2aLink: 'https://momence.com/71603/upcoming-events/125925745',
    },
    {
        title: (
            <>
                The Moving Stillness: A Workshop in Meditation and Contact Improvisation with Nick Smith and Amma Thanasanti
            </>
        ),
        description: (
            <>
                <h4>
                    Saturday, December 6
                    <br />
                    11:30am - 4:30pm
                    <br />
                    <a href='https://berkeleyalembic.org/' target='_blank' rel='noreferrer'>@ The Berkeley Alembic</a>
                </h4>
                <p>
                    What happens when meditation meets movement — when stillness learns to dance? Through mindfulness, loving-kindness, and focused attention, meditation teaches us to see clearly what is, as it is. Through movement, touch, and listening, Contact Improvisation reveals how structure can arise naturally from presence. In this workshop, co-facilitators Amma Thanasanti and Nick Smith invite participants into an embodied exploration of what unfolds when these two practices meet. Bring your curiosity, your breath, and your presence — let’s discover how meditation begins to dance.
                </p>
            </>
        ),
        image: './images/moving-stillness.jpeg',
        c2a: 'Info + Sign Up',
        c2aLink: 'https://momence.com/Berkeley-Alembic/The-Moving-Stillness%3A-A-Workshop-in-Meditation-and-Contact-Improvisation-with-Nick-Smith-and-Amma-Thanasanti/125692057?skipPreview=true',
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
                    Friday, December 12
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
        c2aLink: 'https://momence.com/Athletic-Playground/Contact-Improvisation-(Adults-and-ages-14%2B)/121275033?skipPreview=true',
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
                    Date : Dec 14, 2025
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
        c2aLink: 'https://momence.com/Berkeley-Alembic/Contemplative-Dance-Practice%3A-A-Movement-%26-Meditation-Workshop-with-Nick-Smith-/125925651?skipPreview=true',
    },
];

const upcomingEventItemsList = buildEventItemsList(upcomingEvents)
export default upcomingEventItemsList;