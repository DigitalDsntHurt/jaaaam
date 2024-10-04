import './Events.scss';
import { generateDateList } from '../helpers/helpers';

const classStatus = (isCancelled) => {
    return isCancelled ? <>&#x274C; class cancelled</> : <>&#x2705; class confirmed</>
}

const mondayCommunityClass = (isCancelled = false) => (
    <div className='events-grid-event-container'>
        <h4 className='events-grid-event-title'>All Levels Community class ({classStatus(isCancelled)})</h4>
        <h5 className='events-grid-event-time'>7:30am - 8:30am</h5>
        <h5>Mondays @ <a className='events-grid-link' href='https://maps.app.goo.gl/YCatbNWkUsyY3DPa9' target='blank'>Crane Cove Park</a></h5>
        <p className='events-grid-event-description'>
            <strong>What is it?</strong>
            <br />
            In this class we flow through novel movement patterns, mobilize, activate and attend to every part of your body.
            <br />
            <br />
            <strong>Why do it?</strong>
            <br />
            To develop a sustainable lifestyle and foster healthy relationships with yourself, others and your surroundings.
            <br />
            <br />
            <strong>All bodies, abilities and skill levels welcome.</strong>
            <br />
            <br />
            Free / donation-based class
        </p>
    </div>
);

const fridayCommunityClass = (isCancelled = false) => (
    <div className='events-grid-event-container'>
        <h4 className='events-grid-event-title'>All Levels Community class ({classStatus(isCancelled)})</h4>
        <h5 className='events-grid-event-time'>6:30am - 7:30am</h5>
        <h5>Fridays @ <a className='events-grid-link' href='https://maps.app.goo.gl/XMyUnBaFdJv2ZpyD6' target='blank'>Holly Park</a></h5>
        <p className='events-grid-event-description'>
            <strong>What is it?</strong>
            <br />
            In this class we flow through novel movement patterns, mobilize, activate and attend to every part of your body.
            <br />
            <br />
            <strong>Why do it?</strong>
            <br />
            To develop a sustainable lifestyle and foster healthy relationships with yourself, others and your surroundings.
            <br />
            <br />
            <strong>All bodies, abilities and skill levels welcome.</strong>
            <br />
            <br />
            Free / donation-based class
        </p>
    </div>
);

const thursdayMovementImprovisationClass = (isCancelled = false) => (
    <div>
        <h4>Movement Improvisation class ({classStatus(isCancelled)})</h4>
        <h5>All Levels | 12:00pm - 1:00pm | @ <a className='events-grid-link' href='https://maps.app.goo.gl/T1N93v6GAngtesJQ8' target='blank'>The Athletic Playground</a></h5>
        <p>
            The exploration and practice of improvisational movement trains fun, fitness, attention and somatic awareness. It’s a valuable tool to accelerate your learning and mastery of other movement (& non-movement) disciplines. Improvisation is also a powerful tool for developing self practices you love and that serve your long- and short-term artistic, health and longevity goals.
            <br />
            <br />
            In this class we will draw on traditions including (but not limited to) circus, hand balancing, acrobatic flow, floor work, contemporary dance, partner work and somatics. We will sequence and re-sequence movement pathways and experiment with breaking the sequences until organic flow emerges. We will also practice listening deeply to our bodies and to the underlying movement patterns themselves in order to discover and unleash spontaneity, power and flow.
            <br />
            <br />
            <strong>All bodies, skill and experience levels welcome.</strong>
            <br />
            <br />
            Sliding Scale $10-$30
            <br />
            <br />
            <a className='events-grid-link' href='https://momence.com/u/athletic-playground-LXxZWs' target='blank'>Sign up here</a>
        </p>
    </div>
)

const requestToMove = () => {
    return (
        <div>
            No public classes scheduled today.
            <br />
            <br />
            <a className='events-grid-link' href='mailto:grapesdance@gmail.com' target='blank'>Request a private session</a>. | <a className='events-grid-link' href='mailto:grapesdance@gmail.com' target='blank'>Request a workshop</a>.
        </div>
    );
}

function Events() {

    function setClassContent(date) {
        console.log(date.includes('Monday'));

        if (date.includes('Monday')) return mondayCommunityClass()

        if (date.includes('Thursday')) return thursdayMovementImprovisationClass()

        if (date.includes('Friday')) return fridayCommunityClass()

        return requestToMove()
    }

    return (
        <div className='events-page-container'>
            <div className='events-page-title-container'>
                <h1 className='events-page-title'>Class Schedule</h1>
            </div>

            <div className='events-page-events-table-container'>
                <div className='events-table-container'>
                    <div className="grid-table">
                        {
                            generateDateList().map(date =>
                                <>
                                    <div className="grid-item">{date}</div>
                                    <div className="grid-item">{setClassContent(date)}</div>
                                </>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Events;