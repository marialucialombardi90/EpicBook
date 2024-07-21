import {Col, Card, Button} from "react-bootstrap";
import { ThemeContext } from "../context/ThemeContextProvider";
import { useContext } from "react";
import { Link } from "react-router-dom";

function SingleBook({book, selected, bookSelected}) {
  const {theme} = useContext(ThemeContext)
  

  return (
    <>
      <Col sm={12} md={4} lg={3}>
        <Card className={theme === 'light'? 'h-100 bookCard' : 'bg-dark h-100 bookCard bookCardBlack'} data-bs-theme={theme}>
          <Card.Img data-testid='card-img'
            className={bookSelected===book.asin ? "borderRed" : ""}
            onClick={() => selected(book.asin) }
            variant="top"
            src={book.img}
          />
          <Card.Body className="d-flex flex-column justify-content-between">
            <div>
              <Card.Title className="fs-6 text-center">{book.title}</Card.Title>
              <Card.Text className="text-center">{book.price} €</Card.Text>
            </div>
            <Button as={Link} to={`/book-details/${book.asin}`} >More detail</Button>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}

export default SingleBook;
