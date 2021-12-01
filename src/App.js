import React, { Component } from "react";
import "./App.css";
import ShoppingCart from "./components/shoppingcart";
import ProductList from "./components/productList";
import Hero from "./components/hero";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
      total: 0
    };
  }

  // Inventory - we might normally prefer to use a database, but this is a good placeholder.
  inventory = [
    { name: "Apple", price: 1.99 },
    { name: "Loaf of Bread", price: 1.5 },
    { name: "Milk", price: 2.5 }
  ];

  // The add and remove functions should update the state's cart and the total.
  // The add function has been built already. The remove function has not.
  addToShoppingCart = (item) => {
    let total = this.state.total;
    if (item == "Apple") {
      total += 1.99;
    }
    if (item == "Loaf of Bread") {
      total += 1.5;
    }
    if (item == "Milk") {
      total += 2.5;
    }
    this.setState((state) => {
      state.cart.push(item);
      return state;
    });
    this.setState({ total: total });
  };

  removeFromShoppingCart = (item) => {
    const cart = this.state.cart;
    let index = cart.indexOf(item);
    if (index !== -1) {
      cart.splice(index, 1);
    }
    this.setState((state) => {
      return state;
    });
  };

  render() {
    return (
      <div className="App">
        <Hero />
        <ShoppingCart
          items={this.state.cart}
          total={this.state.total}
          inventory={this.inventory}
        />
        <div className="main">
          <ProductList
            inventory={this.inventory}
            add={this.addToShoppingCart}
            remove={this.removeFromShoppingCart}
          />
        </div>
      </div>
    );
  }
}

export default App;
