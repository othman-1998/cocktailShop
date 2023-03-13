import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Buy from './components/Buy'
import Basket from './components/Basket'
import Home from './components/Home'
import { Route, Routes } from "react-router-dom";


function App() {

  const [mybasket, setBasket] = useState([]);

  const CatchBasket = function(basket) {
    console.log("fra app.js");
    console.log(basket);
    setBasket(prevbasket => {
      return [...prevbasket, basket]
    })

    console.log(mybasket);
  }

  const buyedItems = function() {
    console.log("Ordered!!!");
  }

  return (
    <>
      <Navbar/>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/buy" element={<Buy onCatchBasket={CatchBasket}/>}/>
          <Route path="/basket" element={<Basket onBuy={buyedItems} customerBasket={mybasket} />}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
