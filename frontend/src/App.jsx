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
            <Route path="/payment" element={<Payment />} />
            <Route path="/dashboard" element={<Dashboard />} />
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