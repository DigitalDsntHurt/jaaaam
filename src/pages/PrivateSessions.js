import '../styles/Tidepool.scss';
import BodySection from "../generic_components/BodySection";
import FooterV2 from "../content_components/FooterV2";
import TitleBanner from '../generic_components/TitleBanner';

const privateSessionsText = (
    <>
        <p>
            <p style={{ textAlign: 'center', fontWeight: 800 }}>
                One-on-one movement, meditation & somatic coaching
            </p>
            <p>
                Private sessions are built around you and your interests, your body, your questions, your pace. We work with attentional and physical practices to explore and develop a personal practice that serves and honors your body, your mind and your complete human self.
            </p>
            <p>
                Private sessions are active: we inquire, move, and dance with attention together. Some sessions look like guided movement explorations, some are quieter, closer to meditation, others are more technically or physically rigorous, depending on what you need that day.
            </p>
            <p>
                This work draws from improvisational dance, mindfulness, somatics, primal and animal movement, yoga, calisthenics and research into functional anatomy and the nervous system. This work does not ask you to be an athlete, a dancer or anyone other than yourself.
            </p>
            <p style={{ textAlign: 'center', fontWeight: 800 }}>
                Sessions can help with
            </p>
            <ul>
                <li>Finding ease, strength and range of motion in everyday movement</li>
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
                cornerNav={true}
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
            <FooterV2 />
        </div>
    );
}

export default PrivateSessions;
