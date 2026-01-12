import Header from "./Header";
import CardPizza from "./CardPizza";
import { pizzas } from "../pizzas";

const Home = () => {
  return (
    <>
    
        <Header></Header>
    
<div className="productos">
        {pizzas.map((pizza) => (
          <CardPizza
            key={pizza.id}
            imagen={pizza.img}
            productName={pizza.name}
            ingreDientes={pizza.ingredients}
            precio={pizza.price}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
