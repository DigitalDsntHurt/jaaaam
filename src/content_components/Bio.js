import { bioText } from '../content_components/SiteCopy';
import ImageLeftTextRight from "../generic_components/ImageLeftTextRight"

const Bio = ({ theme }) => {
    return (
        <>
            <ImageLeftTextRight
                imagePath='./images/flattered.png'
                text={bioText}
                theme={theme}
                title="About Nick"
            />
        </>
    )

};
export default Bio;