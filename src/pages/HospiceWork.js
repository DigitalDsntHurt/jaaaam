import BodySection from "../generic_components/BodySection";
import Footer from "../content_components/Footer";
import TitleBanner from '../generic_components/TitleBanner';

const hospiceWorkText = (
    <>
        <p style={{ textAlign: 'center', fontWeight: 800 }}>
            Presence and gentle movement at the end of life
        </p>
        <p>
            I offer movement- and touch-based presence work for people in hospice care and their families — meeting people exactly where they are, with whatever mobility, energy or attention they have that day.
        </p>
        <p>
            This isn't a workout or a treatment. It's company. Sometimes that looks like a hand held and breathed with. Sometimes it's a few inches of gentle movement in a wrist or shoulder. Sometimes it's simply sitting quietly together. The goal is comfort, connection and dignity — never more than the person in front of me wants.
        </p>
        <p>
            I'm happy to coordinate directly with families, caregivers or hospice care teams to find a rhythm that works for everyone involved.
        </p>
    </>
);

const HospiceWork = () => {
    return (
        <>
            <TitleBanner
                bannerText={<>
                        Hospice Work
                    </>}
                subText={<>
                        <p style={{ textAlign: 'center', fontWeight: 800 }}>
                            Email grapesdance@gmail.com to <a href='mailto:grapesdance@gmail.com' target='_blank' rel='noreferrer'>get in touch</a>.
                        </p>
                    </>}
            />
            <BodySection
                theme='light'
                text={hospiceWorkText}
            />
            <Footer theme='dark' />
        </>
    );
}

export default HospiceWork;
