import '../styles/Tidepool.scss';
import BodySection from "../generic_components/BodySection";
import Footer from "../content_components/Footer";
import TitleBanner from '../generic_components/TitleBanner';

const privateSessionsText = (
    <>
        <p>
            <p style={{ textAlign: 'center', fontWeight: 800 }}>
                One-on-one movement, meditation & somatic coaching
            </p>
            <p>
                Private sessions are built entirely around you — your body, your questions, your pace. We work with meditation, movement and awareness practices to explore attention, ease and self-healing.
            </p>
            <p>
                Unlike bodywork, which is hands-on corrective work, private sessions are active: we move, breathe and pay attention together. Some sessions look like guided movement exploration; others are quieter, closer to meditation, depending on what you need that day.
            </p>
            <p>
                These sessions draw from many traditions — calisthenics, improvisational dance, mindfulness, qigong, somatics, tai-chi, the Feldenkrais Method, the Ido Portal Method, weight-sharing games, yoga and more — without asking you to be an athlete, a dancer, or anyone other than yourself.
            </p>
            <p style={{ textAlign: 'center', fontWeight: 800 }}>
                Sessions can help with
            </p>
            <ul>
                <li>Finding more ease and range of motion in everyday movement</li>
                <li>Building a calmer, more attentive relationship with your own body</li>
                <li>Working through stuck patterns, old injuries or tension with curiosity instead of force</li>
                <li>Developing a personal meditation or movement practice that actually sticks</li>
            </ul>
            <p>
                Every session is custom — there's no fixed curriculum. We start with what's alive for you and follow it.
            </p>
            <p style={{ textAlign: 'center', fontWeight: 800 }}>
                Email grapesdance@gmail.com to <a href='mailto:grapesdance@gmail.com' target='_blank' rel='noreferrer'>book a session</a>.
            </p>
        </p>
    </>
);

const PrivateSessions = () => {
    return (
        <div className='tidepool-theme'>
            <TitleBanner
                bannerText={<>
                        Private Sessions
                    </>}
                subText={<>
                        <p style={{ textAlign: 'center', fontWeight: 800 }}>
                            Email grapesdance@gmail.com to <a href='mailto:grapesdance@gmail.com' target='_blank' rel='noreferrer'>book a session</a>.
                        </p>
                    </>}
            />
            <BodySection
                theme='light'
                text={privateSessionsText}
            />
            <Footer theme='dark' />
        </div>
    );
}

export default PrivateSessions;
