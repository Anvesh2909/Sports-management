import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/Nav';
import Events from './components/Events';
import Scores from './components/Scores';
import Teams from './components/Teams';
import About from './components/About';
import EventPage from './components/EventPage';

const App = () => {
  return (
    <Router>
      <div className='flex flex-col min-h-screen m-5'>
        {/* Navigation Bar */}
        <NavBar />

        {/* Routes for different pages */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/events' element={<Events />} />
          <Route path='/scores' element={<Scores />} />
          <Route path='/teams' element={<Teams />} />
          <Route path='/about' element={<About />} />
          <Route path='/events/:eventId' element={<EventPage />} /> {/* Use dynamic route for event details */}
        </Routes>
      </div>
      <About/>
    </Router>
  );
};

export default App;