import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./views/LandingPage";
import {AboutUs} from "./views/AboutUs";
import {Ingredients} from "./views/Ingredients";
import {AmlaOil} from "./views/IngredientBreakdown/AmlaOil";
import {ArganOil} from "./views/IngredientBreakdown/ArganOil";
import {CastorOil} from "./views/IngredientBreakdown/CastorOil";
import {CoconutOil} from "./views/IngredientBreakdown/CoconutOil";
import {EucalyptusOil} from "./views/IngredientBreakdown/EucalyptusOil";
import {FenugreekOil} from "./views/IngredientBreakdown/FenugreekOil";
import {IndigoPowder} from "./views/IngredientBreakdown/IndigoPowder";
import {JojobaOil} from "./views/IngredientBreakdown/JojobaOil";
import {LavenderOil} from "./views/IngredientBreakdown/LavenderOil";
import {OliveOil} from "./views/IngredientBreakdown/OliveOil";

function App() {
  return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/aboutUsPage" element={<AboutUs />} />
            <Route path="/ingredients" element={<Ingredients />} />
            <Route path="/ingredients/amlaBenefits" element={<AmlaOil />} />
            <Route path="/ingredients/arganBenefits" element={<ArganOil />} />
            <Route path="/ingredients/castorBenefits" element={<CastorOil />} />
            <Route path="/ingredients/coconutOilBenefits" element={<CoconutOil />} />
            <Route path="/ingredients/eucalyptusOilBenefits" element={<EucalyptusOil />} />
            <Route path="/ingredients/fenugreekOilBenefits" element={<FenugreekOil />} />
            <Route path="/ingredients/indigoPowderBenefits" element={<IndigoPowder />} />
            <Route path="/ingredients/jojobaOilBenefits" element={<JojobaOil />} />
            <Route path="/ingredients/lavenderOilBenefits" element={<LavenderOil />} />
            <Route path="/ingredients/oliveOilBenefits" element={<OliveOil />} />
          </Routes>
        </BrowserRouter>
      </>
  );
}

export default App;
