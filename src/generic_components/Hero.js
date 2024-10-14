import C2aButton from "../generic_components/C2aButton";

const SunriseHero = ({ img, headline, button }) => {
    return (
        <div className={`banner-sect`} >
            <h1 className="hero-image-title outlined-text">{headline}</h1>
            {button ? <C2aButton floatsOverHero={true} href={'/events'} linkText={'Click for class schedule'} /> : <></>}
            <img alt="sunrise community class" className="hero-image" src={`./images/${img}`} />
        </div >
    );
}

export default SunriseHero;
