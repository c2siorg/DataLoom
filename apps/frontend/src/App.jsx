<<<<<<< HEAD

import './App.css'
import {BrowserRouter as Router, Route, Routes, useLocation} from 'react-router-dom'
import DataScreen from './Components/DataScreen';
import HomeScreen from './Components/Homescreen';
import Navbar from './Components/Navbar';
=======
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import DataScreen from "./Components/DataScreen";
import HomeScreen from "./Components/Homescreen";
import Navbar from "./Components/Navbar";
>>>>>>> 47d1ff3 (Fixed Navbar+Menu_Navbar+DataScreen)

function App() {
  return (
    <Router>
      <AppContent />
<<<<<<< HEAD

=======
>>>>>>> 47d1ff3 (Fixed Navbar+Menu_Navbar+DataScreen)
    </Router>
  );
}

<<<<<<< HEAD
function AppContent(){
=======
function AppContent() {
>>>>>>> 47d1ff3 (Fixed Navbar+Menu_Navbar+DataScreen)
  const location = useLocation();

  return (
    <div>
<<<<<<< HEAD
      <Navbar isSmall = {location.pathname === '/data'} />
=======
      <Navbar isSmall={location.pathname === "/data"} />
>>>>>>> 47d1ff3 (Fixed Navbar+Menu_Navbar+DataScreen)
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/data" element={<DataScreen />} />
      </Routes>
    </div>
  );
}

export default App;
