import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./views/LandingPage";

function App() {
  return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/landingPage" element={<LandingPage />} />
          </Routes>
        </BrowserRouter>
      </>
  );
}

export default App;
