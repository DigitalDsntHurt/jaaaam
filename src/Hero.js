import './Hero.css';

function Hero() {
    return (
        <div className={`banner-sect`} >
            <h1 className="banner-image-title">Move</h1>
            {/* <text className="banner-image-text">Your body, your mind, your life: free, fun, easy.</text> */}
            <img id="banner1" src="./images/diagonal_stretch.png" className="banner-image" alt="alt text here" />
            {/* <img id="banner2" src="./images/half_moon.png" className="banner-image" alt="alt text here" /> */}
            {/* <img id="banner3" src="./images/sisyphus_squat.png" className="banner-image" alt="alt text here" /> */}
            {/* <img id="banner4" src="./images/sisyphus_split_leg.png" className="banner-image" alt="alt text here" /> */}
        </div >
    );
}

export default Hero;
