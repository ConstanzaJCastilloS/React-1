import { useState, useEffect } from "react"
import CardPizza from "../componentes/CardPizza.jsx"
import Header from "../componentes/Header.jsx"

 
const Home = () => {
  const [pizzas, setPizzas] = useState([])

  const consultarApi = async () => {
    const url = "http://localhost:5000/api/pizzas"
    const response = await fetch(url)
    const data = await response.json()
    setPizzas(data)
  }

  useEffect(() => {
    consultarApi()
  }, [])

  return (
    <div className="main">
      <Header/>
 
      <div className="d-flex justify-content-center flex-wrap gap-4 p-4">
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
    </div>
  )
}

export default Home