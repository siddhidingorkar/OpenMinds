import "./App.css";

import ReactDOM from "react-dom/client";

import Navbar from "./components/navbar";
import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Navbar />
      {/* <Home /> */}
      <AboutUs />
    </div>
  );
}

export default App;
