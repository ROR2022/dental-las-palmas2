import React from 'react';
///import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import {HashRouter, Routes, Route} from 'react-router-dom';
import MiCita from './components/MiCita';
import MisArticulos from './components/MisArticulos';
import MiGaleria from './components/MiGaleria';
import Mipago from './components/Mipago';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/cita' element={<MiCita/>}/>
          <Route path='/pagos' element={<Mipago/>}/>
          <Route path='/articulos' element={<MisArticulos/>}/>
          <Route path='/galeria' element={<MiGaleria/>}/>
        </Routes>
            
      </HashRouter>
    </div>
  );
}

export default App;
