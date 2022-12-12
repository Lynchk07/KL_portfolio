import React from 'react';
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Navbarr from './components/Navbarr';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Contact from './components/Contact';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div>

      <Header/>

      <Routes>
          <Route 
            path='/' 
            element={<Navbarr/>} 
          />
          <Route 
            path='/' 
            element={<About/>} 
            //default home page
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
      </Routes>

      <Footer/>
    </div>

  );
}

export default App;

