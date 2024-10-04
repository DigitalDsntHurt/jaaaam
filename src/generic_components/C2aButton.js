import './C2aButton.css';

function C2aButton({
    href,
    linkText,
    floatsOverHero,
}) {

    let floatsOverHeroClassName = ''
    if (floatsOverHero) { floatsOverHeroClassName = ' floats-over-hero' }

    return (
        <a className={'c2a-button-link' + floatsOverHeroClassName} href={href} target="blank">{linkText}</a>
    );
}

export default C2aButton;
