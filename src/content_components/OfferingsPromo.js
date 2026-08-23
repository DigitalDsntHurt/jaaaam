import './OfferingsPromo.scss';

const offerings = [
    {
        title: 'Bodywork',
        blurb: 'Precise, hands-on corrective massage in the tradition of The Berry Method®, to help old injuries, stiffness and tension find their way back to place.',
        href: '/bodywork',
        cta: 'Learn more',
    },
    {
        title: 'Private Sessions',
        blurb: 'One-on-one movement, meditation and somatic coaching, built entirely around you — your body, your questions, your pace.',
        href: '/private-sessions',
        cta: 'Learn more',
    },
    {
        title: 'Contact For Couples',
        blurb: 'Contact Improvisation for couples and partnerships — a playful, embodied way to build trust and communication together.',
        href: '/contact-for-partners',
        cta: 'Learn more',
    },
    {
        title: 'Youth Work',
        blurb: 'Weekly parkour, acrobatics and movement play for kids — wild, creative and mindful, grouped by age.',
        href: '/youth-work',
        cta: 'Learn more',
    },
    {
        title: 'End of Life Caregiving',
        blurb: 'Gentle, presence-based movement and companionship work for people in hospice care and their families.',
        href: '/end-of-life-caregiving',
        cta: 'Learn more',
    },
];

const OfferingsPromo = () => {
    return (
        <div className='landing-sect light-theme'>
            <div className='offerings-promo-title'>Ways We Can Work Together</div>
            <div className='offerings-promo-grid'>
                {offerings.map(({ title, blurb, href, cta, badge }, index) => {
                    const isLeadCard = index === 0 && offerings.length % 2 !== 0;
                    return (
                        <div className={`offering-promo-card${isLeadCard ? ' offering-promo-card-full' : ''}`} key={title}>
                            {badge && <div className='offering-promo-badge'>{badge}</div>}
                            <div className='offering-promo-title'>{title}</div>
                            <div className='offering-promo-blurb'>{blurb}</div>
                            <a className='offering-promo-cta' href={href}>{cta}</a>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default OfferingsPromo;
