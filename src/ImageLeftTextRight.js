import './ImageLeftTextRight.css';

const ImageLeftTextRight = ({
    imagePath,
    text,
    theme,
    title,
}) => {
    return (
        <div className={`landing-sect ${theme}-theme`}>
            <div className='image-left-text-right-container'>
                <img alt={imagePath} className='image-left-text-right-image' src={imagePath} />
                <div className='image-left-text-right-text'>
                    <h1 className='image-left-text-right-title'>{title}</h1>
                    {text}
                </div>
            </div>
        </div>
    );
}

export default ImageLeftTextRight;
