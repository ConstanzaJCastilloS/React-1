import './index.css';
import NavigationBar from './componentes/NavigationBar';
//import Registro from './componentes/Registro';
//import Login from './componentes/Login';
//import Home from './componentes/Home';
import Footer from './componentes/Footer';
//import Cart from './componentes/Cart.jsx'
import Pizza from './componentes/Pizza'


function App() {

  return (
    <>
      <NavigationBar></NavigationBar>
      {/*<Home></Home>}
      {/*<Cart></Cart>*/}
      {/*<Login></Login>*/}
      {/*<Registro></Registro>*/}
      <Pizza></Pizza>
      <Footer></Footer>
    </>
  )
}

export default App;