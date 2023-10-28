import React from 'react';
import './styles/App.css';
import { BrowserRouter} from 'react-router-dom';
import Navbar from './components/UI/navbar/Navbar';
import AppRouting from './components/AppRouting';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <AppRouting/>
    </BrowserRouter>
  );
}

export default App;
