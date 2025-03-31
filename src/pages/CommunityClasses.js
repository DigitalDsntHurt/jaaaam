import './CommunityClasses.scss';
import { communityClassText } from '../site_copy/SiteCopy';
import Bio from '../content_components/Bio';
import Footer from '../content_components/Footer';
import Hero from '../generic_components/Hero';
import ImageRightTextLeft from '../generic_components/ImageRightTextLeft';

const CommunityClassInfoGrid = () => (
    <div className="page-container">
        <div className="community-class-detail-grid-container">
            <div className="community-class-detail-grid-item">
                <h2>Community Classes are currently paused</h2>
                <h4>To request a community class in your neighborhood email <a href='mailto:grapesdance@gmail.com' target='_blank' rel='noreferrer'>grapesdance@gmail.com</a></h4>
            </div>
        </div >
    </div>
);

const CommunityClasses = () => {
    return (
        <>
            <Hero
                alt='sunrise community classes at crane cove park and holly park'
                button={false}
                headline='Community Classes'
                img='sunrise_sliver.png'
            />
            <CommunityClassInfoGrid />
            <ImageRightTextLeft
                imagePath='./images/backbend_hair_color.png'
                text={communityClassText}
                theme='light'
                title='About Community Classes'
            />
            <Bio />
            <Footer theme='light' />
        </>
    );
}

export default CommunityClasses;
