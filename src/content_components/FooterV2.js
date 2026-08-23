import './FooterV2.scss';

const FooterV2 = () => {
    return (
        <div className='footer-v2-container dark-theme'>
            <div className='footer-v2-wordmark'>Listen. Shine. Repeat.</div>

            <div className='footer-v2-grid'>
                <div className='footer-v2-column'>
                    <div className='footer-v2-label'>Explore</div>
                    <a href='/'>Home</a>
                    <a href='/testimonials'>Testimonials</a>
                    <a href='/events'>Upcoming Events</a>
                    <a href='/past-events'>Past Events</a>
                </div>

                <div className='footer-v2-column'>
                    <div className='footer-v2-label'>Offerings</div>
                    <a href='/bodywork'>Bodywork</a>
                    <a href='/private-sessions'>Private Sessions</a>
                    <a href='/contact-for-partners'>Contact For Couples</a>
                    <a href='/youth-work'>Youth Work</a>
                    <a href='/end-of-life-caregiving'>End of Life Caregiving</a>
                </div>

                <div className='footer-v2-column'>
                    <div className='footer-v2-label'>Newsletters</div>
                    <a href='https://forms.gle/Dr1PLVPzeULtcBGa8' target='_blank' rel='noreferrer'>All Offerings</a>
                    <a href='https://forms.gle/DqCh2SNphUHvzHtL6' target='_blank' rel='noreferrer'>CDP Practice</a>
                </div>
            </div>

            <div className='footer-v2-contact'>
                Contact Nick : <a href='mailto:grapesdance@gmail.com' target='_blank' rel='noreferrer'>grapesdance@gmail.com</a>
            </div>
        </div>
    );
}

export default FooterV2;
