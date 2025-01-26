import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BannerBioSchedule from './pages/BannerBioSchedule';
import BlahBlah from './pages/BlahBlah';
import CommunityClasses from './pages/CommunityClasses';
import Testimonials from './pages/Testimonials';
import PastEvents from './pages/PastEvents';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BannerBioSchedule />} />
        <Route path="/blah-blah" element={<BlahBlah />} />
        <Route path="/community-classes" element={<CommunityClasses />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/past-events" element={<PastEvents />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
