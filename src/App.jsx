import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Usuarios from './views/Usuarios'
import Camareros from './views/Camareros'
import Header from './components/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {


  return (
    <>
    <Router>
    <header style={{ top: 0, position: "absolute"}}>
        <Header />
      </header>
      <main>
          <Routes>
            <Route path="/" element={<Usuarios />} />
            <Route path="/camareros" element={<Camareros />} />
          </Routes>
      </main>
      <footer>

      </footer>
    </Router>
    </>
  )
}

export default App
