import BodySection from "../generic_components/BodySection";
import EventItem from "../generic_components/events/EventItem";
import Footer from "../content_components/Footer";
import TitleBanner from '../generic_components/TitleBanner';

const upcomingContactImprovisationEventItemsList = [
    {
        title: (
            <>
                Friday Contact Improvisation @ The Athletic Playground
            </>
        ),
        description: (
            <>
                <h4>
                    Friday, October 31 (<i>!spooky!</i>)
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
                Thursday Contact Improvisation : Pre-Jam class @ The Finnish Hall in Berkeley
            </>
        ),
        description: (
            <>
                <h4>
                    Contact Improvisation class before the weekly Thursday Jam on November 20.
                    <br />
                    <br />
                    November 20
                    <br />
                    7:00pm (followed by the Jam from 8pm - 11pm)
                    <br />
                    <a href='https://maps.app.goo.gl/MBSLK26ErYEs9wUg6' target='_blank' rel='noreferrer'>@ The Finnish Hall in Berkeley</a>
                </h4>
                <p>
                    Every Thursday at Berkeley’s historic Finnish Hall, we gather for the biggest contact improvisation jam in the Bay Area. This is a vibrant, community-run space, where newcomers and experienced practitioners explore this dynamic movement form.
                </p>
                <p>
                    The class and Jam are by donation.
                </p>
            </>
        ),
        image: './images/ava_ferries_hollow.png',
        c2a: 'Learn More About the Thursday CI Jam',
        c2aLink: 'https://thursdayjam.org/',
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
]

const upcomingContactImprovisationOfferings = upcomingContactImprovisationEventItemsList.map(e => (
    <EventItem 
        c2a={e.c2a}
        c2aLink={e.c2aLink}
        description={e.description}
        image={e.image}
        title={e.title}
    />
))

const ContactImprovisation = () => {
    return (
        <>
            <TitleBanner 
                bannerText="Contact Improvisation Offerings"
                cornerNav={true}
                subText={(<p style={{textAlign: 'center'}}><a href='https://docs.google.com/forms/d/e/1FAIpQLScT49DHIYllF6Ftk7o5_ox203fLKdItqb_Z-8EiyhAVAG6I4A/viewform' target='_blank' rel='noreferrer'>Newsletter Sign-up</a></p>)}
            />
            <BodySection 
                theme='light'
                title='Upcoming'
                text={upcomingContactImprovisationOfferings}
            />
            <Footer theme='dark' />
        </>
    );
}

export default ContactImprovisation;