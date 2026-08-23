import '../styles/Tidepool.scss';
import Footer from '../content_components/Footer';
import TitleBanner from '../generic_components/TitleBanner';

const NotFound = () => {
    return (
        <div className='tidepool-theme'>
            <TitleBanner
                bannerText="Page Not Found"
                cornerNav={true}
                subText={<p style={{ textAlign: 'center' }}>That page doesn't exist. <a href='/'>Head back home</a>.</p>}
            />
            <Footer theme='dark' />
        </div>
    );
}

export default NotFound;
