const Students = ({ theme }) => {
    return (
        <div className={`landing-sect ${theme}-theme`} >
            <h1>Students</h1>
            <div className="students-div-wrapper">
                <div className="students-div-row-1">
                    {/* VIC */}
                    <div className='student-testimonial-box'>
                        <div className='student-testimonial-text'>
                            "Working with Nick has been such an enlightening experience. He challenges me to step away from my comfort zone, encouraging me to do things I wasn’t sure I could do. I feel safe with Nick’s coaching because of his experience and because he understands my abilities and limitations. He works with me at a level I’m comfortable with, yet he continually challenges me with new movements and movement concepts. Nick keeps our workouts fun, and he adjusts as necessary."
                        </div>
                        <div className='student-attribution-text'>-- Vic</div>
                    </div>
                    {/* TRAVIS */}
                    <div className='student-testimonial-box'>
                        <div className='student-testimonial-text'>
                            "My experience of moving with Nick is having a partner who is light-hearted and focused. When learning from him, it’s obvious how thoughtful he is about the material. He’s adaptive to whoever he’s with at the present moment and what they need."
                        </div>
                        <div className='student-attribution-text'>-- Travis</div>
                    </div>
                </div>
                <div className="students-div-row-2">
                    <div className='student-testimonial-box'>
                        <div className='student-testimonial-text'>"Testimonial quote about working with Nick here"</div>
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
                </div>
            </div>
        </div >
    );
}

export default Students;
