import React from "react";
import Home from "./Home";
import Cart from "./Cart"
import { CartProvider } from "react-use-cart";



function App() {
  return (
    <div className="App">
      <CartProvider>
    <Home/>
    <Cart/>
    </CartProvider>
    </div>
  );
}

export default App;
