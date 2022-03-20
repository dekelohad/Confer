import React from 'react';
import {
  Hero,
  About,
  Speaking,
  Schedule,
  Pricing,
  Sponsors,
  Blog,
  Contact,
  Footer,
} from './components';
import './App.css';

const App = () => (
  <React.Fragment>
    <Hero />
    <About />
    <Speaking />
    <Schedule />
    <Pricing />
    <Sponsors />
    <Blog />
    <Contact />
    <Footer />
  </React.Fragment>
);
export default App;
