import React from 'react'
import './Basket.css'

export default function Basket(props) {

  console.log("basket js");
  console.log(props.customerBasket);


  const UI = props.customerBasket.length > 0 ?     <div className='checkOut'>
  <h3>Checkout</h3>
  <hr className='hr'></hr>
  {props.customerBasket.map((drink) => {
  return <>
    <ul className='ul'>
      <li>{drink.strDrink}</li>
      <li>x1</li>
    </ul>
  </> 
})}

<div className='paymentcontainer'>
  <h3>Credit card details</h3>
  <hr className='hr'></hr>

  <div className='boxOne'>
    <div className='cardholder'>
      <label>Cardholder</label> <br></br>
      <input placeholder='Card Holder'></input>
    </div>

    <div>
      <label>Expiration date</label> <br></br>
      <input placeholder='MM'></input> <span> / </span>
      <input placeholder='YY'></input>
    </div>
  </div>

  <div className='boxtwo'>
    <div className='cardnumber'>
        <label>Card number</label> <br></br>
        <input placeholder='Card Number'></input>
    </div>

    <div className='cardholder'>
      <label>CVC</label> <br></br>
      <input placeholder='CVC'></input>
    </div>
  </div>

  <button className='buy'>Buy Cocktails</button>

</div>
</div> : <p className='emptyBasket'>Your shopping basket is empty</p>


  return (
    <>
    {UI}
    </>
  )
}
