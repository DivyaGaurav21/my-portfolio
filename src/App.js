import React from 'react';
import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Experience from './components/experience/Experience';
import Footer from './components/footer/Footer';
import Header from './components/header/Header'
import Idea from './components/idea/Idea';
import Myservice from './components/myservice/Myservice';
import Nav from './components/nav/Nav';
import Portfolio from './components/portfolio/Portfolio';
import Testimonials from './components/testimonials/Testimonials';


function App() {
  return (
      <div className="App">
          <Header />
          <Nav />
          <About />
          <Experience />
          <Myservice />
          <Portfolio />
          <Idea />
          <Testimonials />
          <Contact />
          <Footer />
    </div>
  );
}

export default App;
