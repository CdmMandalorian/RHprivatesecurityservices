import React from "react";
import './App.css'
import './index.css'
import './style.css'
import { Route , Routes} from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './Assets/components/Home/Home';
import About from "./Assets/components/About/About";
import Navbar from './Assets/components/Navbar/Navbar';
import Mission from './Assets/components/Mission/Mission'
import Services from './Assets/components/Cards/Cards';
import Contact from './Assets/components/Contact/Contact'
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
          </Routes>
      </Router>
    </>
  );
}
export default App;