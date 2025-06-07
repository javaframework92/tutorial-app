import './App.css'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from './pages/Home';
import HTML from './pages/HTML';
import CSS from './pages/CSS';
import JavaScript from './pages/JavaScript';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/html" element={<HTML />}></Route>
          <Route path="/css" element={<CSS />}></Route>
          <Route path="/javascript" element={<JavaScript />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
