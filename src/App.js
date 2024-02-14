import './App.scss';
import { sectionText } from './SiteCopy';
import Hero from './Hero';
import ImageLeftTextRight from './ImageLeftTextRight';
import ImageRightTextLeft from './ImageRightTextLeft';
import Offerings from './Offerings';
import Students from './Students';
import Welcome from './Welcome';

function App() {
  return (
    <div className='App'>
      <Hero />
      <Welcome text={sectionText['welcome']()} theme='dark' />
      <ImageRightTextLeft
        imagePath='./images/grains.png'
        theme='light'
        title='The Practice'
        text={sectionText['practice']()}
      />
      <Offerings theme='dark' />
      <ImageLeftTextRight
        imagePath='./images/beans.png'
        theme='light'
        title='Fantasies'
        text={sectionText['fantasies']()}
      />
      <Students theme='dark' />
      <ImageRightTextLeft
        imagePath='./images/nick.png'
        theme='light'
        title='Teacher'
        text={sectionText['teacher']()}
      />
    </div>
  );
}

export default App;
