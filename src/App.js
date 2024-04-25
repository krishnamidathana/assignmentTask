import Navbar from "./components/Navbar";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import { HashRouter as Router, Routes, Route } from "react-router-dom"; // Change BrowserRouter to HashRouter

function App() {
  return (
    <div>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Page1 />} />
          <Route path="/findDoctors" element={<Page2 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
