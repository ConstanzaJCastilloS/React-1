import './index.css';
import NavigationBar from './componentes/NavigationBar';
//import Registro from './componentes/Registro';
//import Login from './componentes/Login';
import Home from './componentes/Home';
import { pizzaCart } from "./pizzas.js";
import Footer from './componentes/Footer';
import Cart from './componentes/Cart.jsx'


function App() {

  const [listaPizzas, setListaPizzas] = useState(pizzaCart);
  const totalPrecio = listaPizzas.map(pizza => pizza.price * pizza.count).reduce((a,b) => a + b, 0);

  return (
    <>
      <NavigationBar></NavigationBar>
      {<Home></Home>}
      {/*<Login></Login>*/}
      {/*<Registro></Registro>*/}
       <Cart listaPizzas={listaPizzas} setListaPizzas={setListaPizzas} />
      <Footer></Footer>
    </>
  )
}

export default App;