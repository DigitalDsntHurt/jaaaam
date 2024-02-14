const Students = ({ theme }) => {
    return (
        <div className={`landing-sect ${theme}-theme`} >
            <h1>Students</h1>
            <div className="students-div-wrapper">
                <div className="students-div-row-1">
                    <div className='student-testimonial-box'>
                        <div className='student-testimonial-text'>"Big quote about working with Nick privately here"</div>
                        <div className='student-attribution-text'>-- Student</div>
                    </div>
                    <div className='student-testimonial-box'>
                        <div className='student-testimonial-text'>"Big quote about working with Nick privately here"</div>
                        <div className='student-attribution-text'>-- Student</div>
                    </div>
                </div>
                <div className="students-div-row-2">
                    <div className='student-testimonial-box'>
                        <div className='student-testimonial-text'>"Big quote about working with Nick privately here"</div>
                        <div className='student-attribution-text'>-- Student</div>
                    </div>
                    <div className='student-testimonial-box'>
                        <div className='student-testimonial-text'>"Big quote about working with Nick privately here"</div>
                        <div className='student-attribution-text'>-- Student</div>
                    </div>
                    <div className='student-testimonial-box'>
                        <div className='student-testimonial-text'>"Big quote about working with Nick privately here"</div>
                        <div className='student-attribution-text'>-- Student</div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Students;
