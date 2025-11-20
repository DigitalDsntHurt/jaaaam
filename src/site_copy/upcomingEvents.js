import { buildEventItemsList } from './siteCopyUtilities';

const upcomingEvents = [
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
                            {' '}<a href='https://momence.com/Breathing-Room/Deeper-Practice%3A-Rope-Flow/122237981?skipPreview=true' target="_blank" rel="noreferrer"><del>Nov 13</del></a>,
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
        c2aLink: 'https://momence.com/Breathing-Room/Deeper-Practice%3A-Rope-Flow/122237981?skipPreview=true',
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
];

const upcomingEventItemsList = buildEventItemsList(upcomingEvents)
export default upcomingEventItemsList;