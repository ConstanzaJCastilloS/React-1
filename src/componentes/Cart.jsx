import { useState } from "react";
import "./cart.css";
import { pizzaCart } from "../pizzas";



const Cart = ({ listaPizzas, setListaPizzas }) => {
  const addPizza = (pizza) => {
    setListaPizzas((prev) =>
      prev.map((p) => (p.id === pizza.id ? { ...p, count: p.count + 1 } : p))
    );
  };

  const substractPizza = (pizza) => {
    setListaPizzas((prev) =>
      prev.map((p) =>
        p.id === pizza.id ? { ...p, count: Math.max(0, p.count - 1) } : p)
    );
  };

  return (
    <main>
      <h2>Detalles del pedido:</h2>
      <div className="listaPizzas">
        {listaPizzas.map((pizza) => (
          <div className="itemPizza" key={pizza.id}>
            <div className="imgPizzaContainer">
              <img src={pizza.img} alt="" />
            </div>
            <div className="detallePizza">
              <h4>Pizza {pizza.name}</h4>
              <h4>(pizza.price)</h4>
            </div>
            <div className="botones">
              <button className="btnMinus" onClick={() => substractPizza(pizza)}>-</button>
              <p>{pizza.count}</p>
              <button className="btnPlus" onClick={() => addPizza(pizza)}>+</button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Cart;