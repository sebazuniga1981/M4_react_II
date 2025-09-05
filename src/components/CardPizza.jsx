import Card from 'react-bootstrap/Card'
import  Button  from 'react-bootstrap/Button'

const CardPizza = ({ name, price, ingredients, img }) => {
    return (
      <Card style={{ width: "18rem", margin: "1rem", minHeight: "430px" }}>
        <Card.Img variant="top" src={img} alt={name} />
        <Card.Body
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            <strong>Precio:</strong> ${price.toLocaleString("es-CL")} <br />
            <strong>Ingredientes:</strong> {ingredients.join(", ")}
          </Card.Text>
          
          {/* Contendeor flex para los botones */}
          <div style={{ display: "flex", gap: "0.5rem" }}>
            <Button
              style={{
                flex: 1,
                backgroundColor: "black",
                color: "White",
                border: "none",
              }}
            >
              Ver más
            </Button>
            <Button
              style={{
                flex: 1,
                backgroundColor: "white",
                color: "black",
                border: "1px solid black",
              }}
            >
              Añadir
            </Button>
          </div>
        </Card.Body>
      </Card>
    );
};
export default CardPizza;