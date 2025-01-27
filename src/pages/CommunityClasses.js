import './CommunityClasses.scss';
import { communityClassText, teacherTextV2 } from '../content_components/SiteCopy';
// import { getNUpcomingDates } from '../helpers/helpers';
import Footer from '../content_components/Footer';
import Hero from '../generic_components/Hero';
import ImageLeftTextRight from '../generic_components/ImageLeftTextRight';
import ImageRightTextLeft from '../generic_components/ImageRightTextLeft';

// const numberOfWeeksToDisplay = 5;
// const cancelDates = [
//     'Friday, November 22, 2024',
//     'Monday, November 25, 2024',
//     'Friday, November 29, 2024',
//     'Monday, December 2, 2024',
//     'Monday, December 23, 2024',
//     'Monday, December 30, 2024',
//     'Friday, January 3, 2025',
// ];

// const UpcomingClassesList = (classDates) => {
//     return (
//         <div className='upcoming-class-dates-container'>
//             {classDates.map(date => {
//                 return (
//                     <div key={date}>
//                         {
//                             cancelDates.includes(date)
//                                 ? <><>&#x274C;</> {date} - <span className='red-text'>class cancelled</span></>
//                                 : <><>&#x2705;</> {date} - <span className='green-text'>class confirmed</span></>
//                         }
//                     </div>
//                 );
//             })}
//         </div>
//     );
// }

const CommunityClassInfoGrid = () => (
    <div className="page-container">
        <div className="community-class-detail-grid-container">
            <div className="community-class-detail-grid-item">
                <h2>Community Classes are currently paused</h2>
                <h4>To request a community class in your neighborhood email <a href='mailto:grapesdance@gmail.com' target='_blank' rel='noreferrer'>grapesdance@gmail.com</a></h4>
            </div>
            {/* <div className="community-class-detail-grid-item border-bottom">
                <h2>Every Monday</h2>
                <h3>
                    7:30 - 8:30am
                    <br />
                    <a href='https://maps.app.goo.gl/SzD6powfenukDuyq6' target='_blank' rel='noreferrer'>@ Crane Cove Park</a>
                </h3>
                <div className="community-class-detail-upcoming-classes-container">
                    <h3>Upcoming classes</h3>
                    {UpcomingClassesList(getNUpcomingDates(numberOfWeeksToDisplay, 'monday'))}
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
                    {UpcomingClassesList(getNUpcomingDates(numberOfWeeksToDisplay, 'friday'))}
                </div>
            </div> */}
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
            <ImageLeftTextRight
                imagePath='./images/teaching.jpg'
                text={teacherTextV2}
                theme='dark'
                title="Organizer bio"
            />
            <Footer theme='light' />
        </>
    );
}

export default CommunityClasses;
