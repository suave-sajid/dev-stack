import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Navbar from "./components/navbar";
import TechStackSection from "./components/TechStackSection/TechStackSection";

// One place to control the whole brand gradient
export const BRAND_GRADIENT =
  "bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600";

function App() {
  return (
    <div>
      <ToastContainer />
      <Navbar></Navbar>
      <Banner></Banner>
      <TechStackSection></TechStackSection>
      <Footer />
    </div>
  );
}

export default App;
