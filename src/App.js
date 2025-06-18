import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BlahBlah from './pages/BlahBlah';
import CommunityClasses from './pages/CommunityClasses';
import HomePage from './pages/HomePage';
import PastEvents from './pages/PastEvents';
import Testimonials from './pages/Testimonials';
import UpcomingEvents from './pages/UpcomingEvents';
import BayAreaMovementRetreat from './pages/BayAreaMovementRetreat';

import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blah-blah" element={<BlahBlah />} />
        <Route path="/community-classes" element={<CommunityClasses />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/past-events" element={<PastEvents />} />
        <Route path="/events" element={<UpcomingEvents />} />
        <Route path="/bamr" element={<BayAreaMovementRetreat />} />
      </Routes>
      <Analytics />
    </BrowserRouter>
  );
}

export default App;
