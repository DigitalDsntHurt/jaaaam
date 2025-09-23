import BodySection from "../generic_components/BodySection";
import Footer from "../content_components/Footer";
import TitleBanner from '../generic_components/TitleBanner';

const seriesDetails = (<>
        <p><strong>When?</strong> Fridays @ 10am</p>
        <p><strong>Dates : </strong>Six week series : Oct 3, Oct 10, Oct 17, Oct 24, Oct 31, Nov 7</p>
        <p><strong>Where?</strong> Finnish Hall, downstairs in the Ski Club Room</p>
        <p><strong>What?</strong> 20/20/20 practice followed by optional time for discussion and togetherness. We have the space until noon.</p>
        <p><strong>Who is this for?</strong> This practice group is open to people with non-zero Contact Improvisation experience. Feel free to invite folks you think will enjoy but please be discerning to keep our container safe.</p>
        <p><strong>Support : </strong>Suggested $24 for six sessions, $8 per single session. NOTAFLOF. For payment, <a href='https://venmo.com/u/GrapesDance' target="_blank" rel="noreferrer">venmo @GrapesDance</a> or <a href='mailto:grapesdance@gmail.com' target="_blank" rel="noreferrer">email grapesdance@gmail.com</a> for other payment options.</p>
        <p><strong>Join : </strong><a href="https://docs.google.com/forms/d/e/1FAIpQLSeUVfAR7PfQT2jXKTSmKzULUEXVDDF_CFDgOTUfUyHPipkzig/viewform">Get email updates</a> about practice details, times, locations for this group</p>
    </>);

const finances = (<>
    <p>Money is how we pay for our beautiful practice space at The Finnish Hall.</p>
    <p>This year to date, as of Sep 22, 2025 this group’s net income is -$0.52</p>
    <p>The aim of this practice group is to continue practice in perpetuity.</p>
    <p>May this practice be of service.</p>
</>);

const signUp = (<>
    
</>)

const CdpFridayGroup = () => {
    return (
        <>
            <TitleBanner 
                bannerText={<>
                        Contemplative Dance Practice
                        <br />
                        Friday Group
                    </>}
            />
            <BodySection 
                theme='light'
                title='Details'
                text={seriesDetails}
            />
            <BodySection 
                theme='dark'
                // title='Finances'
                text={finances}
            />
            <Footer theme='light' />
        </>
    );
}

export default CdpFridayGroup;