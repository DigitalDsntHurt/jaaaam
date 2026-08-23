import '../styles/Tidepool.scss';
import BodySection from "../generic_components/BodySection";
import FooterV2 from "../content_components/FooterV2";
import TitleBanner from '../generic_components/TitleBanner';

const endOfLifeCaregivingText = (
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

const EndOfLifeCaregiving = () => {
    return (
        <div className='tidepool-theme'>
            <TitleBanner
                bannerText={<>
                        End of Life Caregiving
                    </>}
                cornerNav={true}
                subText={<>
                        <p style={{ textAlign: 'center', fontWeight: 800 }}>
                            Email grapesdance@gmail.com to <a href='mailto:grapesdance@gmail.com' target='_blank' rel='noreferrer'>get in touch</a>.
                        </p>
                    </>}
            />
            <div className='landing-sect light-theme' style={{ paddingBottom: 0 }}>
                <img
                    alt='sunlight through a spiderweb, seen through a wooden gate'
                    src='/images/portal_cropped.jpg'
                    style={{ borderRadius: '14px', maxWidth: '640px', width: '100%' }}
                />
            </div>
            <BodySection
                theme='light'
                text={endOfLifeCaregivingText}
            />
            <FooterV2 />
        </div>
    );
}

export default EndOfLifeCaregiving;
