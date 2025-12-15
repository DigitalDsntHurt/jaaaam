import { buildEventItemsList } from './siteCopyUtilities';

const youthEvents = [
    {
        title: (
            <>
                Youth Parkour & Acrobatics 
            </>
        ),
        description: (
            <>
                <h4>
                    Weekly on Thursdays
                    <br />
                    Ages 1 - 4 @ 3:30pm - 4:30pm
                    <br />
                    Ages 5 - 8 @ 4:40pm - 5:40pm
                    <br />
                    Ages 9 - 14 @ 5:50pm - 6:50pm
                    <br />
                    <a href='https://www.tapgym.com/schedule/adults' target='_blank' rel='noreferrer'>@ The Athletic Playground</a> (<a href='https://maps.app.goo.gl/5c65DNthApxKh9mG9' target='_blank' rel='noreferrer'>in Emeryville</a>)
                </h4>
                <p>
                    If you know any kids who might want to monkey around with me in a wild, creative, mindful play garden, I offer Youth Parkour & Acrobatics experiences every Thursday @ The Athletic Playground in Emeryville.
                </p>
            </>
        ),
        image: './images/talkin-to-kids.JPG',
        c2a: 'Sign Up',
        c2aLink: 'https://www.tapgym.com/schedule/youth',
    },
];

const youthEventItemsList = buildEventItemsList(youthEvents)
export default youthEventItemsList;