import React from "react";
import './App.css'
import './index.css'
import './style.css'
import { Route , Routes} from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './components/Home/Home'
import About from "./components/About/About";
import Navbar from './components/Navbar/Navbar';
import Mission from './components/Mission/Mission'
import Services from './components/Cards/Cards';
import Contact from './components/Contact/Contact'
import Gallery from "./components/Gallery/Gallery";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  return(
    <>
      <Router >
        <Navbar />
          <Routes>
            <Route index element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/mission' element={<Mission />} />
            <Route path='/services' element={<Services />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/gallery' element={<Gallery/>} />
          </Routes>
      </Router>
    </>
  );
}
export default App;