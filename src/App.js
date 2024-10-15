import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Events from './pages/Events';
import EventsLanding from './pages/EventsLanding';
import CommunityClasses from './pages/CommunityClasses';
import BannerBioSchedule from './pages/BannerBioSchedule';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CommunityClasses />} />
        <Route path="/blah-blah" element={<EventsLanding />} />
        <Route path="/community-classes" element={<CommunityClasses />} />
        <Route path="/events" element={<Events />} />
        <Route path="/home" element={<EventsLanding />} />
        <Route path="/banner-bio-sched" element={<BannerBioSchedule />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
