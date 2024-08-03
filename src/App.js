import React from 'react';
import HomePage from './components/Homepage/HomePage';
import SecondSection from './components/Homepage/SecondSection';
import ThirdSection from './components/Homepage/ThirdSection';
import Footer from './components/Homepage/Footer';
import ServicesSection from './components/Homepage/ServicesSection';


function App() {
  return (
    <div className="App">
    <HomePage />
     <SecondSection />
     <ThirdSection />
     <ServicesSection />
     <Footer /> 
    </div>
  );
}

export default App;
