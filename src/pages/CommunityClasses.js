import './CommunityClasses.scss';
import { getNUpcomingDates } from '../helpers/helpers';

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

const CommunityClasses = () => {
    return (
        <div className="page-container">
            <h1 className="center-text">Community Classes</h1>
            <div className="community-class-detail-grid-container">
                <div className="community-class-detail-grid-item border-bottom">
                    <h2>Every Monday</h2>
                    <h3>
                        7:30 - 8:30am
                        <br />
                        <a href='https://maps.app.goo.gl/SzD6powfenukDuyq6' target='_blank'>@ Crane Cove Park</a>
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
                        <a href='https://maps.app.goo.gl/vtCBtioTxic36dLs9' target='_blank'>@ Holly Park Playground</a>
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
        </div >
    );
}

export default CommunityClasses;
