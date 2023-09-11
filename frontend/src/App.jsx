import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navigation from "./customer/components/navigation/Navigation";
import "./input.css";
import { HomePage } from "./customer/pages/HomePage/HomePage";
function App() {
  return (
    <>
    <div>
    <Navigation/> 
    <div>
    <HomePage/>
    </div>
     
    </div>
     
      
    </>
  );
}

export default App;
