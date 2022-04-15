import './styles/App.css'
//import axios from 'axios'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
//import Footer from './components/Footer'
import Landing from './pages/Landing'

const App = () => {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <header className='Nav'>
        <Nav />
      </header>
       <main className="Routes"> 
         <Routes>
          <Route path='/' element={<Landing />}/>
        </Routes>
       </main> 
    </div>
  );
}

export default App;
