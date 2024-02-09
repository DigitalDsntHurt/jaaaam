import './Students.css';

const Students = ({ theme }) => {
    return (
        <div className={`landing-sect ${theme}-theme`} >
            <h1>Students</h1>
            <div className="students-div-wrapper">
                <div className="students-div-row-1">
                    <div class='student-testimonial-box'>
                        <text>"Big quote about working with Nick privately here" -- Student</text>
                    </div>
                    <div class='student-testimonial-box'>
                        <text>"Big quote about working with Nick in community classes here" -- Student</text>
                    </div>
                </div>
                <div className="students-div-row-2">
                    <div class='student-testimonial-box'>
                        <text>"Big quote about working with Nick in community classes here" -- Student</text>

                    </div>
                    <div class='student-testimonial-box'>
                        <text>"Big quote about working with Nick in community classes here" -- Student</text>
                    </div>
                    <div class='student-testimonial-box'>
                        <text>"Big quote about working with Nick in community classes here" -- Student</text>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Students;
