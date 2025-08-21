import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BlahBlah from './pages/BlahBlah';
import CommunityClasses from './pages/CommunityClasses';
import HomePage from './pages/HomePage';
import PastEvents from './pages/PastEvents';
import Testimonials from './pages/Testimonials';
import UpcomingEvents from './pages/UpcomingEvents';
import BayAreaMovementRetreat from './pages/BayAreaMovementRetreat';
import RopeFlow from './pages/RopeFlow';
import ContactImprovisation from './pages/ContactImprovisation';

import { Analytics } from "@vercel/analytics/react"

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
      </Routes>
      <Analytics />
    </BrowserRouter>
  );
}

export default App;
