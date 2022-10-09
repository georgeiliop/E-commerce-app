import Home from "./routes/home/Home";
import "./App.scss";
import Navbar from "./routes/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Authentication from "./routes/authentication/Authentication";
import Shop from "./routes/shop/Shop";

const App = () => {
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
            <Route path="authentication" element={<Authentication />} />
          </Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
