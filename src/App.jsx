import './index.css';
import NavigationBar from './componentes/NavigationBar';
import Home from './componentes/Home';
import Registro from './componentes/Registro';
import Login from './componentes/Login';
import Footer from './componentes/Footer';


function App() {

  return (
    <>
      <NavigationBar></NavigationBar>
      {/*<Home></Home>*/}
      {/*<Login></Login>*/}
      <Registro></Registro>
      <Footer></Footer>
    </>
  )
}

export default App;