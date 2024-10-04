import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Events from './Events';
import EventsLanding from './EventsLanding';

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
