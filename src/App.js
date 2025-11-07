import './App.scss';
import { Analytics } from "@vercel/analytics/react"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SpeedInsights } from "@vercel/speed-insights/react"
import BayAreaMovementRetreat from './pages/BayAreaMovementRetreat';
import BlahBlah from './pages/BlahBlah';
import CommunityClasses from './pages/CommunityClasses';
import ContactImprovisation from './pages/ContactImprovisation';
import HomePage from './pages/HomePage';
import PastEvents from './pages/PastEvents';
import RopeFlow from './pages/RopeFlow';
import Testimonials from './pages/Testimonials';
import UpcomingEvents from './pages/UpcomingEvents';
import CdpFridayGroup from './pages/CdpFridayGroup';
import PracticeNotes from './pages/PracticeNotes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/bamr" element={<BayAreaMovementRetreat />} />
        <Route path="/blah-blah" element={<BlahBlah />} />
        <Route path="/community-classes" element={<CommunityClasses />} />
        <Route path="/contact-improvisation" element={<ContactImprovisation />} />
        <Route path="/events" element={<UpcomingEvents />} />
        <Route path="/past-events" element={<PastEvents />} />
        <Route path="/rope-flow" element={<RopeFlow />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/cdp-friday-group" element={<CdpFridayGroup />} />
        <Route path="/practice-notes" element={<PracticeNotes />} />
      </Routes>
      <Analytics />
      <SpeedInsights />
    </BrowserRouter>
  );
}

export default App;
