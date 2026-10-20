import '../styles/Tidepool.scss';
import bodyworkTestimonials from "../site_copy/bodyworkTestimonials";
import BodySection from "../generic_components/BodySection";
import FooterV2 from "../content_components/FooterV2";
import TestimonialsGrid from "../content_components/TestimonialsGrid";
import TitleBanner from '../generic_components/TitleBanner';

const myBodyText = (
    <>
        <p>
            <p>
                I offer two kinds of work : hands-on corrective bodywork in the tradition of The Berry Method®, and slower, feel-good massage for deep rest. You're welcome to choose the one that calls to you, or we can begin together and listen, in session, for the kind of work your body is asking for that day.
            </p>
            <p style={{ textAlign: 'center', fontWeight: 800 }}>
                Sessions can help with
            </p>
            <ul>
                <li>Stiff joints, nagging aches or an old injury that hasn't fully resolved</li>
                <li>Chronic tension from an active life, repetitive movement or old habits</li>
                <li>Joint realignment and postural or structural imbalances</li>
                <li>Pre- and post-natal recovery</li>
                <li>Trauma release and a nervous system that needs to settle</li>
                <li>Simply wanting deep rest and to feel cared for in your body</li>
            </ul>
            <p style={{ textAlign: 'center', fontWeight: 800 }}>
                Berry Method® corrective bodywork
            </p>
            <img
                alt='Nick smiling'
                className='bodywork-float-image'
                src='/images/flattered-wide.png'
            />
            <p>
                I practice The Berry Method®, a precise, hands-on approach to corrective bodywork developed by <a href='https://www.berrymethod.org/history' target='_blank' rel='noreferrer'>Lauren Berry</a>, a structural engineer who came to see the body the way he saw a building: something that works beautifully when everything is in its right place and starts to strain when it isn't. I've trained since 2025 as an apprentice under <a href='https://www.humanbalancing.net/' target='_blank' rel='noreferrer'>Janae Fullenkamp</a>, who has taught and practiced this work for over two decades.
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
            <p className='clear-float' style={{ textAlign: 'center', fontWeight: 800 }}>
                Book a <a href='/book' target='_blank' rel='noreferrer'>session here</a> or <a href='mailto:grapesdance@gmail.com' target='_blank' rel='noreferrer'>email me</a> for more info.
            </p>
            <p style={{ textAlign: 'center', fontWeight: 800 }}>
                Feel-good massage
            </p>
            <p>
                This is slower, quieter work : full-body oil massage built around long, connected strokes that stay in conversation with your breath and your nervous system. It's listening-based and attuned : I follow where you hold and where you soften rather than a fixed routine, and let the session move at the pace your body sets.
            </p>
            <p>
                Nothing here is trying to correct or fix you. The aim is deep rest, a settled nervous system and the plain, restorative pleasure of being cared for in your body.
            </p>
            <p>
                Not sure which you're after? That's completely fine. Tell me what's going on and we'll find the right shape for the session together.
            </p>
            <p>
                Session details, location and pricing : see <a href='/book' target='_blank' rel='noreferrer'>booking link</a>. Need something longer than 60 minutes, or can't find a time that works : <a href='mailto:grapesdance@gmail.com' target='_blank' rel='noreferrer'>email me</a> and we'll figure it out together.
            </p>
            <p style={{ textAlign: 'center', fontWeight: 800 }}>
                Book a <a href='/book' target='_blank' rel='noreferrer'>session here</a> or <a href='mailto:grapesdance@gmail.com' target='_blank' rel='noreferrer'>email me</a> for more info.
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
                cornerNav={true}
                subText={<>
                        <p style={{ textAlign: 'center', fontWeight: 800 }}>
                            Book a <a href='/book' target='_blank' rel='noreferrer'>session here</a> or <a href='mailto:grapesdance@gmail.com' target='_blank' rel='noreferrer'>email me</a> for more info.
                        </p>
                        <p className='pull-quote-text'>{bodyworkTestimonials[1].text}</p>
                        <p className='pull-quote-attribution'>{bodyworkTestimonials[1].attribution}</p>
                    </>}
            />
            <BodySection
                theme='light'
                text={myBodyText}
            />
            <TitleBanner bannerText="Testimonials" />
            <TestimonialsGrid testimonials={bodyworkTestimonials.filter((_, index) => index !== 1)} theme='dark' />
            <FooterV2 />
        </div>
    );
}

export default BodyWork;