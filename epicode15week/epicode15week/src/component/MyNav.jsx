import { ThemeContext } from '../context/ThemeContextProvider';
import { InputGroup, Form, Row, Col, Container, Nav, Button, Navbar} from 'react-bootstrap';
import { useContext } from 'react';
import { Link } from 'react-router-dom';


function MyNav({filter}) {
  const {theme, toggleTheme} = useContext(ThemeContext)
  return (
    <Navbar className={theme === 'light'? '' : 'bg-dark'} data-bs-theme={theme} expand="lg">
      <Container>
        <Row>
        <Col className='mb-4' lg={4}>
        <Navbar.Brand href="#home">Epic Books</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to={'/'}>Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <Nav.Link href="#link">Browse</Nav.Link>
            <Button variant="link" ><svg onClick={() => toggleTheme()} xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-brightness-high-fill" viewBox="0 0 16 16">
  <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"/>
</svg></Button>
          </Nav>
        </Navbar.Collapse>
        </Col>
        <Col xs={10} lg= {8}>
        <InputGroup className="ms-5 mb-5">
          <InputGroup.Text id="inputGroup-sizing-default">
            Search
          </InputGroup.Text>
          <Form.Control
            onChange={filter}
            placeholder="Look for your book"
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </InputGroup>
        </Col>
        </Row>
      </Container>
    </Navbar>
  );
}

export default MyNav;