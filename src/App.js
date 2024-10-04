import './App.scss';
import Events from './Events';
import EventsLanding from './EventsLanding';



import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {



  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EventsLanding />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </BrowserRouter>


  );
}

export default App;
