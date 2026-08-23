import '../styles/Tidepool.scss';
import BodySection from "../generic_components/BodySection";
import Footer from "../content_components/Footer";
import TitleBanner from '../generic_components/TitleBanner';

const contactForPartnersText = (
    <>
        <p>
            <p style={{ textAlign: 'center', fontWeight: 800 }}>
                Move together. Listen together.
            </p>
            <p>
                Contact Improvisation is a dance form built on shared weight, touch and attention — two bodies listening to each other in real time. Practiced together, it becomes a way for couples and close partnerships to build trust, communication and embodied connection outside of words.
            </p>
            <p>
                No dance experience is required. We start wherever you are — leaning, rolling, falling and catching, following an offered hand — and build a shared physical language as we go.
            </p>
            <p>
                Sessions are tailored to what you and your partner want to work on, whether that's rebuilding physical ease after a hard season, learning to communicate through touch, or simply finding a new way to play together.
            </p>
            <p style={{ textAlign: 'center', fontWeight: 800 }}>
                What a session looks like
            </p>
            <ul>
                <li>A warm-up to settle into your own body before connecting to your partner's</li>
                <li>Guided contact improvisation exercises: leaning, weight-sharing, following and leading</li>
                <li>Open, playful exploration with real-time coaching</li>
                <li>Time to reflect on what you noticed, together</li>
            </ul>
            <p>
                I bring a trauma-informed, consent-forward approach — nothing is ever forced, and pace is always yours to set.
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
            <Footer theme='dark' />
        </div>
    );
}

export default ContactForPartners;
