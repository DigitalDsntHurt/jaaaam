import '../styles/Tidepool.scss';
import BodySection from "../generic_components/BodySection";
import FooterV2 from "../content_components/FooterV2";
import TitleBanner from '../generic_components/TitleBanner';

const contactForPartnersText = (
    <>
        <p>
            <p style={{ textAlign: 'center', fontWeight: 800 }}>
                Move together. Listen together.
            </p>
            <p>
                Contact Improvisation is a dance form built on limitless inquiry into shared weight, touch, attention and boundaries : two bodies listening and expressing to each other in real time. Practiced together, it becomes a way for couples and close partnerships to build trust, communication and embodied connection outside of words.
            </p>
            <p>
                No dance experience is required. We start wherever you are and build a shared physical language as we go : leaning, rolling, falling, pouring, catching, offering and skillfully responding to offers.
            </p>
            <p>
                Sessions are tailored to what you and your partner want to work on, whether that's rebuilding physical or relational ease after a hardship, learning to communicate through touch or finding new ways to play together.
            </p>
            <p style={{ textAlign: 'center', fontWeight: 800 }}>
                What a session looks like
            </p>
            <ul>
                <li>A warm-up to settle into your own body before connecting with your partner's</li>
                <li>Guided technical development in Contact Improvisation, consent, boundary and relational exercises</li>
                <li>Open, playful exploration with real-time coaching</li>
                <li>Time to reflect on what you noticed together</li>
            </ul>
            <p>
                I bring a gentle, consent-forward approach : nothing is ever forced and pace is always yours to set. We will find it together.
            </p>
            <p className='cross-ref-note'>
                If you're interested in private one-on-one lessons in Contact Improvisation just for yourself, I do those too, just say so when you get in touch.
            </p>
            <p style={{ textAlign: 'center', fontWeight: 800 }}>
                Email grapesdance@gmail.com to <a href='mailto:grapesdance@gmail.com' target='_blank' rel='noreferrer'>book a session</a>.
            </p>
        </p>
    </>
);

const ContactForPartners = () => {
    return (
        <div className='tidepool-theme'>
            <TitleBanner
                bannerText={<>
                        Contact Improvisation<br />For Couples & Partnerships
                    </>}
                cornerNav={true}
                subText={<>
                        <p style={{ textAlign: 'center', fontWeight: 800 }}>
                            Email grapesdance@gmail.com to <a href='mailto:grapesdance@gmail.com' target='_blank' rel='noreferrer'>book a session</a>.
                        </p>
                    </>}
            />
            <BodySection
                theme='light'
                text={contactForPartnersText}
            />
            <FooterV2 />
        </div>
    );
}

export default ContactForPartners;
