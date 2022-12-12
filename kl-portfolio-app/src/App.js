import React from 'react';
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Contact from './components/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route 
            path='./components/About' 
            element={<About/>} 
          />
           <Route 
            path='./components/Portfolio' 
            element={<Portfolio/>} 
          />
          <Route 
            path='./components/Resume' 
            element={<Resume/>} 
          />
          <Route 
            path='./components/Contact' 
            element={<Contact/>} 
          />
          <Route 
            path='./components/Footer' 
            element={<Footer/>} 
          />
        </Routes>
      </>
    </Router>

  );
}

export default App;

