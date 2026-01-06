import BodySection from "../generic_components/BodySection";
import Footer from "../content_components/Footer";
import TitleBanner from '../generic_components/TitleBanner';

const seriesDetails = (<>
        <p>
            <strong>When?</strong> Fridays @ 9:30 am until 11 am. 
            <br /><br/>
            Doors open at 9:30am.{' '}
            <strong>At 9:45am promptly the container closes, we lock the doors</strong> and begin the practice.
        </p>
        <p><strong>Dates : </strong>Weekly on Fridays.
        <br/><br/>If there are cancellations or other scheduling irregularities they will be posted here.</p>
        <p><strong>Where?</strong> Finnish Hall, upstairs in the Meeting Room</p>
        <p><strong>What?</strong> 20/20/20 CDP practice
        <br /><br /><a href='/what-is-cdp'>What is 20/20/20 CDP practice?</a></p>
        <p><strong>Who is this for?</strong> This is an open practice group. This is not a class. There is space-holding and container setting but little to no teaching or facilitation of the practice itself. Feel free to invite folks you think will enjoy the practice but please be discerning to keep our container safe.</p>
        <p><strong>Support : </strong>Suggested $12 per single session. NOTAFLOF. For payment, <a href='https://venmo.com/u/GrapesDance' target="_blank" rel="noreferrer">venmo @GrapesDance</a> or <a href='mailto:grapesdance@gmail.com' target="_blank" rel="noreferrer">email grapesdance@gmail.com</a> for other payment options.</p>
        <p><strong>Join : </strong><a href='https://forms.gle/DqCh2SNphUHvzHtL6'>Get email updates</a> about practice details, times, locations for this group</p>
        <p><strong>Questions?</strong> <a href='mailto:grapesdance@gmail.com' target='_blank' rel='noreferrer'>Email Nick</a></p>
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
            <Footer theme='dark' />
        </>
    );
}

export default CdpFridayGroup;