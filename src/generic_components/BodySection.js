import './BodySection.css';

const BodySection = ({
    text,
    theme,
    title,
}) => {
    return (
        <div className={`landing-sect ${theme}-theme`}>
            <div className='body-section-container'>
                <h1 className='body-section-title'>{title}</h1>
                {text}
            </div>
        </div>
    );
}

export default BodySection;
