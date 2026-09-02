import '../styles/Tidepool.scss';
import BodySection from "../generic_components/BodySection";
import FooterV2 from "../content_components/FooterV2";
import TitleBanner from '../generic_components/TitleBanner';

const endOfLifeCaregivingText = (
    <>
        <p style={{ textAlign: 'center', fontWeight: 800 }}>
            Presence and gentle grounding at the end of life
        </p>
        <p>
            I offer companionship and presence work for people in hospice care and other end of life scenarios and their families : meeting humans where they are, with whatever energy, attention, capacity and interests they have that day.
        </p>
        <p>
            Although I am able to offer gentle movement and touch, this is not a workout or a treatment. It's company. Sometimes that looks like a hand held and breathed with. Sometimes it's a few inches of gentle movement in a wrist or shoulder. Sometimes it's sitting quietly together. The goal is comfort, connection and dignity : never more than the person in front of me wants.
        </p>
        <p>
            I'm happy to coordinate directly with families, caregivers or hospice care teams to find a rhythm that works for all involved.
        </p>
        <p style={{ textAlign: 'center', fontWeight: 800 }}>
            Email grapesdance@gmail.com to <a href='mailto:grapesdance@gmail.com' target='_blank' rel='noreferrer'>get in touch</a>.
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
