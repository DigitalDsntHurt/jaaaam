import MainHero from '../../content_components/MainHero';
import ImageLeftTextRight from '../../generic_components/ImageLeftTextRight';
import ImageRightTextLeft from '../../generic_components/ImageRightTextLeft';
import Offerings from '../../content_components/Offerings';
import sectionText from '../../content_components/siteCopy';
import Students from '../../content_components/Students';
import Welcome from '../../generic_components/Welcome';

const ClassicLanding = () => {
    const {
        fantasies,
        practice,
        teacher,
        welcome,
    } = sectionText;

    return (
        <div className='App'>
            <MainHero />
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
