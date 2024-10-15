import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BannerBioSchedule from './pages/BannerBioSchedule';
import CommunityClasses from './pages/CommunityClasses';
import EventsLanding from './pages/EventsLanding';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CommunityClasses />} />
        <Route path="/blah-blah" element={<EventsLanding />} />
        <Route path="/community-classes" element={<CommunityClasses />} />
        <Route path="/home" element={<EventsLanding />} />
        <Route path="/banner-bio-sched" element={<BannerBioSchedule />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
