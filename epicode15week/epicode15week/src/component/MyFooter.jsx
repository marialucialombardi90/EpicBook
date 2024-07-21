import { Container, Row, Col } from "react-bootstrap";
import { ThemeContext } from "../context/ThemeContextProvider";
import { useContext } from "react";

function MyFooter() {
  const {theme} = useContext(ThemeContext)

  return (
    <Container fluid className={theme === 'light' ? 'footerLight mt-4' : 'footerDark bg-dark'}>
      <Row className="justify-content-center py-3">
        <Col xs={12} sm={4} className="text-center">
          Epicbook Bookshop srl - Viale Abruzzi, 100 20133 Milano
        </Col>
        <Col xs={12} sm={4} className="text-center">
          P.I: 1234567890
        </Col>
        <Col xs={12} sm={4} className="text-center">
          Reg. imprese Milano nr. 05329570963 - R.E.A. MI 1813088
        </Col>
      </Row>
    </Container>
  );
}

export default MyFooter;
