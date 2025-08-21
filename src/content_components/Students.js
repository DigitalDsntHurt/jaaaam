const Students = ({ theme }) => {
    return (
        <div className={`landing-sect ${theme}-theme`} style={{ marginTop: '-8vh' }}>
            <div className="students-div-wrapper">
                {/* DAN */}
                <div className="students-div-row-full">
                    <div className='student-testimonial-box'>
                        <div className='student-testimonial-text'>
                            "Nick is an inspiration. With an easy, charismatic style, he choreographs movements that stretch, relax, and explore the healthful positions of the body.  As a former professional athlete, he knows the needs of high-performance competitors, but he is now more concerned with the philosophy of balanced movement – the Tao of bodies thriving in space, not striving for a place on a podium.  He explains what he wants you to do with humor and with an articulate, well-educated knowledge of the physiology of movement.  The result is an enduring feeling of energy… and calm, and it feels wonderful."
                        </div>
                        <div className='student-attribution-text'>-- Dan H.</div>
                    </div>
                </div>
                <div className="students-div-row-1">
                    {/* VIC */}
                    <div className='student-testimonial-box'>
                        <div className='student-testimonial-text'>
                            "Working with Nick has been such an enlightening experience. He challenges me to step away from my comfort zone, encouraging me to do things I wasn't sure I could do. I feel safe with Nick's coaching because of his experience and because he understands my abilities and limitations. He works with me at a level I'm comfortable with, yet he continually challenges me with new movements and movement concepts. Nick keeps our workouts fun, and he adjusts as necessary."
                        </div>
                        <div className='student-attribution-text'>-- Vic E.</div>
                    </div>
                    {/* TRAVIS */}
                    <div className='student-testimonial-box'>
                        <div className='student-testimonial-text'>
                            "My experience of moving with Nick is having a partner who is light-hearted and focused. When learning from him, it's obvious how thoughtful he is about the material. He's adaptive to whoever he's with at the present moment and what they need."
                        </div>
                        <div className='student-attribution-text'>-- Travis J.</div>
                    </div>
                </div>
                {/* EMMA */}
                <div className="students-div-row-full">
                    <div className='student-testimonial-box'>
                        <div className='student-testimonial-text'>
                            "Nick is an amazing mover and human. As a student alongside him I've witnessed him show up with deep curiosity, openness and humility both to the movement practice and to the people involved with it. Nick is very humble and creative and alive in his practice! When our teachers left town, Nick and I shared a movement practice together and he consistently showed up with new materials and questions. He has a gift for keeping novelty alive which helps create an environment of growth and fun! And he brings both accountability and laughter to the practice and community, which is rare. I've also been blessed to witness Nick grow as a teacher. He is very good at witnessing and listening to people to understand where they are and what they are wanting for themselves - and he creates custom programming that is engaging and works."
                        </div>
                        <div className='student-attribution-text'>-- Emma A.</div>
                    </div>
                </div>
                {/* Deanna */}
                <div className="students-div-row-full">
                    <div className='student-testimonial-box'>
                        <div className='student-testimonial-text'>
                            "I am someone who prioritizes my physical health. I typically work out by running, I have a Peloton, I do bodyweight exercises, etc., but Movement allows me space for a different kind of connection with–and respect for–my body.

                            With almost constant signal to push harder, do better, and go faster, what I’ve learned with Nick is that strength and what is “best” can be more nuanced than a specific achievement. Replacing achievement with attention has given me room for curiosity, exploration, learning about my body, and ultimately, a new definition of what is best. It’s also just fun. As opposed to a workout that you’re just trying to get over with, removing the “have to dos” adds playfulness and joy in moving that I haven’t experienced in a long time.

                            All to say, movement won’t replace your Peloton, but I’ve found it gives me a much more holistic approach to my physical health and connection with my body, understanding its capabilities and limitations, and thoughtfulness of what I want to do about it."
                        </div>
                        <div className='student-attribution-text'>-- Deanna U.</div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Students;
