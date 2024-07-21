import CommentArea from "../component/CommentArea";
import { ThemeContext } from "../context/ThemeContextProvider";
import { books } from "../data/books";
import { Card, Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useContext } from "react";

function BookDetails() {
  const { theme } = useContext(ThemeContext);
  const { asin } = useParams();
  const bookSelected = books.find((book) => book.asin === asin);

  return (
    <>
      <div className={theme === "light" ? "" : "bg-dark"} data-bs-theme={theme}>
        <h2
          className={
            theme === "light"
              ? "text-center mb-5"
              : "bg-dark text-center mb-5 text-white"
          }
        >
          {bookSelected.title}
        </h2>
        <Container>
          <Row>
            <Col className="d-flex justify-content-center" xs={12} lg={8}>
              <div>
                <Card className={theme === "light" ? "" : "bg-dark marginTopDark"} data-bs-theme={theme}>
                  <Card.Img variant="top" src={bookSelected.img} />
                  <Card.Body className="d-flex flex-column justify-content-between">
                    <Card.Title className="fs-6 text-center">
                      {bookSelected.title}
                    </Card.Title>
                    <Card.Text className="text-center">
                      {bookSelected.price} €
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </Col>
            <Col xs={12} lg={4}>
              <CommentArea asin={asin} />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default BookDetails;
