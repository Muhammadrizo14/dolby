import React, { useEffect, useRef } from 'react';
import './assets/scss/App.scss';
import Header from './components/Header';
import Banner from './components/Banner/Banner';
import Features from './components/Features/Features';
import Contact from './components/Contact/Contact';
import Marketplace from './components/Marketplace/Marketplace';
import Recent from './components/Recent/Recent';
import Footer from './components/Footer/Footer';

function App() {

  const ball = useRef<HTMLDivElement>(null)

  return (
    <>
      {/* <div className="ball" ref={ball}></div> */}
      <div className='wrapper'>
        <Header />
        <main>
          <Banner />
          <Features />
          <Contact />
          <Marketplace />
          <Recent />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
