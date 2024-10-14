import './Hero.scss';
import C2aButton from "../generic_components/C2aButton";

const SunriseHero = ({ alt, img, headline, button }) => {
    return (
        <div className='generic-hero' >
            <h1 className="generic-hero-image-title outlined-text">{headline}</h1>
            {button ? <C2aButton floatsOverHero={true} href={'/events'} linkText={'Click for class schedule'} /> : <></>}
            <img alt={alt} className="generic-hero-image" src={`./images/${img}`} />
        </div >
    );
}

export default SunriseHero;
