import './App.css';
import HeroSlider from './HeroSlider';
import Offerings from './Offerings';
import Students from './Students';
import Vision from './Vision';
import Welcome from './Welcome';

function App() {
  return (
    <div className="App">
      <HeroSlider />
      <Welcome theme="dark" />
      <Vision theme="light" />
      <Offerings theme="dark" />
      <Students theme="light" />
    </div>
  );
}

export default App;
