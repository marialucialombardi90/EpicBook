import { ThemeContext } from '../context/ThemeContextProvider';
import Alert from 'react-bootstrap/Alert';
import { useContext, useState } from 'react';

function Welcome() {
  const {theme} = useContext(ThemeContext)
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert className={theme ==="light"?"" : "bg-dark" } data-bs-theme={theme} variant="light" onClose={() => setShow(false)} dismissible>
        <Alert.Heading className='text-center'>Welcome To Epic Books</Alert.Heading>
      </Alert>
    );
  }
}

export default Welcome;