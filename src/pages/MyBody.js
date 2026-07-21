import BodySection from "../generic_components/BodySection";
import Footer from "../content_components/Footer";
import TitleBanner from '../generic_components/TitleBanner';

const myBodyText = (
    <>
        <p>This is a place where i list and summarize and write about and concretize the aches and pains, injuries and tensions in the body. This note is for me and for my collaborators and for my bodyworkers. I love my body.</p>
        <ul>
            <li>Scull</li>
            <li>Nose</li>
            <li>Neck</li>
            <li>Hips</li>
            <li>Hamstrings (R)</li>
            <li>MCL / medial Meniscus (R)</li>
        </ul>
    </>
);

const MyBody = () => {
    return (
        <>
            <TitleBanner 
                bannerText={<>
                        My Body
                    </>}
            />
            <BodySection 
                theme='light'
                // title='Details'
                text={myBodyText}
            />
            <Footer theme='dark' />
        </>
    );
}

export default MyBody;