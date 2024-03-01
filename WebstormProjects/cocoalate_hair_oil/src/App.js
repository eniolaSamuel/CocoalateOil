import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./views/LandingPage";
import {AboutUs} from "./views/AboutUs";

function App() {
  return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/aboutUsPage" element={<AboutUs />} />
          </Routes>
        </BrowserRouter>
      </>
  );
}

export default App;
