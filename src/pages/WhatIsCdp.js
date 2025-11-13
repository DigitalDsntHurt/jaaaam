import BodySection from "../generic_components/BodySection";
import Footer from "../content_components/Footer";
import TitleBanner from '../generic_components/TitleBanner';

const seriesDetails = (<>
        <p>CDP stands for Contemplative Dance Practice.</p>
        <p>CDP is a practice form that combines seated meditation, physical movement inquiry and open improvisation.</p>
        <p>Typically these three are practiced sequentially and for equal time intervals. Often, we practice CDP for 60 minutes. We call that a 20/20/20 practice. Meaning 20 minutes of seated meditation, followed by 20 minutes of movement practice, followed by 20 minutes of open improvisation.</p>
        <p>Some people find this practice deep, fun, lovely and special.</p>
    </>);

const CdpFridayGroup = () => {
    return (
        <>
            <TitleBanner 
                bannerText={<>
                        What is CDP?
                    </>}
            />
            <BodySection 
                theme='light'
                title='Contemplative Dance Practice'
                text={seriesDetails}
            />
            <Footer theme='dark' />
        </>
    );
}

export default CdpFridayGroup;