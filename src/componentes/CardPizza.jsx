import Button from "react-bootstrap/Button";


function CardPizza({ productName, ingreDientes, precio, imagen}) {

  return (
    <>

      
      <div className="card">
       
        <div className="cardHeader">
          <img src={imagen}/>
          <h2>{productName}</h2>
          <hr />
        </div>
        
        <div className="cardBody">
          <h3>Ingredientes</h3>
          <ul>
            {ingreDientes.map((ingrediente, index) => (
              <li key={index}>🍕 {ingrediente}</li>
            ))}
          </ul>
          <hr style={{ borderTop: "2px solid #252525ff" }} />
        </div>
      

        <div className="cardFooter">
            <h3>Precio: {precio}</h3>
            <div className='btnCf'>
                  <Button className="cardBtn" variant="light btn-outline-dark" >Ver Más 👀</Button>
                  <Button className="cardBtn" variant="dark">Añadir 🛒</Button>
            </div>
        </div>
      
      </div>
    </>
  );
}

export default CardPizza;