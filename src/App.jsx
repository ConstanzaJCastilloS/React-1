import {Routes, Route} from 'react-router-dom';
import './index.css';
import NavigationBar from './componentes/NavigationBar';
import Registro from './pages/Registro';
import Login from './pages/Login';
import Profile from './componentes/Profile.jsx';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Pizza from './pages/Pizza.jsx';
import Footer from './componentes/Footer';
import NotFound from './componentes/NotFound.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <>
      <NavigationBar></NavigationBar>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/profile" element={<Profile />}/>
          <Route path="/registro" element={<Registro/>}/>
          <Route path="/pizza/p001" element={<Pizza/>}/>
          <Route path="/404" element={<NotFound />}/>
          <Route path="*" element={<NotFound />}/>
        </Routes>  
      <Footer></Footer>
    </>
  )
}

export default App;