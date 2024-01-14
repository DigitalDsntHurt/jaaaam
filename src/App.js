import './App.css';
import Welcome from './Welcome';
import HeroSlider from './HeroSlider';
import Students from './Students';

function App() {
  return (
    <div className="App">
      <HeroSlider />
      <Welcome />
      <div className="landing-sect dark-theme">
        <h1>Vision</h1>
        <text>Your body is a miracle. Learn to enjoy it.</text>
      </div>
      <div className="landing-sect light-theme">
        <h1>Let's move together</h1>
        <div className="sexy-cell-container">
          <div className="sexy-cell"><text>Private Sessions</text></div>
          <div className="sexy-cell"><text>Community Classes</text></div>
          <div className="sexy-cell"><text>Programs for Seniors</text></div>
          <div className="sexy-cell"><text>Private Ski Lessons</text></div>
        </div>
      </div>
      <Students theme="dark" />
    </div>
  );
}

export default App;
