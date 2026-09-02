import '../styles/Tidepool.scss';
import BodySection from "../generic_components/BodySection";
import FooterV2 from "../content_components/FooterV2";
import TitleBanner from '../generic_components/TitleBanner';

const youthWorkText = (
    <>
        <p style={{ textAlign: 'center', fontWeight: 800 }}>
            Wild, creative, mindful play practice for kids
        </p>
        <p>
            I offer youth movement classes for kids of all ages, combining physical skill-building with curiosity, creativity, co-creation, mindfulness and fun. Think monkey bars, rolling, jumping, balance and games, all held in a playful, encouraging, boundary-burgeoning and consent-conscious environment.
        </p>
        <p>
            I have taught extensively at The Athletic Playground in Emeryville, facilitated private parties and offered one-on-one sessions.
        </p>
        <p>
            I do not currently have a regular weekly youth class, but please reach out for inquiries about classes, private parties or one-on-one work with your child.
        </p>
        <img
            alt='monkeying around with kids in the play garden'
            className='youth-work-image'
            src='/images/with_kids_cropped.jpg'
        />
        <p className='cross-ref-note'>
            If you're interested in private one-on-one lessons in Contact Improvisation, I do those too, just say so when you get in touch.
        </p>
        <p style={{ textAlign: 'center', fontWeight: 800 }}>
            Email grapesdance@gmail.com to <a href='mailto:grapesdance@gmail.com' target='_blank' rel='noreferrer'>get in touch</a>.
        </p>
    </>
);

const YouthWork = () => {
    return (
        <div className='tidepool-theme'>
            <TitleBanner
                bannerText={<>
                        Youth Work
                    </>}
                cornerNav={true}
                subText={<>
                        <p style={{ textAlign: 'center', fontWeight: 800 }}>
                            Email grapesdance@gmail.com to <a href='mailto:grapesdance@gmail.com' target='_blank' rel='noreferrer'>get in touch</a>.
                        </p>
                    </>}
            />
            <BodySection
                theme='light'
                text={youthWorkText}
            />
            <FooterV2 />
        </div>
    );
}

export default YouthWork;
