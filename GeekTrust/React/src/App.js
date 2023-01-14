import "./App.css";
import Home from "./pages/Home";
import React, { useState } from "react";
import Cart from "./pages/Cart";
import Header from "./components/Header";

function App() {
  const [cart, setCart] = useState([]);
  const [mode, setmode] = useState(true);

  const handleMode = () => {
    setmode((prev) => !prev);
  };

  const cartOption = {
    cart,
    setCart,
  };
  return (
    <div className="">
      <Header handleMode={handleMode} />

      {mode ? <Home {...cartOption} /> : <Cart {...cartOption} />}
    </div>
  );
}

export default App;
