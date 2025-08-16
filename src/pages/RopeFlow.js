import Bio from "../content_components/Bio";
import BodySection from "../generic_components/BodySection";
import Footer from "../content_components/Footer";
import TitleBanner from '../generic_components/TitleBanner';

const seriesDetails = (<>
        <p><strong>What?</strong> Instructor-led Rope Flow classes for all skill and experience levels.</p>
        <p><strong>When?</strong> Wednesday mornings @ 8am (six week series : Aug 20, Aug 27, Sep 3, Sep 10, Sep 17, Sep 24)</p>
        <p><strong>Where?</strong> Sand Castle Picnic Area @ Alameda Beach (<a href='https://maps.app.goo.gl/ZVBNdBKWqhGd3bnB9' target='_blank' rel="noreferrer">map)</a></p>
        <p><strong>Who is this for?</strong> All bodies, backgrounds, skill and experience levels will be warmly welcomed, instructed and cared for.</p>
        <p><strong>Intentions</strong> : Feel amazing in our bodies and in ourselves, attune to a sense of place, practice in community, learn and practice a fun skill.</p>
    </>);

const whatIsRopeFLow = (<>
    <p>Rope Flow is a fun, low-impact movement practice using a rope to create continuous, flowing patterns around your body.</p>
    <p>It blends elements of dance, martial arts, fitness, creativity and improvisation into smooth, rhythmic sequences that improve coordination, mobility, and cardiovascular health.</p>
    <p>As both meditative practice and full-body workout, Rope Flow builds balance, posture and joint health as well as concentration, awareness, ease and openness.</p>
    <p>Rope Flow is gently but powerfully theraputic for joints and the spine. It is also comfortably accessible to anyone who can walk and stand up.</p>
</>);

const aboutThisSeries = (<>
    <p>Gently and together each week, we will work and play with the mobility, strength, coordination and integration of our bodies and the focus, calm and openness of our minds.</p>
    <p><u>Rope Flow is a physical practice</u>. In this series we will scale intensity up and down to meet the needs and goals of our group and the demands of each day.</p>
    <p><u>Rope Flow is a meditative practice</u>. This series grounds the practice of Rope Flow in somatic awareness, kind concentration and mental openness and flexibility.</p>
    <p><u>Each session</u> will begin by attuning to our group and to our surroundings then move to attentional and physical warm-ups, a skill development phase, open space for exploring flow and improvisation and end with a satisfying, synchronized group sequnce.</p>
    <p><strong>Cost</strong> : This series is offered to the community on a <strong>donation basis</strong>. Suggested <strong>$4 to $12 per session</strong> (sliding scale). <strong>No one turned away for lack of funds</strong>. Payments can be made day-of or in advance by <a href='https://venmo.com/u/GrapesDance' target="_blank" rel="noreferrer">Venmo to @GrapesDance.</a></p>
</>)

const moreAboutRopeFlow = (<>
    <p>
        I was first drawn to Rope Flow by a back injury.
    </p>
    <p>    
        After days of debilitating pain and ineffective treatments (which followed years of chronic problems), a friend handed me a rope and showed me two simple, gentle patterns. After twenty minutes my comfortable range of motion had doubled and I was able to walk without wincing. After two days of brief, gentle, consisten practice my back was healed.
    </p>
    <p>
        The purpose of the story above isn't to promise or hint at magical thinking or mystical healing but rather to point out the healing and welness power of clear attention and gentle, rhythmic, integrative movement.
    </p>
    <p>
        Below are some other perspectives on what Rope Flow is, where it came from and what it's good for.
    </p>
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
            <TitleBanner 
                bannerText={<>
                        Morning Rope Flow
                        <br />
                        @ Alameda Beach
                    </>}
                cornerNav={true}
                subText='A six week series on Wednesdays @ 8am'
            />
            <BodySection 
                theme='light'
                title='Details'
                text={seriesDetails}
            />
            <BodySection 
                theme='dark'
                title='What is Rope Flow?'
                text={whatIsRopeFLow}
            />
            <BodySection 
                theme='light'
                title='About this Series'
                text={aboutThisSeries}
            />
            <Bio 
                image='./images/back_to_back.jpg'
                title='About the Facilitator'
            />
            <BodySection 
                theme='light'
                title='More about Rope Flow'
                text={moreAboutRopeFlow}
            />
            <Footer theme='dark' />
        </>
    );
}

export default RopeFlow;