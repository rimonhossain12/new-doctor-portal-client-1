import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import About from './Pages/Home/About/About';
import Contact from './Pages/Home/Contact/Contact';
import Navbar from './Pages/Home/Navbar/Navbar';
import Appointment from './Pages/Appointment/Appointment';


function App() {
  return (
	  <div>
		  <Navbar />
		  <Routes>
			  <Route path='/' element={<Home />} />
			  <Route path='/home' element={<Home />} />
			  <Route path='/about' element={<About />} />
			  <Route path='/appointment' element={<Appointment />} />
			  <Route path='/contact' element={<Contact />} />
		  </Routes>
    </div>
  );
}

export default App;
