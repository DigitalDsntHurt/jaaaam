import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Events from './pages/Events';
import EventsLanding from './pages/EventsLanding';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EventsLanding />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
