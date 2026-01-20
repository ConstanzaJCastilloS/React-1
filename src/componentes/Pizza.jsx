import { useEffect, useState } from "react"
import Button from "react-bootstrap/Button"
import './pizza.css'

const Pizza = () => {
  const [pizza, setPizza] = useState(null)

  const consultarApi = async () => {
    const response = await fetch("http://localhost:5000/api/pizzas/p001")
    const data = await response.json()
    setPizza(data)
  }

  useEffect(() => {
    consultarApi()
  }, [])

  if (!pizza) return <p className="text-center mt-5">Cargando pizza...</p>

  return (
    <div className="d-flex justify-content-center mt-5">
      <div className="card pizzaDetalle">

        <div className="cardHeader">
          <img src={pizza.img} alt={pizza.name} />
          <h2>{pizza.name}</h2>
          <hr />
        </div>

        <div className="cardBody">
          <p className="pizzaDesc">{pizza.desc}</p>

          <h3>Ingredientes</h3>
          <ul>
            {pizza.ingredients.map((ingrediente, index) => (
              <li key={index}>🍕 {ingrediente}</li>
            ))}
          </ul>

          <hr style={{ borderTop: "2px solid #252525ff" }} />
        </div>

        <div className="cardFooter">
          <h3>Precio: ${pizza.price}</h3>
          <div className="btnCf">
            <Button variant="dark">Añadir 🛒</Button>
            <Button variant="light btn-outline-dark">Volver</Button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Pizza