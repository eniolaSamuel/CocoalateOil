import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./views/components/Navbar";
import HomeScreen from "./views/components/HomeScreen";

function App() {
  return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/navbar" element={<Navbar />} />
            <Route path="/home" element={<HomeScreen />} />

          </Routes>
        </BrowserRouter>
      </>
  );
}

export default App;
