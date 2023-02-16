import './App.css';
import Drawer from "./components/layout/Drawer";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import TrackShipment from "./components/pages/TrackShipment";
import Pricing from "./components/pages/Pricing";
import Products from "./components/pages/Products";
import { useState } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
function App() {
    const [drawer, setDrawer] = useState(false);
    const [t, i18n] = useTranslation();
    const drawerHandler = ()=>{
        setDrawer((prev:boolean)=>!prev);
    }

    useEffect(()=>{
      i18n.changeLanguage(localStorage.getItem("lang")?.toString()||'en');
    },[])

    return (
      <div className='App'>

          <Router basename='/'>
          <Navbar drawerHandler={drawerHandler} t={t} i18n={i18n}/>
          <Drawer drawer={drawer} t={t} drawerHandler={drawerHandler}/>
              <Routes>
                  <Route path="/" element={<Home t={t}/>}/>
                  <Route path="/TrackShipment" element={<TrackShipment t={t}/>}/>
                  <Route path="/Products" element={<Products/>}/>
                  <Route path="/Pricing" element={<Pricing/>}/>
              </Routes>
          </Router>
      </div>
    );
}

export default App;
