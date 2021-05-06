import React from 'react';
import Home from './components/Home';
import Header from './components/Header';
import { Counter } from './features/counter/Counter';

import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Home />
    </div>
  );
}

export default App;
