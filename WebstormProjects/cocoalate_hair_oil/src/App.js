import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./views/LandingPage";
import {AboutUs} from "./views/AboutUs";
import {Ingredients} from "./views/Ingredients";
import {AmlaOil} from "./views/AmlaOil";
import {ArganOil} from "./views/ArganOil";

function App() {
  return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/aboutUsPage" element={<AboutUs />} />
            <Route path="/ingredients" element={<Ingredients />} />
            <Route path="/amlaBenefits" element={<AmlaOil />} />
            <Route path="/arganBenefits" element={<ArganOil />} />
          </Routes>
        </BrowserRouter>
      </>
  );
}

export default App;
