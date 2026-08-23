import '../styles/Tidepool.scss';
import bodyworkTestimonials from "../site_copy/bodyworkTestimonials";
import BodySection from "../generic_components/BodySection";
import FooterV2 from "../content_components/FooterV2";
import TestimonialsGrid from "../content_components/TestimonialsGrid";
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
                cornerNav={true}
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
            <TitleBanner bannerText="Testimonials" />
            <TestimonialsGrid testimonials={bodyworkTestimonials} theme='dark' />
            <FooterV2 />
        </div>
    );
}

export default BodyWork;