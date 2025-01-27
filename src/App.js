import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BlahBlah from './pages/BlahBlah';
import CommunityClasses from './pages/CommunityClasses';
import HomePage from './pages/HomePage';
import PastEvents from './pages/PastEvents';
import Testimonials from './pages/Testimonials';
import UpcomingEvents from './pages/UpcomingEvents';

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
