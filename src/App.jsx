import Home from "./routes/home/Home";
import "./App.scss";
import Navbar from "./routes/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  const Shop = () => {
    return <h1>I am a shop</h1>;
  };

  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Navbar showMenu={showMenu} setShowMenu={setShowMenu} />}
          >
            <Route index element={<Home />} />
            <Route path="shop" element={<Shop />} />
          </Route>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
