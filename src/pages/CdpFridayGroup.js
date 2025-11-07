import BodySection from "../generic_components/BodySection";
import Footer from "../content_components/Footer";
import TitleBanner from '../generic_components/TitleBanner';

const seriesDetails = (<>
        <p><strong>When?</strong> Fridays @ 9:45am</p>
        <p><strong>Dates : </strong>Six week series : Nov 14, Nov 21, Nov 28, Dec 5, Dec 12, Dec 19 </p>
        <p><strong>Where?</strong> Finnish Hall, upstairs in the Meeting Room</p>
        <p><strong>What?</strong> 20/20/20 practice starts promptly at 9:45am followed by optional time for discussion and togetherness.</p>
        <p><strong>Who is this for?</strong> This practice group is open to people with non-zero relational movement experience. Feel free to invite folks you think will enjoy but please be discerning to keep our container safe.</p>
        <p><strong>Support : </strong>Suggested $24 for six sessions, $8 per single session. NOTAFLOF. For payment, <a href='https://venmo.com/u/GrapesDance' target="_blank" rel="noreferrer">venmo @GrapesDance</a> or <a href='mailto:grapesdance@gmail.com' target="_blank" rel="noreferrer">email grapesdance@gmail.com</a> for other payment options.</p>
        <p><strong>Join : </strong><a href="https://docs.google.com/forms/d/e/1FAIpQLSeUVfAR7PfQT2jXKTSmKzULUEXVDDF_CFDgOTUfUyHPipkzig/viewform">Get email updates</a> about practice details, times, locations for this group</p>
    </>);

const finances = (<>
    <p>Money is how we pay for our beautiful practice space at The Finnish Hall.</p>
    <p>This year to date, as of Nov 4, 2025 this group’s net income is -$13.52</p>
    <p>The aim of this practice group is to continue practice in perpetuity.</p>
    <p>May this practice be of service.</p>
</>);

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
                text={finances}
            />
            <Footer theme='light' />
        </>
    );
}

export default CdpFridayGroup;