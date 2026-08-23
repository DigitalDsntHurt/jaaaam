import '../styles/Tidepool.scss';
import BodySection from "../generic_components/BodySection";
import Footer from "../content_components/Footer";
import TitleBanner from '../generic_components/TitleBanner';

const myBodyText = (
    <>
        <p>
            <p style={{ textAlign: 'center', fontWeight: 800 }}>
                Bodywork in the tradition of The Berry Method®
            </p>
            <p>
                Your body already knows how to heal itself. Sometimes it needs help finding its way back.
            </p>
            <p>
                I practice The Berry Method® of Corrective Massage, a precise, hands-on approach developed by <a href='https://www.berrymethod.org/history' target='_blank' rel='noreferrer'>Lauren Berry</a>, a structural engineer who came to see the body the way he saw a building: something that works beautifully when everything is in its right place and starts to strain when it isn't. I've trained since 2025 as an apprentice under <a href='https://www.humanbalancing.net/' target='_blank' rel='noreferrer'>Janae Fullenkamp</a>, who has taught and practiced this work for over two decades.
            </p>
            <p>
                Muscles, tendons and ligaments each have a natural position, a place in your body's larger whole. Over time, through injury, habit or simple wear, tissue shifts out of its place. These small misalignments becomes the source of a bigger problems: a stiff knee, a nagging shoulder, a low back that never quite settles.
            </p>
            <p>
                My work is about finding those places and putting things back where they belong. It's precise, it's grounded in real anatomy and it's remarkably effective. People often leave a session moving more freely than they have in years.
            </p>
            <p>
                If you're dealing with pain, stiffness, an old injury, or just the accumulated wear of an active life, I'd love to help you feel at home in your body again.
            </p>
            {/* <p style={{ textAlign: 'center', fontWeight: 800 }}>
                Email grapesdance@gmail.com to <a href='mailto:grapesdance@gmail.com' target='_blank' rel='noreferrer'>book a session</a>.
            </p> */}
            <p style={{ textAlign: 'center', fontWeight: 800 }}>
                Testimonials
            </p>
            <p>
                "Nick is deeply intuitive and endlessly curious and this feels like a magical combination to receive. He/They brings their full presence every session and has helped me feel much better. You are in very good hands with Nick."
                <br />
                <span style={ { float: 'right' } }>- JG</span>
            </p>
            <p>
                "Nick is truly an intuitive and skilled healer. As a dancer, I often hurt in all sorts of places, all at the same time. Nick understands and “listens” to how different body parts connect each other, so he addresses localized pain holistically. My body always feels looser and more integrated after he works on me. Thank you, Nick!"
                <br />
                <span style={ { float: 'right' } }>- BH</span>
            </p>
            <p>
                "Nick’s way of listening to my questions, my comfort, and my body made the session finely responsive and gently illuminating."
                <br />
                <span style={ { float: 'right' } }>- JE</span>
            </p>
            <p style={{ textAlign: 'center', fontWeight: 800 }}>
                Email grapesdance@gmail.com to <a href='mailto:grapesdance@gmail.com' target='_blank' rel='noreferrer'>book a session</a>.
            </p>
        </p>
    </>
);

const BodyWork = () => {
    return (
        <div className='tidepool-theme'>
            <TitleBanner
                bannerText={<>
                        Bodywork
                    </>}
                subText={<>
                        <p style={{ textAlign: 'center', fontWeight: 800 }}>
                            Email grapesdance@gmail.com to <a href='mailto:grapesdance@gmail.com' target='_blank' rel='noreferrer'>book a session</a>.
                        </p>
                    </>}
            />
            <BodySection
                theme='light'
                text={myBodyText}
            />
            <Footer theme='dark' />
        </div>
    );
}

export default BodyWork;