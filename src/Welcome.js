import './Welcome.css';

function Welcome({ theme }) {
    return (
        <div className={`banner-sect ${theme}-theme`} >
            <h1>Welcome</h1>
            <div className="row">
                <div className="cell text-cell">
                    <text>Teachings and practices focused on learning to enjoy our bodies. Fun, play, love, creativity, awareness and movement not repetitive, grinding fitness.</text>
                </div>
                <div className="cell head-shot-cell">
                    <img src="./images/nick.png" alt="alt text here" className="head-shot" />
                </div>
            </div>
        </div >
    );
}

export default Welcome;
