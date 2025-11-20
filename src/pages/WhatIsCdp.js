import BodySection from "../generic_components/BodySection";
import Footer from "../content_components/Footer";
import TitleBanner from '../generic_components/TitleBanner';

const seriesDetails = (<>
        <p>CDP stands for Contemplative Dance Practice.</p>
        <p>Contemplative Dance Practice (CDP) is a practice form that combines seated meditation, physical movement inquiry and open improvisation.</p>
        <p>Typically these three are practiced sequentially and for equal time intervals. Often, we practice CDP for 60 minutes. We call that a 20/20/20 practice, meaning 20 minutes of seated meditation, followed by 20 minutes of movement practice, followed by 20 minutes of open improvisation.</p>
        <p><strong>Language</strong></p>
        <p>How we talk about CDP can be tricky and fussy. And I feel challenged when naming these practice components with too much concreteness. Sometimes people talk about seated meditation followed by solo movement followed by relational movement. For me, that doesn't capture one beautiful possible practice intention: when we practice seated, silent, stillness meditation and then <strong>continue that practice</strong> but with an opening of the aperture of possibility so that our meditation practice might include physical movement, sounds or some/anything else, it's possible to then enter the final open improvisation with remarkable clarity or authenticity or freedom or loving kindness or any of many other possible interesting states.</p>
        <p><strong>Lineage</strong></p>
        <p>CDP was developed by a remarkable dancer / teacher / writer / being named Barbara Dilley who studied and practiced and performed and educated. It's worth checking and seeking out Barbara Dilley at <a href='https://www.barbaradilley.com/'>her website</a> and also via her remarkable <a href='https://www.barbaradilley.com/thisverymoment'>book This Very Moment</a>.</p>
        <p>We / I owe Barbara Dilley an enormous debt of gratitude for her work in developing and sharing this and many other practices. And it's worth recognizing and remembering that our practice descends from Barbara and other dancestors, just as Barbara's work descends from her teachers and collaborators, references and influences.</p>
        <p><strong>Contemplative Dance Practice & Contact Improvisation</strong></p>
        <p>CDP is sometimes practiced by Contact Improvisers and in Contact Improvisation settings. But for me, CDP is not CI, even though CDP can cozily house CI.</p>
        <p><strong>Why Practice?</strong></p>
        <p>Some people find this practice deep, fun, lovely and special. For sure, I do. And I'm doing my best to practice and share this pratice as an organizing force of my life.</p>
        <p>To practice CDP with me, <a href='/'>check out my offerings</a> or write me a note at grapesdance@gmail.com.</p>
        <p>May this practice be of service.</p>
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