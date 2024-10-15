import './CommunityClasses.scss';
import { getNUpcomingDates } from '../helpers/helpers';
import Hero from '../generic_components/Hero';
import ImageRightTextLeft from '../generic_components/ImageRightTextLeft';
import ImageLeftTextRight from '../generic_components/ImageLeftTextRight';
import { communityClassText, teacherTextV2 } from '../content_components/siteCopy';

const UpcomingClassesList = (classDates) => {
    return (
        <div className='upcoming-class-dates-container'>
            {classDates.map(date => {
                return (
                    <div key={date}>
                        <>&#x2705;</> {date} - <span className='green-text'>class confirmed</span>
                    </div>
                );
            })}
        </div>
    );
}

const CommunityClassInfoGrid = () => (
    <div className="page-container">
        <div className="community-class-detail-grid-container">
            <div className="community-class-detail-grid-item border-bottom">
                <h2>Every Monday</h2>
                <h3>
                    7:30 - 8:30am
                    <br />
                    <a href='https://maps.app.goo.gl/SzD6powfenukDuyq6' target='_blank' rel='noreferrer'>@ Crane Cove Park</a>
                </h3>
                <div className="community-class-detail-upcoming-classes-container">
                    <h3>Upcoming classes</h3>
                    {
                        UpcomingClassesList(
                            getNUpcomingDates(3, 'monday')
                        )
                    }
                </div>
            </div>
            <div className="community-class-detail-grid-item">
                <h2>Every Friday</h2>
                <h3>
                    6:30 - 7:30am
                    <br />
                    <a href='https://maps.app.goo.gl/vtCBtioTxic36dLs9' target='_blank' rel='noreferrer'>@ Holly Park Playground</a>
                </h3>
                <div className="community-class-detail-upcoming-classes-container">
                    <h3>Upcoming classes</h3>
                    {
                        UpcomingClassesList(
                            getNUpcomingDates(3, 'friday')
                        )
                    }
                </div>
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
                imagePath='./images/road_to_water.png'
                text={communityClassText}
                theme='light'
                title='About Community Classes'
            />
            <ImageLeftTextRight
                imagePath='./images/teaching.jpg'
                text={teacherTextV2}
                theme='dark'
                title="Organizer bio"
            />
        </>
    );
}

export default CommunityClasses;
