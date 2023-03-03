import React, { useEffect, useState } from 'react'
import './Buy.css'

export default function Buy(props) {

  // const [basket, setBasket] = useState(0);
  const [data, setData] = useState([]);
  const [buyed, setBuyed] = useState([]);

  useEffect(() => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
    .then(res => {
      return res.json();
    })
    .then(data => {
      setData(data.drinks)
    })
  }, []);

  const addToBasket = function(drink) {
    // setBasket(basket + 1)
    setBuyed(prevBuyed => {
      return [...prevBuyed, drink]
    })
    console.log(drink);
    console.log(buyed);
    props.onCatchBasket(drink)
  }

  return (
    <>
    <div className='cocktailContainer'>

      {data.map(drink => {
        return <li key={drink.idDrink} className='list'>
          <div className='name'>
          <p> <span>Name:</span> {drink.strDrink}</p>
          </div>
          <img src={drink.strDrinkThumb} alt='cocktail'/>
          <div className='ing'>
            <span>ingredients: </span>
            <br></br>
            {drink.strIngredient1} <br></br>
            {drink.strIngredient2} <br></br>
            {drink.strIngredient3} <br></br>
          </div>
            <p> <span className='price'>Price:</span> <br></br> {Math.floor(Math.random() * 10) +1} DKK</p>
            <button onClick={() => {
              addToBasket(drink)
            }}>Add to card</button>
        </li>
      })}

    </div>
    </>
  )
}
