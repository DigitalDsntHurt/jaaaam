import { buildEventItemsList } from './siteCopyUtilities';

const upcomingEvents = [
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
                    Friday, November 14
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
                Friday Contact Improvisation @ The Athletic Playground
            </>
        ),
        description: (
            <>
                <h4>
                    Friday, November 21
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
];

const upcomingEventItemsList = buildEventItemsList(upcomingEvents)
export default upcomingEventItemsList;