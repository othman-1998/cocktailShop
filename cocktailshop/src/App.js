import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";


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
  
  return (
    <>
      <Navbar/>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/buy" element={<Buy onCatchBasket={CatchBasket}/>}/>
          <Route path="/basket" element={<Basket customerBasket={mybasket} />}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
