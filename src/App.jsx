// import { useState } from 'react'
// import { Suspense } from "react";
import "./App.css";
import Banner from "./components/Banner";
import Navbar from "./components/navbar";
// import TechStackList from "./components.jsx/TechStackSelector/TechStackList";
import TechStackSection from "./components/TechStackSection/TechStackSection";

// One place to control the whole brand gradient
export const BRAND_GRADIENT =
  "bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <TechStackSection></TechStackSection>
      {/* <Suspense>
        <TechStackList></TechStackList>
      </Suspense> */}
      {/* <img src="https://icon.icepanel.io/Technology/svg/Figma.svg" alt="" /> */}
    </div>
  );
}

export default App;
