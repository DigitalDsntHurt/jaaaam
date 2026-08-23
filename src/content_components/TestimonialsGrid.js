import './TestimonialsGrid.scss';

// Reuses the same .student-testimonial-box/-text/-attribution-text classes
// as Students.js, so any testimonials rendered here already match its look
// (including the Tidepool overrides) — just laid out as a plain responsive
// grid instead of that component's bespoke fixed layout.
const TestimonialsGrid = ({ testimonials, theme }) => {
    const isOddCount = testimonials.length % 2 !== 0;

    return (
        <div className={`landing-sect ${theme}-theme`}>
            <div className='testimonials-grid'>
                {testimonials.map(({ text, attribution }, index) => {
                    const isLead = index === 0 && isOddCount;
                    return (
                        <div
                            className={`student-testimonial-box${isLead ? ' testimonial-box-full' : ''}`}
                            key={attribution}
                        >
                            <div className='student-testimonial-text'>{text}</div>
                            <div className='student-attribution-text'>{attribution}</div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default TestimonialsGrid;
