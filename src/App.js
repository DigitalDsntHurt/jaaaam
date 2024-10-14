import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Events from './pages/Events';
import EventsLanding from './pages/EventsLanding';
import CommunityClasses from './pages/CommunityClasses';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CommunityClasses />} />
        <Route path="/events" element={<Events />} />
        <Route path="/community-classes" element={<CommunityClasses />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
