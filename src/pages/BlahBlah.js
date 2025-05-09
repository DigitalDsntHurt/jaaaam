import Welcome from "../generic_components/Welcome";
import ImageRightTextLeft from "../generic_components/ImageRightTextLeft";
import ImageLeftTextRight from "../generic_components/ImageLeftTextRight";
import Offerings from "../content_components/Offerings";
import Students from "../content_components/Students";
import sectionText from "../site_copy/SiteCopy";
import { bioText } from "../site_copy/SiteCopy";
import Footer from "../content_components/Footer";

const BlahBlah = () => {
    const {
        fantasies,
        practice,
        welcome,
    } = sectionText;

    return (
        <>
            <Welcome
                text={welcome['body']}
                theme='dark'
                title={welcome['title']}
            />
            <ImageRightTextLeft
                imagePath='./images/grains.png'
                text={practice['body']}
                theme='light'
                title={practice['title']}
            />
            <Offerings theme='dark' />
            <ImageLeftTextRight
                imagePath='./images/beans.png'
                text={fantasies['body']}
                theme='light'
                title={fantasies['title']}
            />
            <Students theme='dark' />
            <ImageRightTextLeft
                imagePath='./images/head_down.jpg'
                text={bioText}
                theme='light'
                title='Bio'
            />
            <Footer />
        </>
    );
}

export default BlahBlah;