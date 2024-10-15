import './Footer.scss';

const Footer = ({ theme }) => {
    return (
        <div className={`footer-container ${theme}-theme`}>
            <div className="footer-links-list-container">
                <div className='footer-link'>
                    <a href='/'>Home</a>
                </div>
                <div className='footer-link'>
                    <a href='/testimonials'>Testimonials</a>
                </div>
                <div className='footer-link'>
                    <a href='/community-classes'>Community Classes</a>
                </div>
                <div className='footer-link'>
                    <a href='/blah-blah'>blahblah</a>
                </div>
            </div>

            <div className='footer-contact-container'>
                Contact Nick: <a href='mailto:grapesdance@gmail.com' target='_blank' rel='noreferrer'>grapesdance@gmail.com</a>
            </div>
        </div>
    );
}

export default Footer;