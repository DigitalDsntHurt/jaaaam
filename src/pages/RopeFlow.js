import Bio from "../content_components/Bio";
import BodySection from "../generic_components/BodySection";
import Footer from "../content_components/Footer";
import TitleBanner from '../generic_components/TitleBanner';

const seriesDetails = (<>
        <p><strong>What?</strong> Rope Flow class series : group classes, instructor led</p>
        <p><strong>When?</strong> Wednesday mornings @ 8am (this 6-week series runs Aug 20, Aug 27, Sep 3, Sep 10, Sep 17, Sep 24)</p>
        <p><strong>Where?</strong> Alameda Beach @ The Sand Castle Picnic Area (<a href='https://maps.app.goo.gl/ZVBNdBKWqhGd3bnB9' target='_blank' rel="noreferrer">map)</a></p>
        <p><strong>Who is this for?</strong> All fitness and skill levels will be warmly welcomed, instructed and cared for.</p>
        <p><strong>About the practice : </strong>Gently and together, we will work and play with the mobility, strength, coordination and integration of our bodies and the focus, calm and openness of our minds. <u>Rope Flow is a physical practice</u>. In this series we will scale intensity up and down to meet the needs and goals of our group and the demands of the moment. <u>Rope Flow is a meditative practice</u>. This series ground our practice in somatic awareness, kind concentration and mental openness and flexibility.</p>
    </>);

const whatIsRopeFLow = (<>
    <p>Rope Flow is a fun, low-impact movement practice using a rope to create continuous, flowing patterns around your body.</p>
    <p>It blends elements of dance, martial arts, fitness, creativity and improvisation into smooth, rhythmic sequences that improve coordination, mobility, and cardiovascular health.</p>
    <p>The gentle, meditative flow builds balance, posture, and joint health while giving you a full-body workout.</p>
    <p>This Rope Flow class series is designed for all ages and fitness levels.</p>
</>);

const moreAboutRopeFlow = (<>
    <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, marginBottom: '2vh' }}>
        <iframe
            src={`https://www.youtube.com/embed/wfUSKxyqmGU`}
            title="YouTube video"
            style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            border: 0,
            }}
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope;"
            allowFullScreen
        />
    </div>

    <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, marginBottom: '2vh' }}>
        <iframe
            src={`https://www.youtube.com/embed/G9Psf5FoSig`}
            title="YouTube video"
            style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            border: 0,
            }}
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope;"
            allowFullScreen
        />
    </div>

    <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, marginBottom: '2vh' }}>
        <iframe
            src={`https://www.youtube.com/embed/N3PXlC68LQU`}
            title="YouTube video"
            style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            border: 0,
            }}
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope;"
            allowFullScreen
        />
    </div>

    <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, marginBottom: '2vh' }}>
        <iframe
            src={`https://www.youtube.com/embed/ItVf97YhFL4`}
            title="YouTube video"
            style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            border: 0,
            }}
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope;"
            allowFullScreen
        />
    </div>

    <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, marginBottom: '2vh' }}>
        <iframe
            src={`https://www.youtube.com/embed/q05fBVyPVGg`}
            title="YouTube video"
            style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            border: 0,
            }}
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope;"
            allowFullScreen
        />
    </div>

    <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, marginBottom: '2vh' }}>
        <iframe
            src={`https://www.youtube.com/embed/3bNPNmgWu4o`}
            title="YouTube video"
            style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            border: 0,
            }}
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope;"
            allowFullScreen
        />
    </div>
</>)

const RopeFlow = () => {

    return (
        <>
            <TitleBanner bannerText='Rope Flow Series at Alameda Beach' />
            <BodySection 
                theme='light'
                title='Series Details'
                text={seriesDetails}
            />
            <BodySection 
                theme='dark'
                title='What is Rope Flow?'
                text={whatIsRopeFLow}
            />
            <BodySection 
                theme='light'
                title='More about Rope Flow'
                text={moreAboutRopeFlow}
            />
            <Bio />
            <Footer theme='light' />
        </>
    );
}

export default RopeFlow;