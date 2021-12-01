import React from "react";

function Product(props) {
  return (
    <div className="Product">
      <h2>{props.name.name}</h2>
      <h3>${props.name.price}</h3>
      <div className="buttons">
        <button
          onClick={() => {
            props.add(props.name.name);
          }}
        >
          Add
        </button>
        <button
          onClick={() => {
            props.remove(props.name.name);
          }}
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default Product;
