import BodySection from "../generic_components/BodySection";
import Footer from "../content_components/Footer";
import TitleBanner from '../generic_components/TitleBanner';

const practiceNotes = (<>
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