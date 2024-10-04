import C2aButton from "../generic_components/C2aButton";

function Hero() {
    return (
        <div className={`banner-sect`} >
            <h1 className="hero-image-title">Move</h1>
            <C2aButton floatsOverHero={true} href={'/events'} linkText={'Click for class schedule'} />
            <img alt="half moon pose" className="hero-image" src="./images/half_moon.png" />
        </div >
    );
}

export default Hero;
