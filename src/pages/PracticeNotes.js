import BodySection from "../generic_components/BodySection";
import Footer from "../content_components/Footer";
import TitleBanner from '../generic_components/TitleBanner';

const practiceNotes = (<>
        
        <img alt='' className='event-item-image' src='./images/practice_notes/fall-in-love-with-the-process.png' />
        <hr />
        <br />
        <br />
        <br />
        <br />

        <img alt='' className='event-item-image' src='./images/practice_notes/11-28-25.png' />
        <hr />

        <img alt='' className='event-item-image' src='./images/practice_notes/11-27-25.png' />
        <hr />

        <img alt='' className='event-item-image' src='./images/practice_notes/11-26-25.png' />
        <hr />

        <img alt='' className='event-item-image' src='./images/practice_notes/11-24-25.png' />
        <hr />

        <img alt='' className='event-item-image' src='./images/practice_notes/11-23-25.png' />
        <hr />

        <img alt='' className='event-item-image' src='./images/practice_notes/11-21-25.png' />
        <hr />

        <img alt='' className='event-item-image' src='./images/practice_notes/11-20-25.png' />
        <hr />

        <img alt='' className='event-item-image' src='./images/practice_notes/11-19-25.png' />
        <hr />

        <img alt='' className='event-item-image' src='./images/practice_notes/11-14-25.png' />
        <hr />
        
        <img alt='' className='event-item-image' src='./images/practice_notes/11-13-25.png' />
        <hr />
        
        <img alt='' className='event-item-image' src='./images/practice_notes/11-12-25.png' />
        <hr />

        <img alt='' className='event-item-image' src='./images/practice_notes/11-10-25.png' />
        <hr />
        
        <img alt='' className='event-item-image' src='./images/practice_notes/11-9-25.png' />
        <hr />
        
        <img alt='' className='event-item-image' src='./images/practice_notes/11-7-25.png' />
        <hr />

        <img alt='' className='event-item-image' src='./images/practice_notes/11-5-25.png' />
        <hr />

        <img alt='' className='event-item-image' src='./images/practice_notes/11-3-25.png' />
        <hr />
        
    </>);

const CdpFridayGroup = () => {
    return (
        <>
            <TitleBanner 
                bannerText={<>
                        Practice Notes
                    </>}
            />
            <BodySection 
                theme='light'
                text={practiceNotes}
            />
            <Footer theme='dark' />
        </>
    );
}

export default CdpFridayGroup;