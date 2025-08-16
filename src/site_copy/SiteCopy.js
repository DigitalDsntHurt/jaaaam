const welcomeText = {
    title: 'This is for you.',
    body: (
        <>
            <p>
                Move your body.
            </p>
            <p>
                Bring awareness to your body.
            </p>
            <p>
                Discover the delights that follow.
            </p>
        </>
    ),
};

//
// //
// // // //
// // // // // ESSAYS
// // // //
// // 
//

const fantasiesText = {
    title: 'Fantasies',
    body: (
        <>
            <p>
                We treat our bodies badly. Or we ignore them. We keep still and quiet. We eat and move with shame. We are embarrassed to drag this flesh suit around behind us as we walk through life.
            </p>
            <p>
                It's not our fault. It's a byproduct of living in a world that admires a narrow set of ideals and people. For instance: nearly all the "exercise", "fitness", "training" you've come across in your life is modeled on one of three fantasies: (1) The Olympian (2) The Soldier (3) The Ballerina.
            </p>
            <p>
                But you don't need to be an Olympian, a soldier or a ballerina. You don't need to be muscular, limber or thin to be healthy. You don't need to model yourself on someone else's ideas of beauty, strength or freedom.
            </p>
            <p>
                Physical practices exist that will keep you safe, healthy and whole on your own terms, without beating you over the head with arbitrary and unfair ideals.
            </p>
            <p>
                Want to start learning about these practices? Get in touch by emailing <a href='mailto:grapesdance@gmail.com'>grapesdance@gmail.com</a>.
            </p>
        </>
    ),
};

const practiceText = {
    title: 'Movement Classes for Everyone',
    body: (
        <>
            <p>
                Work with the material of the body.
            </p>
            <p>
                Seek curiosity and caring, spontaneity, creativity and compassion through movement. Most of all, seek fun and pleasure. Not stories about fun and pleasure but the real thing. Felt by you in your body.
            </p>
            <p>
                <strong>It is possible to learn to move in a way that feels fun and pleasurable forever</strong>.
            </p>
            <p>
                Although you don't need to know about any of these, this teaching draws inspiration from many traditions including:
                calisthenics,
                improvisational dance modalities,
                mindfulness,
                qigong,
                somatics,
                tai-chi,
                the Feldenkrais Method,
                the Ido Portal Method,
                weight sharing games,
                yoga,
                and many more beautiful movement communities and teachers around the world.
            </p>
            <p>
                Love to move. Love yourself. Love your body. Love the people and things around you.
            </p>
        </>
    )
};

//
// //
// // // //
// // // // // BIOS
// // // //
// // 
//

// Oct 15, 2024 - used on homepage v1
const teacherText = {
    title: 'Who am i?',
    body: (
        <>
            <p>
                Hi, I'm Nick.
            </p>
            <p>
                I'm a movement teacher in the Dogpatch neighborhood of San Francisco. I focus on movement and awareness practices that are fun, caring, kind, gentle and (if you're into this kind of thing) wild.
            </p>
            <p>
                I was born and grew up in San Francisco (Upper Haight) and currently I'm obsessed with SF- and neighborhood-level community and community movement practices. In previous lives I've been a founder, sofware engineer, product manager, urban farmer, data-driven sports gambler and journalist. What unites these? A curious desire to solve problems in elegant and funny ways.
            </p>
            <p>
                If you're looking to learn about non-violent movement practices intended to serve you for the rest of your life, get in touch for a free intro by emailing <a href='mailto:grapesdance@gmail.com'>grapesdance@gmail.com</a>.
            </p>
        </>
    ),
};

// as of Jan 27, 2025
const bioText = (
    <>
        <p>I'm Nick - a maker, mover, dancer, meditator, facilitator, organizer and companion.</p>
        <p>My offerings are based on deep practices of listening, meditation and movement which explore attention, togetherness, self- and community-healing and play.</p>
        <p>I was born and grew up in San Francisco and in previous lives I've been a founder, sofware engineer, urban farmer, data-driven sports gambler and journalist.</p>
        <p>I offer meditation and movement experiences, events, classes, workshops, series and private sessions.</p>
        <p>For upcoming work, see <a href='/'>Upcoming Events</a></p>
        <p>To book or ask questions : <a href='mailto:grapesdance@gmail.com' target='_blank' rel='noreferrer'>grapesdance@gmail.com</a>.</p>
    </>
);

// Homepage Bio as of Jan 26, 2025
const bioBannerText = (
    <>
        <p>Nick (LaLa) Smith offers meditation and movement workshops, group classes, private sessions and bodywork.</p>
        To book or ask questions: <a href='mailto:grapesdance@gmail.com' target='_blank' rel='noreferrer'>grapesdance@gmail.com</a>
    </>

);

//
// //
// // // //
// // // // // TEACHING MATERIAL
// // // //
// // 
//

const communityClassText = (
    <>
        <h3>What are Community Classes?</h3>
        <p>
            Free / donation-based classes in public spaces for movers of all ages, skill levels and body types.
        </p>
        <p>These Community Classes aim to introduce Holistic Movement and to build and strengthen neighborhood community. While Holistic Movement is about connecting to your own body and heart, Community Classes are a way of connecting to a sense of place.</p>
        <p>Community classes take many forms and as a facilitator I aim to be sensitive to the real-time needs of participants. Many sessions include:</p>
        <li>Mindfulness prompts (ex: listen to the sound scape, move hands apart during exhale, closer during inhale).</li>
        <li>Guided, exploratory movement flows (ex: research ways of getting up and down from the earth).</li>
        <li>Movement games (ex: follow a partner's hand with your nose, balance an object on various body parts).</li>
        <li>Movement patterns that blossom into larger flows or related functional patterns.</li>
        <p>In all cases we explore physical form with curiosity and make decisions that work for our attention and for our bodies.</p>
        <p>As a facilitator, I bring both injury and trauma informed approaches to the material.</p>

        <h3>What is Holistic Movement?</h3>
        <p>
            Holistic Movement is a physical movement practice that prioritizes embodied attention over external form.
        </p>
        <p>
            Holistic Movement is inquiry-based, listening-based and uses the body to heal and grow physically, emotionally and spiritually.
        </p>
        <p>
            This practice is interested in sacredness, silliness and aims to make everything we do comfortable for all bodies, hearts and minds.
        </p>
    </>
);

const sectionText = {
    fantasies: fantasiesText,
    practice: practiceText,
    teacher: teacherText,
    welcome: welcomeText,
};

export default sectionText;
export {
    bioBannerText,
    communityClassText,
    bioText,
}