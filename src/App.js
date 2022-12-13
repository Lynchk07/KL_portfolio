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
import {BrowserRouter as  Router,Routes, Route} from 'react-router-dom';

function App() {

  const styles = {
    navbar: {
      color: "white",
    backgroundColor: "black",
    justifyContent: "center",
  },

  footer: {
    color: "yellow",
  backgroundColor: "black",
  justifyContent: "center",
},
  }

  return (
    <Router>
      <h1 style={styles.navbar}><Header/></h1>

      <Routes>
          <Route 
            path='/' 
            element={<About/>} 
            //default home page
          />
          
           <Route 
            path='/portfolio' 
            element={<Portfolio/>} 
          />
          
          <Route 
            path='/Resume' 
            element={<Resume/>} 
          />
          
          <Route 
            path='/Contact' 
            element={<Contact/>} 
          />
          
      </Routes>

    <Footer/>
    </Router>

  );
}

export default App;

