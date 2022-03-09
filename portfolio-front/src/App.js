import React from 'react';
import Navbar from './components/navbar/Navbar';
import Home from './pages/Home';
import './App.css';


function App() {
  return (
    <div className="App">
      <div className='test'>
      <Navbar />
      <Home />
      </div>
    </div>
  );
}

export default App;
