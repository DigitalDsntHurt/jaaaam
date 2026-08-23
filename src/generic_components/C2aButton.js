import './C2aButton.css';

// New-tab is opt-in via openInNewTab — its one current usage (Hero.js, on
// the Community Classes page) links to /events, an internal route, and
// shouldn't pop a new tab. The old hardcoded target="blank" was also just a
// typo for "_blank", not a real new-tab target, on top of forcing it always.
function C2aButton({
    href,
    linkText,
    floatsOverHero,
    openInNewTab,
}) {

    let floatsOverHeroClassName = ''
    if (floatsOverHero) { floatsOverHeroClassName = ' floats-over-hero' }

    const newTabProps = openInNewTab ? { target: '_blank', rel: 'noreferrer' } : {};

    return (
        <a className={'c2a-button-link' + floatsOverHeroClassName} href={href} {...newTabProps}>{linkText}</a>
    );
}

export default C2aButton;
