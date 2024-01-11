import './ImageBanner.css';

function ImageBanner({ theme }) {
    return (
        <div className={`landing-sect ${theme}-theme`} >
            <h1 className="banner-image-title">Move</h1>
            <text className="banner-image-text">Your body, your mind, your life: free, fun, easy.</text>
            <img src="./shot.png" className="banner-image" alt="alt text here" />
        </div >
    );
}

export default ImageBanner;
