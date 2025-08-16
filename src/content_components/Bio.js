import { bioText } from '../site_copy/SiteCopy';
import ImageLeftTextRight from "../generic_components/ImageLeftTextRight"

const Bio = ({ image, title, theme }) => {
    const imagePath = image || './images/flattered.png';
    const titleText = title || 'About Nick'
    return (
        <>
            <ImageLeftTextRight
                imagePath={imagePath}
                text={bioText}
                theme={theme}
                title={titleText}
            />
        </>
    )

};
export default Bio;