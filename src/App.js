import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import About from './Pages/Home/About/About';
import Contact from './Pages/Home/Contact/Contact';
import Navbar from './Pages/Home/Navbar/Navbar';
import Appointment from './Pages/Appointment/Appointment';
import Login from './Pages/Login/Login';
import SingUp from './Pages/Login/SingUp';
import RequireRoute from './Pages/Login/RequireRoute';


function App() {
  return (
	  <div>
		  <Navbar />
		  <Routes>
			  <Route path='/' element={<Home />} />
			  <Route path='/home' element={<Home />} />
			  <Route path='/about' element={<About />} />
			  <Route path='/appointment' element={
				  <RequireRoute>
					  <Appointment />
				  </RequireRoute>
			  } />
			  <Route path='/contact' element={<Contact />} />
			  <Route path='/login' element={<Login />} />
			  <Route path='/signup' element={<SingUp />} />
		  </Routes>
    </div>
  );
}

export default App;
