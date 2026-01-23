import { useState } from "react";
import { pizzaCart } from "../pizzas";
import "../componentes/cart.css";

const Cart = () => {
  const [cart, setCart] = useState(pizzaCart);

  const addPizza = (id) => {
    setCart((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, count: p.count + 1 } : p
      )
    );
  };

  const substractPizza = (id) => {
    setCart((prev) =>
      prev
        .map((p) =>
          p.id === id ? { ...p, count: p.count - 1 } : p
        )
        .filter((p) => p.count > 0)
    );
  };

  const total = cart.reduce(
    (acc, pizza) => acc + pizza.price * pizza.count,
    0
  );

 return (
  <main>
    <h2>Detalles del pedido:</h2>

    <div className="listaPizzas">
      {cart.map((pizza) => (
        <div className="itemPizza" key={pizza.id}>

          <div className="imgPizzaContainer">
            <img src={pizza.img} alt={pizza.name} />
          </div>

          <div className="detallePizza">
            <h4>{pizza.name}</h4>
            <h4>{pizza.price}</h4>
          </div>

          <div className="botones">
            <button
              className="btnMinus"
              onClick={() => substractPizza(pizza.id)}
            >
              -
            </button>

            <span>{pizza.count}</span>

            <button
              className="btnPlus"
              onClick={() => addPizza(pizza.id)}
            >
              +
            </button>
          </div>

        </div>
      ))}
    </div>

    <h3>Total: ${total}</h3>
    <button className="btnpago">Pagar</button>
  </main>
);
};

export default Cart;