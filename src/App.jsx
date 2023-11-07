import { useState } from "react";
//import About from "./components/AboutUs";
//import Navbar from "./components/navbar";
import HomePage from "./components/Home";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <HomePage />
    </div>
  );
}

export default App;
