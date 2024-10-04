import Hero from '../content_components/Hero';
import ImageLeftTextRight from './ImageLeftTextRight';
import ImageRightTextLeft from '../generic_components/ImageRightTextLeft';
import Offerings from '../content_components/Offerings';
import sectionText from '../SiteCopy';
import Students from '../content_components/Students';
import Welcome from '../Welcome';

const ClassicLanding = () => {
    const {
        fantasies,
        practice,
        teacher,
        welcome,
    } = sectionText;

    return (
        <div className='App'>
            <Hero />
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
                imagePath='./images/nick.png'
                text={teacher['body']}
                theme='light'
                title={teacher['title']}
            />
        </div>
    );
}

export default ClassicLanding;
