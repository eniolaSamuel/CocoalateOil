import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./views/components/Navbar";
import HomeScreen from "./views/components/HomeScreen";
import About from "./views/components/About";

function App() {
  return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/navbar" element={<Navbar />} />
            <Route path="/home" element={<HomeScreen />} />
            <Route path="/about" element={<About />} />

          </Routes>
        </BrowserRouter>
      </>
  );
}

export default App;
