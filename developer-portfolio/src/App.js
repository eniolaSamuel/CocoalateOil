import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./views/components/Navbar";

function App() {
  return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/navbar" element={<Navbar />} />
          </Routes>
        </BrowserRouter>
      </>
  );
}

export default App;
