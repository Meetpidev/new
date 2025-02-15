import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import ServiceDetails from './pages/ServiceDetail';
import Nutrition from './pages/Nutrition';
import Mental from './pages/Mental';
import Payment from './components/Payment';
import Dashboard from './components/Dashboard';
import Signup from './pages/Signup';
import AddDoctor from './pages/AddDoctor';
import Login from "./pages/Login.jsx"
import Fitness from './pages/Fitness.jsx';
import Excercise from './pages/HandExcercise.jsx';
import HealthScore from './pages/HealthScore.jsx';
import EmotionDetection from './pages/EmotionDetection.jsx';
import DoctorSearch from './pages/DoctorSearch.jsx';


function App() {
  return (
  
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/add-doctor" element={<AddDoctor />} />
            <Route path="/services/personal-training" element={<ServiceDetails />} />
            <Route path="/services/nutrition-planning" element={<Nutrition />} />
            <Route path="/services/mental-wellness" element={<Mental />} />
            <Route path="/services/Hand-Excercise" element={<Excercise />}/>
            <Route path="/services/Health-Score-Predictor" element={<HealthScore />}/>
            <Route path="/services/Emotion-detection" element={<EmotionDetection/>}/>
            <Route path="/services/Search-for-Doctor" element={<DoctorSearch/>}/>
            <Route path="/payment" element={<Payment />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/fitness" element={<Fitness />} /> 
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;