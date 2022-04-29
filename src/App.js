import React from 'react';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Interests from './Components/Interests/Interests';
import Footer from './Components/Footer/Footer';
import styles from './index.css';


export default function App() {
return (
  <div className="app-container">
    <Hero/>
    <About/>
    <Interests/>
    <Footer/>
  </div>)
}
