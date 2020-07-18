import React from 'react';
import './App.css';
import RandomTaco from './components/RandomTaco'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Header />
      <RandomTaco />
      <Footer />
    </div>
  );
}

export default App;
