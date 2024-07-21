import SingleBook from "./SingleBook";
import CommentArea from "./CommentArea";
import { ThemeContext } from "../context/ThemeContextProvider";
import {Row, Container, Col} from "react-bootstrap/";
import { useState, useContext } from "react";

function AllTheBooks({filterBook}) {
  const {theme} = useContext(ThemeContext)
  const [bookSelected, setBookSelected] = useState(null);
  const selected = (asin) => {
    if (bookSelected === asin) {
      setBookSelected(null)
    } else {
    setBookSelected(asin);
  }
  };

  return (
    <>
      <Container fluid className={theme ==="light" ? "" : "bg-dark marginTopDark" } data-bs-theme={theme} >
        <Row>
          <Col md={8} >
          <Row className="gy-4">
          {filterBook.map((element) => (
            <SingleBook book={element} bookSelected={bookSelected} selected={selected}  />
          ))}
          </Row>
          </Col>
          <Col md= {4}>
          {bookSelected && <CommentArea asin={bookSelected}/>}
          </Col>
        </Row>
        
      </Container>
    </>
  );
}

export default AllTheBooks;
