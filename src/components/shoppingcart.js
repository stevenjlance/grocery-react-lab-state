import React from "react";
import "./shoppingcart.css";

function ShoppingCart(props) {
  //console.log(props.inventory)
  if (props.items.length == 0) {
    return (
      <div className="ShoppingCart">
        <h3>No items in the shopping cart 🙄</h3>
      </div>
    );
  } else {
    return (
      <div className="ShoppingCart">
        {props.items.map((item) => {
          const element = props.inventory.find(
            (element) => element.name == item
          );
          console.log(element.price);
          return (
            <div className="cartItem">
              <h3>{item}</h3>
              <h5>${element.price} </h5>
            </div>
          );
        })}

        <h2>Total: ${props.total}</h2>
      </div>
    );
  }
}

export default ShoppingCart;
