import React from "react";
import { Routes, Route } from "react-router-dom";
import './index.css';
import Main from "./Components/Main";
import About from "./Components/About";
import PayWindow from "./Components/PayWindow";
import Header from "./Components/Header";
import Achivmets from "./Components/Achivmets";
import Customers from "./Components/Customers";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Routes>
        
        <Route path="/" element={<Main />} />
        <Route path="/pay" element={<PayWindow />} />
      </Routes>

    
   

    </>
  );
}

export default App;
