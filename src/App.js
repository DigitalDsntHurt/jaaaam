import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BannerBioSchedule from './pages/BannerBioSchedule';
import CommunityClasses from './pages/CommunityClasses';
import EventsLanding from './pages/archive/EventsLanding';
import Testimonials from './pages/Testimonials';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BannerBioSchedule />} />
        <Route path="/blah-blah" element={<EventsLanding />} />
        <Route path="/community-classes" element={<CommunityClasses />} />
        <Route path="/testimonials" element={<Testimonials />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
