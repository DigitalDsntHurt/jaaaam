import './App.scss';
import { Analytics } from "@vercel/analytics/react"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SpeedInsights } from "@vercel/speed-insights/react"
import BayAreaMovementRetreat from './pages/BayAreaMovementRetreat';
import BlahBlah from './pages/BlahBlah';
import CommunityClasses from './pages/CommunityClasses';
import ContactImprovisation from './pages/ContactImprovisation';
import HomePage from './pages/HomePage';
import HomePageV2 from './pages/HomePageV2';
import PastEvents from './pages/PastEvents';
import RopeFlow from './pages/RopeFlow';
import Testimonials from './pages/Testimonials';
import UpcomingEvents from './pages/UpcomingEvents';
import CdpFridayGroup from './pages/CdpFridayGroup';
import PracticeNotes from './pages/PracticeNotes';
import WhatIsCdp from './pages/WhatIsCdp';
import MyBody from './pages/MyBody';
import BodyWork from './pages/BodyWork';
import PrivateSessions from './pages/PrivateSessions';
import ContactForPartners from './pages/ContactForPartners';
import YouthWork from './pages/YouthWork';
import HospiceWork from './pages/HospiceWork';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home-v2" element={<HomePageV2 />} />
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
        <Route path="/what-is-cdp" element={<WhatIsCdp />} />
        <Route path="/my-body" element={<MyBody />} />
        <Route path="/bodywork" element={<BodyWork />} />
        <Route path="/private-sessions" element={<PrivateSessions />} />
        <Route path="/contact-for-partners" element={<ContactForPartners />} />
        <Route path="/youth-work" element={<YouthWork />} />
        <Route path="/hospice-work" element={<HospiceWork />} />
      </Routes>
      <Analytics />
      <SpeedInsights />
    </BrowserRouter>
  );
}

export default App;
