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
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {

  const styles = {
    dog: {
      color: "blue",
    backgroundColor: "green"}
  }

  return (
    <BrowserRouter>
<h1 style={styles.dog}>hello</h1>
      <Header/>

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
    </BrowserRouter>

  );
}

export default App;

