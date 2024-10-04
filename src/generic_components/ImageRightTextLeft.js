import './ImageRightTextLeft.css';

const ImageRightTextLeft = ({
    imagePath,
    text,
    theme,
    title,
}) => {
    return (
        <div className={`landing-sect ${theme}-theme`}>
            <div className='image-right-text-left-container'>
                <div className='image-right-text-left-text'>
                    <h1 className='image-right-text-left-title'>{title}</h1>
                    {text}
                </div>
                <img alt={imagePath} className='image-right-text-left-image' src={imagePath} />
            </div>
        </div>
    );
}

export default ImageRightTextLeft;
