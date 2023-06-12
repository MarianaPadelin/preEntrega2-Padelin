import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import "./Detalle.css"
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Contador } from "../../common/ProductCard/Contador";

export const DetallePresentacional = ({ seleccionado }) => {
   const onAdd = (cantidad) => {
     let data = {
       ...seleccionado,
       quantity: cantidad,
     };

     console.log(data);
   };
  return (
    <div>
      <Card className="card">
        <Card.Header as="h3">{seleccionado.title}</Card.Header>
        <Card.Body>
          <Carousel>
            <Carousel.Item>
              <Container className="containerImg">
                <img
                  className="d-flex"
                  src={seleccionado.img}
                  alt="Primer foto"
                  style={{ height: 400 }}
                />
              </Container>
            </Carousel.Item>
            <Carousel.Item>
              <Container className="containerImg">
                <img
                  className="d-flex"
                  src={seleccionado.img}
                  alt="Segunda foto"
                  style={{ height: 400 }}
                />
              </Container>
            </Carousel.Item>
          </Carousel>
          <br></br>
          <Card.Text as="h4">
            <b>{seleccionado.description}</b>
          </Card.Text>
          <Card.Title>CATEGORÍA: {seleccionado.category}</Card.Title>
          <Card.Title>LÍNEA: {seleccionado.linea}</Card.Title>
          <br></br>
          <Card.Title as="h3">
            ${seleccionado.price}
            {seleccionado.stock > 0 && (
              <Contador
                stock={seleccionado.stock}
                initial={1}
                onAdd={onAdd}
              />
            ) }
            
          </Card.Title>
          <br></br>
          <Link to="/">
            <Button className="botonVolver">Volver</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}

