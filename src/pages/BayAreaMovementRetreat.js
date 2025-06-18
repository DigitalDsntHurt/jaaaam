import ImageRightTextLeft from "../generic_components/ImageRightTextLeft";
import ImageLeftTextRight from "../generic_components/ImageLeftTextRight";
import Footer from "../content_components/Footer";
import TitleBanner from '../generic_components/TitleBanner';

const whatIsBamr = (<>
        <p>Bay Area Movement Retreat (BAMR) is a modular, progressive, dog friendly, contemplative movement offering.</p>
        <p style={{ textIndent: '2em' }}><strong>Modular</strong> : Makes it easy to join based on your schedule and interests. Join for some, join for any, join for all.</p>
        <p style={{ textIndent: '2em' }}><strong>Progressive</strong> : Takes place over five days, each day at a different spectacular outdoor venue.</p>
        <p style={{ textIndent: '2em' }}><strong>Dog Friendly</strong> : Dogs are welcome at all venues and daily schedule includes time for dog care and bonding.</p>
        <p style={{ textIndent: '2em' }}><strong>Contemplative Movement</strong> : Practices that use movement and the body to explore attention and compassion. In Contemplative Movement, movement and meditation practices are interwoven as opposed to just next to eachother or one serving as metaphor for the other.</p>
    </>);

const overview = (<>
    <p>August 18 - August 22, 2025</p>
    <p>6am (roughly sunrise) - 8pm (roughly sunset)</p>
    <p>Locations:</p>
    <p style={{ textIndent: '2em' }}>Alameda Beach, Alameda</p>
    <p style={{ textIndent: '2em' }}>Holly Park, San Francisco</p>
    <p style={{ textIndent: '2em' }}>South Rodeo Beach, Mill Valley</p>
    <p style={{ textIndent: '2em' }}>Reinhardt Redwood Regional Park, Oakland</p>
    <p style={{ textIndent: '2em' }}>China Beach, San Francisco</p>
</>);

const Schedule = () => {
    const cellStyle = {
    border: '1px solid #ddd',
    padding: '8px',
    color: '#333',
    textAlign: 'left',
    };

    const days = ['', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

    const rows = [
    ['6am (sunrise)', 'Arrive, settle'],
    ['6:30am', 'Contemplative Movement'],
    ['7:30am', 'Seated meditation (45 mins)'],

    ['8:45am', 'Breakfast, coffee + tea, doggies time'],
    ['10am', 'CDP (20/20/20)'],
    ['11:30am', 'Journal, reflection, doggies time, down time'],

    ['12:30pm', 'Lunch, down time'],

    ['2pm', 'Seated meditation (45 mins)'],
    ['2:45pm', 'Contemplative Movement'],
    ['3:45pm', 'Seated meditation (45 mins)'],
    ['4:30pm', 'Journal, reflection, doggies time, down time'],
    ['6pm', 'CDP (30/30/30)'],
    ['7:30pm', 'Sunset ritual'],
    ];

    return (<>
        <table style={{
            borderCollapse: 'collapse',
            width: '100%',
        }}>
        <thead>
            <tr>
                {days.map(day => (
            <th key={day} style={cellStyle}>{day}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
            <td style={cellStyle}>{rows[0][0]}</td>
            <td colSpan={5} style={cellStyle}>{rows[0][1]}</td>
        </tr>
        <tr>
            <td style={cellStyle}>{rows[1][0]}</td>
            <td colSpan={5} style={cellStyle}>{rows[1][1]}</td>
        </tr>
        <tr>
            <td style={cellStyle}>{rows[2][0]}</td>
            <td colSpan={5} style={cellStyle}>{rows[2][1]}</td>
        </tr>
        <tr>
            <td style={cellStyle}>{rows[3][0]}</td>
            <td colSpan={5} style={cellStyle}>{rows[3][1]}</td>
        </tr>
        <tr>
            <td style={cellStyle}>{rows[4][0]}</td>
            <td colSpan={5} style={cellStyle}>{rows[4][1]}</td>
        </tr>
        <tr>
            <td style={cellStyle}>{rows[5][0]}</td>
            <td colSpan={5} style={cellStyle}>{rows[5][1]}</td>
        </tr>
        <tr>
            <td style={cellStyle}>{rows[6][0]}</td>
            <td colSpan={5} style={cellStyle}>{rows[6][1]}</td>
        </tr>
        <tr>
            <td style={cellStyle}>{rows[7][0]}</td>
            <td colSpan={5} style={cellStyle}>{rows[7][1]}</td>
        </tr>
        <tr>
            <td style={cellStyle}>{rows[8][0]}</td>
            <td colSpan={5} style={cellStyle}>{rows[8][1]}</td>
        </tr>
        <tr>
            <td style={cellStyle}>{rows[9][0]}</td>
            <td colSpan={5} style={cellStyle}>{rows[9][1]}</td>
        </tr>
        <tr>
            <td style={cellStyle}>{rows[10][0]}</td>
            <td colSpan={5} style={cellStyle}>{rows[10][1]}</td>
        </tr>
        <tr>
            <td style={cellStyle}>{rows[11][0]}</td>
            <td colSpan={5} style={cellStyle}>{rows[11][1]}</td>
        </tr>
        <tr>
            <td style={cellStyle}>{rows[12][0]}</td>
            <td colSpan={5} style={cellStyle}>{rows[12][1]}</td>
        </tr>
      </tbody>
    </table>
</>);
}

const BayAreaMovementRetreat = () => {

    return (
        <>
            <TitleBanner bannerText='Bay Area Movement Retreat' />
            <ImageRightTextLeft
                imagePath='./images/road_to_water.png'
                text={whatIsBamr}
                theme='light'
                title='What is Bay Area Movement Retreat (BAMR)?'
            />
            <ImageLeftTextRight
                imagePath='./images/holly_park.png'
                text={overview}
                theme='dark'
                title='BAMR 2025 Overview'
            />
            <div className='landing-sect light-theme'>
                <h1>BAMR 2025 Daily Schedule</h1>
                <div>
                    {Schedule()}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default BayAreaMovementRetreat;