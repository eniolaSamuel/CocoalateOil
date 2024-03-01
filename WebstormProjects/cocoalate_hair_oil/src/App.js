import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./views/LandingPage";
import {AboutUs} from "./views/AboutUs";
import {Ingredients} from "./views/Ingredients";
import {AmlaOil} from "./views/IngredientBreakdown/AmlaOil";
import {ArganOil} from "./views/IngredientBreakdown/ArganOil";
import {CastorOil} from "./views/IngredientBreakdown/CastorOil";
import {CoconutOil} from "./views/IngredientBreakdown/CoconutOil";

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
            <Route path="/castorBenefits" element={<CastorOil />} />
            <Route path="/coconutOilBenefits" element={<CoconutOil />} />
          </Routes>
        </BrowserRouter>
      </>
  );
}

export default App;
