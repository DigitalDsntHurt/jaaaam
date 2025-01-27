import { teacherTextV2 } from '../content_components/SiteCopy';
import ImageLeftTextRight from "../generic_components/ImageLeftTextRight"

const Bio = () => (
    <ImageLeftTextRight
        imagePath='./images/teaching.jpg'
        text={teacherTextV2}
        theme='dark'
        title="Organizer bio"
    />
);
export default Bio;