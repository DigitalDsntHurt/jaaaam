const Students = ({ theme }) => {
    return (
        <div className={`landing-sect ${theme}-theme`} >
            <h1>Students</h1>
            <div className="students-div-wrapper">
                <div className="students-div-row-1">
                    {/* VIC */}
                    <div className='student-testimonial-box'>
                        <div className='student-testimonial-text'>
                            "Working with Nick has been such an enlightening experience. He challenges me to step away from my comfort zone, encouraging me to do things I wasn't sure I could do. I feel safe with Nick's coaching because of his experience and because he understands my abilities and limitations. He works with me at a level I'm comfortable with, yet he continually challenges me with new movements and movement concepts. Nick keeps our workouts fun, and he adjusts as necessary."
                        </div>
                        <div className='student-attribution-text'>-- Vic</div>
                    </div>
                    {/* TRAVIS */}
                    <div className='student-testimonial-box'>
                        <div className='student-testimonial-text'>
                            "My experience of moving with Nick is having a partner who is light-hearted and focused. When learning from him, it's obvious how thoughtful he is about the material. He's adaptive to whoever he's with at the present moment and what they need."
                        </div>
                        <div className='student-attribution-text'>-- Travis</div>
                    </div>
                </div>
                <div className="students-div-row-full">
                    <div className='student-testimonial-box'>
                        <div className='student-testimonial-text'>
                            "Nick is an amazing mover and human. As a student alongside him I've witnessed him show up with deep curiosity, openness and humility both to the movement practice and to the people involved with it. Nick is very humble and creative and alive in his practice! When our teachers left town, Nick and I shared a movement practice together and he consistently showed up with new materials and questions. He has a gift for keeping novelty alive which helps create an environment of growth and fun! And he brings both accountability and laughter to the practice and community, which is rare. I've also been blessed to witness Nick grow as a teacher. He is very good at witnessing and listening to people to understand where they are and what they are wanting for themselves - and he creates custom programming that is engaging and works."
                        </div>
                        <div className='student-attribution-text'>-- Emma</div>
                    </div>
                </div>
                {/* <div className="students-div-row-2">
                    <div className='student-testimonial-box'>
                        <div className='student-testimonial-text'>
                            ""
                        </div>
                        <div className='student-attribution-text'>-- Student</div>
                    </div>
                    <div className='student-testimonial-box'>
                        <div className='student-testimonial-text'>"Testimonial quote about working with Nick here"</div>
                        <div className='student-attribution-text'>-- Student</div>
                    </div>
                    <div className='student-testimonial-box'>
                        <div className='student-testimonial-text'>"Testimonial quote about working with Nick here"</div>
                        <div className='student-attribution-text'>-- Student</div>
                    </div>
                </div> */}
                <div >
                    Email <a className="offering-c2a" href='mailto:grapesdance@gmail.com'>grapesdance@gmail.com</a> to learn about the practice.
                </div>
            </div>
        </div >
    );
}

export default Students;
